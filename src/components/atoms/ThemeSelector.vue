<template>
  <div class="relative z-50" ref="dropdownRef">
    <!-- Theme Dropdown Button -->
    <button 
      @click="isOpen = !isOpen"
      class="relative overflow-hidden group flex items-center space-x-2 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none theme-selector-btn"
      :title="currentTheme.name"
    >
      <!-- Palette Icon -->
      <Palette class="w-4 h-4" style="color: var(--color-accent);" />
      
      <!-- Theme Name (hidden on mobile) -->
      <span class="hidden sm:block text-sm font-medium" style="color: var(--color-text-primary);">{{ t(`theme.names.${currentTheme.id}`) || currentTheme.name }}</span>
      
      <!-- Dropdown Arrow -->
      <ChevronDown 
        class="w-4 h-4 transition-transform duration-200"
        style="color: var(--color-text-secondary);"
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
        class="absolute right-0 mt-2 w-64 rounded-xl shadow-lg z-[9999] overflow-hidden mobile-dropdown theme-dropdown"
      >
        <div class="p-2">
          <div class="text-xs font-semibold uppercase tracking-wide px-3 py-2"
               style="color: var(--color-text-secondary);">
            {{ t('theme.choose_theme') || 'Choose Theme' }}
          </div>
          
          <div class="space-y-1">
            <button
              v-for="theme in themes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group focus:outline-none theme-option"
              :class="{ 'theme-option-selected': currentThemeId === theme.id }"
            >
              <!-- Color Preview -->
              <div class="flex space-x-1">
                <div 
                  class="w-4 h-4 rounded-full border"
                  style="border-color: rgba(255, 255, 255, 0.2);"
                  :style="{ background: theme.colors.accent }"
                ></div>
                <div 
                  class="w-4 h-4 rounded-full border"
                  style="border-color: rgba(255, 255, 255, 0.2);"
                  :style="{ background: theme.colors.primary }"
                ></div>
              </div>
              
              <!-- Theme Info -->
              <div class="flex-1 text-left">
                <div class="text-sm font-medium" style="color: var(--color-text-primary);">{{ t(`theme.names.${theme.id}`) || theme.name }}</div>
                <div class="text-xs" style="color: var(--color-text-secondary);">{{ t(`theme.descriptions.${theme.id}`) || 'Custom Theme' }}</div>
              </div>
              
              <!-- Selected Indicator -->
              <Check 
                v-if="currentThemeId === theme.id"
                class="w-4 h-4"
                style="color: var(--color-accent);"
              />
            </button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown, Check, Palette } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { t } = useI18n()
const { themes, currentTheme, currentThemeId, setTheme } = useTheme()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const selectTheme = (themeId: string) => {
  setTheme(themeId)
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
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
/* Theme Selector Button */
.theme-selector-btn {
  background-color: rgba(var(--color-secondary-rgb), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.theme-selector-btn:hover {
  background-color: rgba(var(--color-secondary-rgb), 0.9);
  border-color: rgba(var(--accent-rgb), 0.3);
}

/* Theme Dropdown */
.theme-dropdown {
  background-color: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Theme Options */
.theme-option:hover {
  background-color: rgba(var(--color-tertiary-rgb), 0.5);
}

.theme-option-selected {
  background-color: rgba(var(--color-tertiary-rgb), 0.6);
}

/* Mobile-specific adjustments for theme selector */
@media (max-width: 768px) {
  .mobile-dropdown {
    position: static !important;
    width: 100% !important;
    margin-top: 0.5rem !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    max-height: 200px;
    overflow-y: auto;
  }
}

/* Light theme adaptations */
[data-theme="light"] .theme-dropdown,
[data-theme="light-blue"] .theme-dropdown {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
}

[data-theme="light"] .theme-selector-btn,
[data-theme="light-blue"] .theme-selector-btn {
  background-color: rgba(255, 255, 255, 0.8) !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
}

[data-theme="light"] .theme-selector-btn:hover,
[data-theme="light-blue"] .theme-selector-btn:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-color: rgba(var(--accent-rgb), 0.3) !important;
}

[data-theme="light"] .theme-option:hover,
[data-theme="light-blue"] .theme-option:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

[data-theme="light"] .theme-option-selected,
[data-theme="light-blue"] .theme-option-selected {
  background-color: rgba(0, 0, 0, 0.08) !important;
}
</style>
