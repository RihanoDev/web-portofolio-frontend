<template>
  <div class="floating-view-counter">
    <!-- Floating View Counter -->
    <div 
      class="fixed bottom-6 right-6 z-40 view-counter-glass rounded-full p-3 shadow-lg cursor-pointer group transition-all duration-300 hover:scale-105"
      @mouseenter="showDetails = true"
      @mouseleave="showDetails = false"
    >
      <!-- Main Counter Display -->
      <div class="flex items-center space-x-2 text-sm">
        <Eye class="w-4 h-4 text-primary-400" />
        <span class="text-text-primary font-medium">{{ formatNumber(totalViews) }}</span>
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
        >
          <div class="space-y-2">
            <div class="text-sm font-semibold text-primary-400 mb-3 flex items-center gap-2">
              <BarChart3 class="w-4 h-4" />
              View Analytics
            </div>
            
            <div class="space-y-1.5">
              <div class="flex justify-between space-x-6">
                <span class="text-text-secondary text-xs">Total Views:</span>
                <span class="font-semibold text-text-primary text-xs">{{ formatNumber(totalViews) }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-text-secondary text-xs">Today:</span>
                <span class="font-semibold text-green-400 text-xs">{{ todayViews }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-text-secondary text-xs">This Week:</span>
                <span class="font-semibold text-text-primary text-xs">{{ weekViews }}</span>
              </div>
              <div class="flex justify-between space-x-6">
                <span class="text-text-secondary text-xs">This Month:</span>
                <span class="font-semibold text-text-primary text-xs">{{ monthViews }}</span>
              </div>
              <div class="border-t border-border-subtle pt-1.5 mt-2">
                <div class="flex justify-between space-x-6">
                  <span class="text-text-secondary text-xs">Unique Visitors:</span>
                  <span class="font-semibold text-blue-400 text-xs">{{ formatNumber(uniqueVisitors) }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Arrow pointer -->
          <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Eye, BarChart3 } from 'lucide-vue-next'

const showDetails = ref(false)

// Real analytics data
const totalViews = ref(0)
const todayViews = ref(0)
const weekViews = ref(0)
const monthViews = ref(0)
const uniqueVisitors = ref(0)
const isLoading = ref(true)

// Format large numbers
const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Analytics helper functions
const initializeAnalyticsData = () => {
  const now = new Date()
  const visitorId = getVisitorId()
  const today = now.toDateString()
  const thisWeek = getWeekStart(now).toDateString()
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1).toDateString()
  
  return {
    totalViews: 1,
    dailyViews: { [today]: 1 },
    weeklyViews: { [thisWeek]: 1 },
    monthlyViews: { [thisMonth]: 1 },
    uniqueVisitors: [visitorId],
    dates: { today, thisWeek, thisMonth }
  }
}

const updateExistingData = (data: any) => {
  const now = new Date()
  const today = now.toDateString()
  const thisWeek = getWeekStart(now).toDateString()
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1).toDateString()
  const visitorId = getVisitorId()
  
  // Initialize missing properties
  if (!data.totalViews) data.totalViews = 0
  if (!data.dailyViews) data.dailyViews = {}
  if (!data.weeklyViews) data.weeklyViews = {}
  if (!data.monthlyViews) data.monthlyViews = {}
  if (!data.uniqueVisitors) data.uniqueVisitors = []
  
  // Increment counters
  data.totalViews += 1
  data.dailyViews[today] = (data.dailyViews[today] || 0) + 1
  data.weeklyViews[thisWeek] = (data.weeklyViews[thisWeek] || 0) + 1
  data.monthlyViews[thisMonth] = (data.monthlyViews[thisMonth] || 0) + 1
  
  // Track unique visitors
  const visitors = Array.isArray(data.uniqueVisitors) ? new Set(data.uniqueVisitors) : new Set()
  visitors.add(visitorId)
  data.uniqueVisitors = Array.from(visitors)
  
  return { data, dates: { today, thisWeek, thisMonth } }
}

const setAnalyticsValues = (data: any, dates: any) => {
  totalViews.value = data.totalViews
  todayViews.value = data.dailyViews[dates.today] || 0
  weekViews.value = data.weeklyViews[dates.thisWeek] || 0
  monthViews.value = data.monthlyViews[dates.thisMonth] || 0
  uniqueVisitors.value = data.uniqueVisitors.length
}

// Get real analytics data
const fetchAnalytics = async () => {
  try {
    const storageKey = 'portfolio_analytics'
    const stored = localStorage.getItem(storageKey)
    
    if (stored) {
      const { data, dates } = updateExistingData(JSON.parse(stored))
      setAnalyticsValues(data, dates)
      localStorage.setItem(storageKey, JSON.stringify(data))
    } else {
      const newData = initializeAnalyticsData()
      setAnalyticsValues(newData, newData.dates)
      localStorage.setItem(storageKey, JSON.stringify(newData))
    }
    
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching analytics:', error)
    // Fallback to basic counting
    totalViews.value = parseInt(localStorage.getItem('simple_view_count') || '0') + 1
    localStorage.setItem('simple_view_count', totalViews.value.toString())
    isLoading.value = false
  }
}

// Helper functions
const getVisitorId = () => {
  let visitorId = localStorage.getItem('visitor_id')
  if (!visitorId) {
    visitorId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('visitor_id', visitorId)
  }
  return visitorId
}

const getWeekStart = (date: Date) => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day
  return new Date(d.setDate(diff))
}

onMounted(() => {
  fetchAnalytics()
})
</script>

<style scoped>
.floating-view-counter {
  /* Ensure it stays above other floating elements */
  z-index: 40;
}

/* Custom glass effect for view counter only */
.view-counter-glass {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.view-counter-tooltip {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .floating-view-counter {
    .fixed {
      bottom: 4rem;
      right: 1rem;
    }
  }
}
</style>
