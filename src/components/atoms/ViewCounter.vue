<template>
  <div class="view-counter">
    <!-- Main Counter Display -->
    <div 
      class="flex items-center space-x-2 text-sm"
      style="color: var(--color-text-secondary);"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <Eye class="w-4 h-4" />
      <span v-if="!isLoading">{{ formatNumber(totalViews) }}</span>
      <span v-else class="animate-pulse">{{ $t('common.loading') || 'Loading...' }}</span>
      <span v-if="todayViews > 0 && !isLoading" style="color: var(--color-accent);">
        (+{{ todayViews }})
      </span>
    </div>

    <!-- Detailed Analytics (shown on hover) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="showDetails && !isLoading"
        class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10 whitespace-nowrap rounded-lg p-3 shadow-xl"
        style="background: rgba(var(--color-secondary-rgb), 0.95); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1);"
      >
        <div class="space-y-1 text-xs">
          <div class="flex justify-between space-x-4">
            <span style="color: var(--color-text-secondary);">{{ $t('analytics.total_views') || 'Total Views:' }}</span>
            <span class="font-semibold" style="color: var(--color-text-primary);">{{ formatNumber(totalViews) }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span style="color: var(--color-text-secondary);">{{ $t('analytics.today') || 'Today:' }}</span>
            <span class="font-semibold" style="color: var(--color-accent);">{{ todayViews }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span style="color: var(--color-text-secondary);">{{ $t('analytics.this_week') || 'This Week:' }}</span>
            <span class="font-semibold" style="color: var(--color-text-primary);">{{ weekViews }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span style="color: var(--color-text-secondary);">{{ $t('analytics.this_month') || 'This Month:' }}</span>
            <span class="font-semibold" style="color: var(--color-text-primary);">{{ monthViews }}</span>
          </div>
          <div class="border-t pt-1 mt-1" style="border-color: rgba(255, 255, 255, 0.1);">
            <div class="flex justify-between space-x-4">
              <span style="color: var(--color-text-secondary);">{{ $t('analytics.unique_visitors') || 'Unique Visitors:' }}</span>
              <span class="font-semibold" style="color: var(--color-accent);">{{ formatNumber(uniqueVisitors) }}</span>
            </div>
          </div>
          <div v-if="error" class="text-xs text-red-400 mt-2">
            {{ error }}
          </div>
        </div>
        <!-- Arrow -->
        <div 
          class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
          style="border-top-color: rgba(var(--color-secondary-rgb), 0.95);"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Eye } from 'lucide-vue-next'
import { useGlobalAnalytics } from '../../composables/useAnalytics'

// Props
interface Props {
  page?: string
  autoTrack?: boolean
  updateInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  page: undefined,
  autoTrack: true,
  updateInterval: 60000 // 1 minute
})

// Analytics composable
const analytics = useGlobalAnalytics()

// Local state
const showDetails = ref(false)
let detailsTimeout: number
let cleanup: (() => void) | null = null

// Computed properties from analytics
const totalViews = computed(() => analytics.totalViews)
const todayViews = computed(() => analytics.todayViews)
const weekViews = computed(() => analytics.weekViews)
const monthViews = computed(() => analytics.monthViews)
const uniqueVisitors = computed(() => analytics.uniqueVisitors)
const isLoading = computed(() => analytics.isLoading)
const error = computed(() => analytics.error)

// Mouse events for showing details
const handleMouseEnter = () => {
  clearTimeout(detailsTimeout)
  detailsTimeout = window.setTimeout(() => {
    showDetails.value = true
  }, 500) // Show after 500ms hover
}

const handleMouseLeave = () => {
  clearTimeout(detailsTimeout)
  showDetails.value = false
}

// Format large numbers
const formatNumber = (num: number): string => {
  return analytics.formatNumber(num)
}

// Initialize analytics on mount
onMounted(async () => {
  try {
    // Initialize analytics with demo data
    analytics.initializeAnalytics()
    
    if (props.autoTrack) {
      // Start tracking for current page
      cleanup = analytics.startTracking(props.page, props.updateInterval)
    } else {
      // Just fetch current view count
      await analytics.fetchViewCount(props.page)
    }
  } catch (err) {
    console.error('Failed to initialize view counter:', err)
  }
})

// Cleanup on unmount
onUnmounted(() => {
  clearTimeout(detailsTimeout)
  if (cleanup) {
    cleanup()
  }
})

// Expose methods for parent components
defineExpose({
  refresh: () => analytics.fetchViewCount(props.page),
  trackView: () => analytics.trackPageView(props.page || window.location.pathname)
})
</script>

<style scoped>
.view-counter {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.view-counter:hover .flex {
  color: var(--color-accent);
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
</style>
