import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable to track document visibility state
 * Useful for pausing/resuming operations when the page is not visible
 */
export function useVisibilityState() {
  const isVisible = ref(document.visibilityState === 'visible')
  
  const handleVisibilityChange = () => {
    isVisible.value = document.visibilityState === 'visible'
  }
  
  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
  })
  
  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  })
  
  return {
    isVisible
  }
}
