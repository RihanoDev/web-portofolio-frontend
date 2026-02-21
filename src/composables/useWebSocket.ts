import { ref } from 'vue'
// Using event emitter pattern for view count updates
import mitt from 'mitt'

// Create an event emitter instance
export const viewCountEventEmitter = mitt()

export interface WebSocketMessage {
  type: string
  data: any
  channel?: string
}

export interface ViewCountsUpdate {
  total: number
  today: number
  week: number
  month: number
  unique: number
  page?: string
}

// WebSocket connection status
export type WebSocketStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

export function useWebSocket() {
  const socket = ref<WebSocket | null>(null)
  const connectionStatus = ref<WebSocketStatus>('disconnected')
  const lastMessage = ref<WebSocketMessage | null>(null)
  const viewCounts = ref<Record<string, ViewCountsUpdate>>({
    global: {
      total: 0,
      today: 0,
      week: 0,
      month: 0,
      unique: 0
    }
  })
  const reconnectAttempts = ref(0)
  const maxReconnectAttempts = 5
  const reconnectDelay = 2000 // Start with 2 seconds

  // Initialize WebSocket connection
  const connectWebSocket = () => {
    if (socket.value && (socket.value.readyState === WebSocket.OPEN || socket.value.readyState === WebSocket.CONNECTING)) {
      console.log('WebSocket already connected or connecting')
      return
    }

    connectionStatus.value = 'connecting'

    // Determine WebSocket URL based on environment
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
    const wsBase = import.meta.env.VITE_WS_BASE_URL || `${protocol}://${window.location.host}`
    const wsUrl = `${wsBase}/ws/analytics`

    try {
      socket.value = new WebSocket(wsUrl)

      socket.value.onopen = () => {
        connectionStatus.value = 'connected'
        reconnectAttempts.value = 0
        console.log('WebSocket connection established')
      }

      socket.value.onmessage = (event: MessageEvent) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data)
          lastMessage.value = message

          if (message.type === 'view_counts' && message.data) {
            const counts = message.data as ViewCountsUpdate
            const channel = message.channel || 'global'

            // Update view counts for the specific page or global
            viewCounts.value[channel] = counts

            // Emit event with updated view counts
            viewCountEventEmitter.emit('viewCountsUpdated', {
              channel,
              counts
            })
          }
        } catch (err) {
          console.error('Failed to parse WebSocket message:', err)
        }
      }

      socket.value.onclose = (event) => {
        if (event.wasClean) {
          console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`)
        } else {
          console.warn('WebSocket connection died')
          // Try to reconnect if the connection was not closed cleanly
          reconnect()
        }
        connectionStatus.value = 'disconnected'
      }

      socket.value.onerror = (error) => {
        console.error('WebSocket error:', error)
        connectionStatus.value = 'error'
      }
    } catch (error) {
      console.error('WebSocket connection error:', error)
      connectionStatus.value = 'error'
      reconnect()
    }
  }

  // Close WebSocket connection
  const disconnectWebSocket = () => {
    if (socket.value) {
      socket.value.close()
      socket.value = null
      connectionStatus.value = 'disconnected'
    }
  }

  // Reconnect with exponential backoff
  const reconnect = () => {
    if (reconnectAttempts.value >= maxReconnectAttempts) {
      console.log('Max reconnect attempts reached')
      return
    }

    reconnectAttempts.value++
    const delay = reconnectDelay * Math.pow(2, reconnectAttempts.value - 1)

    setTimeout(() => {
      console.log(`Attempting to reconnect (${reconnectAttempts.value}/${maxReconnectAttempts})`)
      connectWebSocket()
    }, delay)
  }

  // Check if WebSocket is connected
  const isConnected = () => {
    return socket.value?.readyState === WebSocket.OPEN
  }

  // Send message to WebSocket server
  const sendMessage = (message: any) => {
    if (isConnected() && socket.value) {
      socket.value.send(JSON.stringify(message))
      return true
    }
    return false
  }

  // Get view counts for a specific page
  const getViewCounts = (page?: string) => {
    if (!page) {
      // Return global counts if no page specified
      return viewCounts.value.global || {
        total: 0,
        today: 0,
        week: 0,
        month: 0,
        unique: 0
      }
    }

    // Look for page-specific counts
    const key = `page:${page}`
    return viewCounts.value[key] || {
      total: 0,
      today: 0,
      week: 0,
      month: 0,
      unique: 0,
      page
    }
  }

  // Note: connectWebSocket and disconnectWebSocket are called explicitly by the consumer.
  // onMounted/onUnmounted are intentionally NOT used here because this composable
  // may be called outside of a component's synchronous setup() context.

  return {
    socket,
    connectionStatus,
    lastMessage,
    viewCounts,
    isConnected,
    connectWebSocket,
    disconnectWebSocket,
    sendMessage,
    getViewCounts
  }
}
