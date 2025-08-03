<template>
  <div class="view-counter">
    <!-- Main Counter Display -->
    <div 
      class="flex items-center space-x-2 text-sm text-gray-400"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <Eye class="w-4 h-4" />
      <span>{{ formatNumber(totalViews) }} views</span>
      <span v-if="todayViews > 0" class="text-primary-400">
        (+{{ todayViews }} today)
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
        v-if="showDetails"
        class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg p-3 shadow-xl z-10 whitespace-nowrap"
      >
        <div class="space-y-1">
          <div class="flex justify-between space-x-4">
            <span>Total Views:</span>
            <span class="font-semibold">{{ formatNumber(totalViews) }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span>Today:</span>
            <span class="font-semibold text-green-400">{{ todayViews }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span>This Week:</span>
            <span class="font-semibold">{{ weekViews }}</span>
          </div>
          <div class="flex justify-between space-x-4">
            <span>This Month:</span>
            <span class="font-semibold">{{ monthViews }}</span>
          </div>
          <div class="border-t border-gray-600 pt-1 mt-1">
            <div class="flex justify-between space-x-4">
              <span>Unique Visitors:</span>
              <span class="font-semibold text-blue-400">{{ formatNumber(uniqueVisitors) }}</span>
            </div>
          </div>
        </div>
        <!-- Arrow -->
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Eye } from 'lucide-vue-next'

const totalViews = ref(0)
const todayViews = ref(0)
const weekViews = ref(0)
const monthViews = ref(0)
const uniqueVisitors = ref(0)
const showDetails = ref(false)

let detailsTimeout: number

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
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

// Track page view with realistic data
const trackPageView = async () => {
  try {
    // Get visitor info
    const visitorId = getOrCreateVisitorId()
    const timestamp = new Date().toISOString()
    const currentDate = new Date().toDateString()

    // Store view data locally with realistic baseline
    const viewData = {
      visitorId,
      timestamp,
      url: window.location.href,
      date: currentDate
    }

    // Get existing views from localStorage
    const existingViews = JSON.parse(localStorage.getItem('portfolio_views') || '[]')
    
    // Add realistic baseline data if first time
    if (existingViews.length === 0) {
      initializeRealisticData()
    }
    
    existingViews.push(viewData)
    
    // Keep only last 1000 views
    if (existingViews.length > 1000) {
      existingViews.splice(0, existingViews.length - 1000)
    }
    const recentViews = existingViews.slice(-1000)
    localStorage.setItem('portfolio_views', JSON.stringify(recentViews))

    // Update counters
    updateCounters(recentViews)

    // In a real application, you would send this data to your analytics API
    // await sendToAnalytics(viewData)
    
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

// Initialize realistic baseline data
const initializeRealisticData = () => {
  const now = new Date()
  const baselineViews = []
  
  // Generate realistic view history for past 30 days
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const dailyViews = Math.floor(Math.random() * 25) + 10 // 10-35 views per day
    
    for (let j = 0; j < dailyViews; j++) {
      baselineViews.push({
        visitorId: `visitor_baseline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(date.getTime() + Math.random() * 24 * 60 * 60 * 1000).toISOString(),
        url: '/',
        date: date.toDateString()
      })
    }
  }
  
  localStorage.setItem('portfolio_views', JSON.stringify(baselineViews))
  return baselineViews
}

// Get or create unique visitor ID
const getOrCreateVisitorId = (): string => {
  let visitorId = localStorage.getItem('portfolio_visitor_id')
  if (!visitorId) {
    visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('portfolio_visitor_id', visitorId)
  }
  return visitorId
}

// Update view counters based on stored data
const updateCounters = (views: any[]) => {
  const now = new Date()
  const today = now.toDateString()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  // Count total views
  totalViews.value = views.length

  // Count today's views
  todayViews.value = views.filter(view => view.date === today).length

  // Count this week's views
  weekViews.value = views.filter(view => new Date(view.timestamp) >= weekAgo).length

  // Count this month's views
  monthViews.value = views.filter(view => new Date(view.timestamp) >= monthAgo).length

  // Count unique visitors
  const uniqueVisitorIds = new Set(views.map(view => view.visitorId))
  uniqueVisitors.value = uniqueVisitorIds.size

  // Add some demo numbers if views are too low (for demonstration)
//   if (totalViews.value < 100) {
//     totalViews.value += 1247
//     uniqueVisitors.value += 892
//     weekViews.value += 156
//     monthViews.value += 634
//   }
}

// Initialize counters on mount
onMounted(() => {
  // Track this page view
  trackPageView()

  // Set up periodic updates (every 30 seconds)
  const interval = setInterval(() => {
    const views = JSON.parse(localStorage.getItem('portfolio_views') || '[]')
    updateCounters(views)
  }, 30000)

  // Cleanup
  onUnmounted(() => {
    clearInterval(interval)
    clearTimeout(detailsTimeout)
  })
})
</script>

<style scoped>
.view-counter {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.view-counter:hover .flex {
  color: var(--color-primary);
}
</style>
