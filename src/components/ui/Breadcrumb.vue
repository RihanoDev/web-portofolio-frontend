<template>
  <nav class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
    <Home class="w-4 h-4" />
    <ChevronRight class="w-3 h-3" />
    
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link
        v-if="crumb.to && index < breadcrumbs.length - 1"
        :to="crumb.to"
        class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 capitalize"
      >
        {{ crumb.label }}
      </router-link>
      <span
        v-else
        class="text-gray-900 dark:text-gray-100 font-medium capitalize"
      >
        {{ crumb.label }}
      </span>
      
      <ChevronRight 
        v-if="index < breadcrumbs.length - 1"
        class="w-3 h-3"
      />
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, ChevronRight } from 'lucide-vue-next'

const route = useRoute()

interface Breadcrumb {
  label: string
  to?: string
}

const breadcrumbs = computed(() => {
  const crumbs: Breadcrumb[] = []
  
  // Split the path and create breadcrumbs
  const pathSegments = route.path.split('/').filter(segment => segment)
  
  pathSegments.forEach((segment, index) => {
    // Create the path up to this segment
    const to = '/' + pathSegments.slice(0, index + 1).join('/')
    
    // Format the label
    let label = segment.replace(/-/g, ' ')
    
    // Special cases for better labels
    const labelMap: Record<string, string> = {
      'projects': 'Projects',
      'about': 'About',
      'contact': 'Contact',
      'articles': 'Articles',
      'blog': 'Blog'
    }
    
    label = labelMap[segment] || label
    
    crumbs.push({
      label,
      to: index < pathSegments.length - 1 ? to : undefined
    })
  })
  
  // If we're on home page, just show "Home"
  if (crumbs.length === 0) {
    crumbs.push({ label: 'Home' })
  }
  
  return crumbs
})
</script>

<style scoped>
/* Additional styling for breadcrumbs */
nav {
  font-family: inherit;
}
</style>
