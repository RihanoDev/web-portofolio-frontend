<template>
  <div class="relative z-50">
    <!-- Theme Dropdown Button -->
    <button 
      @click="isOpen = !isOpen"
      class="bg-slate-800/80 border border-white/10 relative overflow-hidden group flex items-center space-x-2 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none hover:bg-slate-700/90 hover:border-orange-500/30"
      :title="currentTheme.name"
    >
      <!-- Palette Icon -->
      <Palette class="w-4 h-4 text-orange-400" />
      
      <!-- Theme Name (hidden on mobile) -->
      <span class="hidden sm:block text-sm font-medium text-white">{{ currentTheme.name }}</span>
      
      <!-- Dropdown Arrow -->
      <ChevronDown 
        class="w-4 h-4 transition-transform duration-200 text-slate-400"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-64 bg-slate-800/95 border border-white/20 rounded-xl shadow-2xl z-[9999] overflow-hidden mobile-dropdown"
      >
        <div class="p-2">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide px-3 py-2">
            Choose Theme
          </div>
          
          <div class="space-y-1">
            <button
              v-for="theme in themes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group focus:outline-none"
              :class="{ 'bg-slate-700/60': currentThemeId === theme.id }"
            >
              <!-- Color Preview -->
              <div class="flex space-x-1">
                <div 
                  class="w-4 h-4 rounded-full border border-white/20"
                  :style="{ background: theme.colors.accent }"
                ></div>
                <div 
                  class="w-4 h-4 rounded-full border border-white/20"
                  :style="{ background: theme.colors.primary }"
                ></div>
              </div>
              
              <!-- Theme Info -->
              <div class="flex-1 text-left">
                <div class="text-sm font-medium text-white">{{ theme.name }}</div>
                <div class="text-xs text-slate-400">{{ getThemeDescription(theme.id) }}</div>
              </div>
              
              <!-- Selected Indicator -->
              <Check 
                v-if="currentThemeId === theme.id"
                class="w-4 h-4 text-green-400"
              />
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Backdrop -->
    <div 
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-[9998]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Check, Palette } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { themes, currentTheme, currentThemeId, setTheme } = useTheme()

const isOpen = ref(false)

const selectTheme = (themeId: string) => {
  setTheme(themeId)
  isOpen.value = false
}

const getThemeDescription = (themeId: string) => {
  const descriptions: Record<string, string> = {
    'dark-orange': 'Warm & Energetic',
    'dark-blue': 'Professional & Clean',
    'dark-purple': 'Creative & Modern',
    'dark-green': 'Fresh & Natural',
    'cyberpunk': 'Futuristic & Bold',
    'light': 'Bright & Minimal',
    'light-blue': 'Clean & Modern'
  }
  return descriptions[themeId] || 'Custom Theme'
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Mobile-specific adjustments for theme selector */
@media (max-width: 768px) {
  .mobile-dropdown {
    position: static !important;
    width: 100% !important;
    margin-top: 0.5rem !important;
    box-shadow: none !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }
}

/* Ensure dropdown is visible above other elements */
.mobile-dropdown {
  background: rgba(30, 41, 59, 0.95) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
}
</style>
