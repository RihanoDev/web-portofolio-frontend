<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <router-link 
            to="/" 
            class="flex items-center group hover:scale-105 transition-transform duration-300 focus:outline-none"
          >
            <div class="w-10 h-10 rounded-full glass-subtle flex items-center justify-center mr-3 group-hover:shadow-lg transition-all duration-300">
              <img 
                src="../../assets/logo-navbar.png" 
                alt="RihanoDev Logo" 
                class="w-full h-full rounded-full object-cover"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold text-text-primary group-hover:text-primary-400 transition-colors duration-300">
                RihanoDev
              </span>
              <span class="text-xs text-text-secondary -mt-1">
                Backend Engineer
              </span>
            </div>
          </router-link>
        </div>

        <!-- Navigation Menu - Center -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-item flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none nav-link"
            :class="isActive(item.path) ? 'nav-active' : 'nav-default'"
          >
            <i :class="item.icon" class="text-sm transition-colors duration-300"></i>
            <span class="transition-colors duration-300">{{ item.name }}</span>
          </router-link>
        </div>

        <!-- Right Section - Theme & Resume -->
        <div class="flex items-center gap-4">
          <!-- Theme Selector -->
          <div class="hidden md:block">
            <ThemeSelector />
          </div>
          
          <!-- Resume Button -->
          <div class="hidden md:block relative group">
            <router-link 
              to="/resume"
              class="flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-white/10 rounded-lg font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-slate-700/90 hover:border-orange-500/30"
            >
              <FileText class="w-4 h-4" />
              <span>Resume</span>
            </router-link>
            
            <!-- Dropdown for additional options -->
            <div class="absolute right-0 top-full mt-2 w-48 bg-slate-800/95 border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="p-2 space-y-1">
                <router-link 
                  to="/resume"
                  class="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  <FileText class="w-4 h-4" />
                  <span>View Online</span>
                </router-link>
                <button
                  @click="downloadResume"
                  class="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  <Download class="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  @click="openResumeInNewTab"
                  class="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700/50 transition-all duration-200"
                >
                  <ExternalLink class="w-4 h-4" />
                  <span>Open in New Tab</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isOpen = !isOpen" 
            class="md:hidden p-2 rounded-lg bg-slate-800/80 border border-white/10 transition-all duration-300 focus:outline-none mobile-menu-button"
            :class="isOpen ? 'text-orange-400' : 'text-white'"
          >
            <Menu v-if="!isOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isOpen" class="absolute top-full left-0 right-0 md:hidden mt-2 mx-4">
          <div class="bg-slate-800/95 border border-white/20 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
            <!-- Navigation Links -->
            <div class="p-4 space-y-2">
              <router-link
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                @click="isOpen = false"
                class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 nav-link"
                :class="isActive(item.path) ? 'nav-active' : 'nav-default'"
              >
                <i :class="item.icon" class="text-sm"></i>
                <span>{{ item.name }}</span>
              </router-link>
            </div>

            <!-- Divider -->
            <div class="border-t border-white/10"></div>

            <!-- Resume Section -->
            <div class="p-4">
              <div class="space-y-3">
                <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2">
                  Resume
                </div>
                
                <router-link 
                  to="/resume"
                  @click="isOpen = false"
                  class="flex items-center gap-3 px-4 py-3 bg-slate-700/80 rounded-lg font-medium transition-all duration-300"
                >
                  <FileText class="w-4 h-4" />
                  <span>View Resume</span>
                </router-link>
                
                <div class="grid grid-cols-2 gap-2">
                  <button
                    @click="downloadResume; isOpen = false"
                    class="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-600/60"
                  >
                    <Download class="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  
                  <button
                    @click="openResumeInNewTab; isOpen = false"
                    class="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-600/60"
                  >
                    <ExternalLink class="w-4 h-4" />
                    <span>New Tab</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-white/10"></div>

            <!-- Theme Selector -->
            <div class="p-4">
              <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-3">
                Theme
              </div>
              
              <!-- Mobile Theme Grid -->
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="theme in availableThemes"
                  :key="theme.id"
                  @click="selectTheme(theme.id); isOpen = false"
                  class="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-600/60 group"
                  :class="{ 'bg-slate-600/70 border border-orange-400/30': currentThemeId === theme.id }"
                >
                  <!-- Color Preview -->
                  <div class="flex space-x-1">
                    <div 
                      class="w-3 h-3 rounded-full border border-white/20"
                      :style="{ background: theme.colors.accent }"
                    ></div>
                    <div 
                      class="w-3 h-3 rounded-full border border-white/20"
                      :style="{ background: theme.colors.primary }"
                    ></div>
                  </div>
                  
                  <!-- Theme Name -->
                  <span class="text-xs text-white group-hover:text-orange-400 transition-colors">
                    {{ theme.name }}
                  </span>
                  
                  <!-- Selected Indicator -->
                  <Check 
                    v-if="currentThemeId === theme.id"
                    class="w-3 h-3 text-green-400 ml-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, FileText, Download, ExternalLink, Check } from 'lucide-vue-next'
import ThemeSelector from '../atoms/ThemeSelector.vue'
import { downloadResume, openResumeInNewTab } from '../../composables/useResume'
import { useTheme } from '../../composables/useTheme'

const route = useRoute()
const isOpen = ref(false)

// Theme functionality
const { themes: availableThemes, currentThemeId, setTheme } = useTheme()

const selectTheme = (themeId: string) => {
  setTheme(themeId)
}

const navItems = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'About Me', path: '/about', icon: 'fas fa-user' },
  { name: 'Projects', path: '/projects', icon: 'fas fa-code' },
  { name: 'Articles', path: '/articles', icon: 'fas fa-newspaper' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
]

const isActive = (path: string) => {
  return route.path === path
}
</script>

<style scoped>
/* Clean Navigation Styles */
.nav-link {
  position: relative;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.nav-default {
  color: #94a3b8;
}

.nav-default:hover {
  color: #f97316;
  background: rgba(249, 115, 22, 0.1) !important;
}

.nav-active {
  color: #f97316;
  background: rgba(249, 115, 22, 0.15) !important;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.2) !important;
}

/* Enhanced glass effect for navbar - stronger blur to block floating icons */
.glass-nav {
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 4px 40px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

/* Override any orange/accent colors in navigation */
.nav-link:hover,
.nav-link:focus {
  color: #f97316 !important;
}

.nav-link i,
.nav-link span {
  color: inherit !important;
}
</style>


