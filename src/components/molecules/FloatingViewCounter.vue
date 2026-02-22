<template>
  <div class="floating-view-counter">
    <!-- Floating View Counter -->
    <div 
      class="fixed bottom-6 right-6 z-50 view-counter-glass rounded-full p-3 shadow-lg cursor-pointer group transition-all duration-300 hover:scale-105"
      @mouseenter="showDetails = true"
      @mouseleave="showDetails = false"
      @click.stop="showDetails = !showDetails"
    >
      <!-- Main Counter Display -->
      <div class="flex items-center space-x-2 text-sm">
        <Eye class="w-4 h-4" style="color: var(--color-accent);" />
        <span v-if="!isLoading" class="font-medium" style="color: var(--color-text-primary);">{{ formatNumber(totalViews) }}</span>
        <span v-else class="animate-pulse font-medium" style="color: var(--color-text-primary);">...</span>
      </div>

      <!-- Detailed Analytics Tooltip -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div 
          v-if="showDetails"
          class="absolute bottom-full right-0 mb-3 view-counter-tooltip rounded-lg p-4 shadow-xl whitespace-nowrap min-w-[200px]"
          @click.stop
        >
            <div class="space-y-2">
            <div class="text-sm font-semibold mb-3 flex items-center gap-2" style="color: var(--color-accent);">
              <BarChart3 class="w-4 h-4" />
              {{ $t('analytics.title') || 'View Analytics' }}
            </div>
            
            <div class="space-y-1.5">
              <div class="flex justify-between space-x-6">
                <span class="text-xs" style="color: var(--color-text-secondary);">{{ $t('analytics.total_views') || 'Total Views:' }}</span>
                <span class="font-semibold text-xs" style="color: var(--color-text-primary);">{{ formatNumber(totalViews) }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-xs" style="color: var(--color-text-secondary);">{{ $t('analytics.today') || 'Today:' }}</span>
                <span class="font-semibold text-xs text-green-400">{{ todayViews }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-xs" style="color: var(--color-text-secondary);">{{ $t('analytics.this_week') || 'This Week:' }}</span>
                <span class="font-semibold text-xs" style="color: var(--color-text-primary);">{{ weekViews }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-xs" style="color: var(--color-text-secondary);">{{ $t('analytics.this_month') || 'This Month:' }}</span>
                <span class="font-semibold text-xs" style="color: var(--color-text-primary);">{{ monthViews }}</span>
              </div>
              <div class="border-t pt-1.5 mt-2" style="border-color: var(--color-border);">
                <div class="flex justify-between space-x-6">
                  <span class="text-xs" style="color: var(--color-text-secondary);">{{ $t('analytics.unique_visitors') || 'Unique Visitors:' }}</span>
                  <span class="font-semibold text-xs text-blue-400">{{ formatNumber(uniqueVisitors) }}</span>
                </div>
              </div>
              <div v-if="error" class="text-xs text-red-400 mt-2">
                {{ error }}
              </div>
              
              <!-- WebSocket status indicator -->
              <div class="flex items-center justify-between mt-2 pt-1.5" style="border-top: 1px solid var(--color-border);">
                <span class="text-xs flex items-center gap-1" :class="isConnected ? 'text-green-400' : 'text-gray-400'">
                  <span class="inline-block w-2 h-2 rounded-full" :class="isConnected ? 'bg-green-400' : 'bg-gray-400'"></span>
                  {{ isConnected ? $t('analytics.live') : $t('analytics.offline') }}
                </span>
                <span class="text-xs text-gray-400">{{ currentPath }}</span>
              </div>
            </div>
          </div>
          
          <!-- Arrow pointer -->
          <div 
            class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
            style="border-top-color: rgba(var(--color-secondary-rgb), 0.9);"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Eye, BarChart3 } from 'lucide-vue-next'
import { useGlobalAnalytics } from '../../composables/useAnalytics'
import { useWebSocket } from '../../composables/useWebSocket'
import { useVisibilityState } from '../../composables/useVisibilityState'

// Current route
const route = useRoute()
const currentPath = computed(() => route.path)

// Analytics composable
const analytics = useGlobalAnalytics()

// WebSocket composable for real-time updates
const { connectionStatus, connectWebSocket, disconnectWebSocket } = useWebSocket()
const isConnected = computed(() => connectionStatus.value === 'connected')

// Visibility state to reconnect when tab becomes visible
const { isVisible } = useVisibilityState()

// Watch for visibility changes to reconnect WebSocket if needed
watch(isVisible, (visible) => {
  if (visible && !isConnected.value) {
    connectWebSocket()
  }
})

// Local state
const showDetails = ref(false)
let cleanup: (() => void) | null = null

// Close tooltip when clicking outside
const handleOutsideClick = () => {
  showDetails.value = false
}

// Computed properties from analytics
const totalViews = computed(() => analytics.totalViews)
const todayViews = computed(() => analytics.todayViews)
const weekViews = computed(() => analytics.weekViews)
const monthViews = computed(() => analytics.monthViews)
const uniqueVisitors = computed(() => analytics.uniqueVisitors)
const isLoading = computed(() => analytics.isLoading)
const error = computed(() => analytics.error)

// Format large numbers
const formatNumber = (num: number) => {
  return analytics.formatNumber(num)
}

  onMounted(async () => {
  try {
    
    
    // Initialize analytics with demo data
    await analytics.initializeAnalytics()
    
    // Start tracking for current page with WebSocket support
    cleanup = analytics.startTracking(currentPath.value, 60000)

    // Listen for outside clicks to close tooltip
    document.addEventListener('click', handleOutsideClick)
  } catch (err) {
    
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (cleanup) {
    cleanup()
  }
  disconnectWebSocket()
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<style scoped>
.floating-view-counter {
  /* Ensure it stays above other floating elements */
  z-index: 40;
}

/* Custom glass effect for view counter only */
.view-counter-glass {
  background: rgba(var(--color-secondary-rgb), 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--color-border);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.view-counter-tooltip {
  background: rgba(var(--color-secondary-rgb), 0.9);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid var(--color-border);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .floating-view-counter .fixed {
    bottom: 4rem;
    right: 1rem;
  }
}
</style>
