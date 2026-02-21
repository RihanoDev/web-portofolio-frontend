import { ref, reactive, readonly, onUnmounted, onMounted } from 'vue'
import { analyticsService } from '../services/analytics'
import { viewCountEventEmitter, useWebSocket } from './useWebSocket'
import type { ViewCountData, TrackViewRequest } from '../types/analytics'

// Reactive state for analytics
const viewCounts = reactive<ViewCountData>({
  total: 0,
  today: 0,
  week: 0,
  month: 0,
  unique: 0
})

const isLoading = ref(false)
const error = ref<string | null>(null)

// Generate or get visitor ID
const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('portfolio_visitor_id')
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
    localStorage.setItem('portfolio_visitor_id', visitorId)
  }
  return visitorId
}

// Generate or get session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('portfolio_session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
    sessionStorage.setItem('portfolio_session_id', sessionId)
  }
  return sessionId
}

export function useAnalytics() {
  let updateInterval: number | null = null
  const wsInitialized = ref(false)

  // Initialize WebSocket listeners
  const initWebSocketListeners = () => {
    if (wsInitialized.value) return
    
    // Listen for WebSocket view count updates
    viewCountEventEmitter.on('viewCountsUpdated', (data: any) => {
      if (data && data.counts) {
        const { counts } = data
        Object.assign(viewCounts, {
          total: counts.total || 0,
          today: counts.today || 0,
          week: counts.week || 0,
          month: counts.month || 0,
          unique: counts.unique || 0
        })
        // Update loading state
        isLoading.value = false
      }
    })
    
    wsInitialized.value = true
  }

  /**
   * Track a page view
   */
  const trackPageView = async (page: string = window.location.pathname) => {
    try {
      isLoading.value = true
      error.value = null

      const trackData: TrackViewRequest = {
        page,
        visitorId: getVisitorId(),
        sessionId: getSessionId(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || undefined
      }

      // Initialize WebSocket listeners if not already
      initWebSocketListeners()

      const response = await analyticsService.trackView(trackData)
      
      if (response.success && response.data) {
        // Update reactive state with fresh data
        Object.assign(viewCounts, response.data)
      }

    } catch (err) {
      console.error('Failed to track page view:', err)
      error.value = err instanceof Error ? err.message : 'Failed to track page view'
    } finally {
      // Always clear loading state after API call completes
      isLoading.value = false
    }
  }

  /**
   * Get view count for current page or overall
   */
  const fetchViewCount = async (page?: string) => {
    try {
      isLoading.value = true
      error.value = null

      const data = await analyticsService.getViewCount(page)
      Object.assign(viewCounts, data)

      return data
    } catch (err) {
      console.error('Failed to fetch view count:', err)
      error.value = err instanceof Error ? err.message : 'Failed to fetch view count'
      return viewCounts
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Start automatic tracking for current page
   */
  const startTracking = (page?: string, interval: number = 60000) => {
    // Initialize WebSocket listeners
    initWebSocketListeners()
    
    // Track initial page view
    trackPageView(page)

    // Set up periodic updates as fallback if WebSocket is not working
    if (updateInterval) {
      clearInterval(updateInterval)
    }

    updateInterval = window.setInterval(() => {
      fetchViewCount(page)
    }, interval)

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When page becomes visible again, get fresh data
        fetchViewCount(page)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Initialize WebSocket connection via the separate composable
    const { connectWebSocket } = useWebSocket()
    connectWebSocket()

    // Cleanup function
    return () => {
      if (updateInterval) {
        clearInterval(updateInterval)
        updateInterval = null
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }

  /**
   * Stop tracking
   */
  const stopTracking = () => {
    if (updateInterval) {
      clearInterval(updateInterval)
      updateInterval = null
    }
  }

  /**
   * Initialize analytics with demo data if needed
   */
  const initializeAnalytics = async () => {
    try {
      isLoading.value = true
      analyticsService.initializeDemoData()
      await fetchViewCount()
    } catch (err) {
      console.error('Failed to initialize analytics:', err)
      error.value = err instanceof Error ? err.message : 'Failed to initialize analytics'
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Format numbers for display
   */
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  /**
   * Get analytics for specific time periods
   */
  const getAnalyticsByPeriod = async (days: number) => {
    try {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - days)
      
      return await analyticsService.getAnalytics({
        startDate: startDate.toISOString(),
        endDate: new Date().toISOString()
      })
    } catch (err) {
      console.error('Failed to get analytics by period:', err)
      return viewCounts
    }
  }

  /**
   * Auto-cleanup on unmount
   */
  onUnmounted(() => {
    stopTracking()
  })

  return {
    // State
    viewCounts: readonly(viewCounts),
    isLoading: readonly(isLoading),
    error: readonly(error),

    // Methods
    trackPageView,
    fetchViewCount,
    startTracking,
    stopTracking,
    initializeAnalytics,
    formatNumber,
    getAnalyticsByPeriod,

    // Getters
    get totalViews() { return viewCounts.total },
    get todayViews() { return viewCounts.today },
    get weekViews() { return viewCounts.week },
    get monthViews() { return viewCounts.month },
    get uniqueVisitors() { return viewCounts.unique }
  }
}

// Global composable instance for sharing state across components
let globalAnalytics: ReturnType<typeof useAnalytics> | null = null

export function useGlobalAnalytics() {
  globalAnalytics ??= useAnalytics()
  return globalAnalytics
}
