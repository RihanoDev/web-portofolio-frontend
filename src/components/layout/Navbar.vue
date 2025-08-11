<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 custom-navbar">
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
              <span class="text-lg font-bold transition-colors duration-300" 
                    style="color: var(--color-text-primary);">
                RihanoDev
              </span>
              <span class="text-xs -mt-1" 
                    style="color: var(--color-text-secondary);">
                Backend Engineer
              </span>
            </div>
          </router-link>
        </div>

        <!-- Navigation Menu - Center -->
        <div class="hidden xl:flex items-center space-x-6">
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
          <div class="hidden xl:block">
            <ThemeSelector />
          </div>
          
          <!-- Resume Button -->
          <div class="hidden xl:block relative group">
            <router-link 
              to="/resume"
              class="resume-button flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105"
            >
              <FileText class="w-4 h-4" />
              <span>Resume</span>
            </router-link>
            
            <!-- Dropdown for additional options -->
            <div class="mobile-dropdown absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="p-2 space-y-1">
                <router-link 
                  to="/resume"
                  class="flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-opacity-50"
                  style="color: var(--color-text-secondary);"
                >
                  <FileText class="w-4 h-4" />
                  <span>View Online</span>
                </router-link>
                <button
                  @click="downloadResume"
                  class="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-opacity-50"
                  style="color: var(--color-text-secondary);"
                >
                  <Download class="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  @click="openResumeInNewTab"
                  class="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-opacity-50"
                  style="color: var(--color-text-secondary);"
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
            class="mobile-menu-button xl:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none"
            :style="{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text-primary)' }"
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
        <div v-if="isOpen" class="absolute top-full xl:hidden mt-2 left-4 right-4">
          <div class="mobile-dropdown rounded-xl shadow-2xl overflow-hidden ml-auto max-w-sm">
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
            <div class="border-t" style="border-color: rgba(255, 255, 255, 0.1);"></div>

            <!-- Resume Section -->
            <div class="p-4">
              <div class="space-y-3">
                <div class="text-xs font-semibold uppercase tracking-wide px-2" style="color: var(--color-text-secondary);">
                  Resume
                </div>
                
                <router-link 
                  to="/resume"
                  @click="isOpen = false"
                  class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300"
                  style="background: rgba(var(--color-tertiary), 0.8); color: var(--color-text-primary);"
                >
                  <FileText class="w-4 h-4" />
                  <span>View Resume</span>
                </router-link>
                
                <div class="grid grid-cols-2 gap-2">
                  <button
                    @click="downloadResume; isOpen = false"
                    class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style="background: rgba(var(--color-tertiary), 0.5); color: var(--color-text-primary);"
                  >
                    <Download class="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  
                  <button
                    @click="openResumeInNewTab; isOpen = false"
                    class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style="background: rgba(var(--color-tertiary), 0.5); color: var(--color-text-primary);"
                  >
                    <ExternalLink class="w-4 h-4" />
                    <span>New Tab</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t" style="border-color: rgba(255, 255, 255, 0.1);"></div>

            <!-- Theme Selector -->
            <div class="p-4">
              <div class="text-xs font-semibold uppercase tracking-wide px-2 mb-3" style="color: var(--color-text-secondary);">
                Theme
              </div>
              
              <!-- Mobile Theme Grid -->
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="theme in availableThemes"
                  :key="theme.id"
                  @click="selectTheme(theme.id); isOpen = false"
                  class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
                  :style="{ 
                    background: currentThemeId === theme.id ? 'rgba(var(--color-tertiary), 0.7)' : 'rgba(var(--color-tertiary), 0.5)',
                    borderColor: currentThemeId === theme.id ? 'rgba(var(--accent-rgb), 0.3)' : 'transparent',
                    border: currentThemeId === theme.id ? '1px solid' : 'none'
                  }"
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
                  <span class="text-xs transition-colors" style="color: var(--color-text-primary);">
                    {{ theme.name }}
                  </span>
                  
                  <!-- Selected Indicator -->
                  <Check 
                    v-if="currentThemeId === theme.id"
                    class="w-3 h-3 ml-auto"
                    style="color: var(--color-accent);"
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
/* Custom Navbar */
.custom-navbar {
  background: rgba(var(--color-secondary-rgb), 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Clean Navigation Styles */
.nav-link {
  position: relative;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.nav-default {
  color: var(--color-text-secondary);
}

.nav-default:hover {
  color: var(--color-accent);
  background: rgba(var(--accent-rgb), 0.1) !important;
}

.nav-active {
  color: var(--color-accent);
  background: rgba(var(--accent-rgb), 0.15) !important;
  box-shadow: 0 1px 4px rgba(var(--accent-rgb), 0.15) !important;
}

/* Navbar glass effect - adaptive to theme */
.glass-nav {
  background: rgba(var(--color-primary), 0.98);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* Light theme specific styles */
[data-theme*="light"] .glass-nav {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 
    0 4px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Override any orange/accent colors in navigation */
.nav-link:hover,
.nav-link:focus {
  color: var(--color-accent) !important;
}

.nav-link i,
.nav-link span {
  color: inherit !important;
}

/* Mobile menu button theming */
.mobile-menu-button {
  background: rgba(var(--color-secondary), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;
}

.mobile-menu-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.1), transparent);
  transition: left 0.3s ease;
}

.mobile-menu-button:hover::before {
  left: 100%;
}

.mobile-menu-button:hover {
  background: rgba(var(--color-tertiary), 0.9);
  border-color: rgba(var(--accent-rgb), 0.3);
  transform: scale(1.05);
}

/* Resume button theming */
.resume-button {
  background: rgba(var(--color-secondary-rgb), 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  backdrop-filter: blur(10px);
}

.resume-button:hover {
  background: rgba(var(--color-tertiary-rgb), 0.9);
  border-color: rgba(var(--accent-rgb), 0.3);
}

/* Mobile dropdown theming */
.mobile-dropdown {
  background: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform-origin: top right;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
}

/* Responsive dropdown positioning */
@media (max-width: 480px) {
  .mobile-dropdown {
    width: calc(100vw - 2rem) !important;
    right: 1rem !important;
    left: 1rem !important;
    transform-origin: top center;
  }
}

[data-theme*="light"] .custom-navbar {
  background: rgba(255, 255, 255, 0.9);
  border-bottom-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

[data-theme*="light"] .mobile-dropdown {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

[data-theme*="light"] .resume-button {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 0, 0, 0.1);
}

[data-theme*="light"] .resume-button:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* Tablet and iPad specific styles - Mobile menu untuk 1024px ke bawah */
@media (max-width: 1279px) {
  .mobile-menu-button {
    display: flex !important;
    min-width: 44px;
    min-height: 44px;
    align-items: center;
    justify-content: center;
  }
  
  /* Better touch targets for tablets */
  .nav-link {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}

/* Large tablet optimizations (1024px - 1279px) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .mobile-dropdown {
    max-width: 420px;
    min-width: 380px;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: 1rem 1.25rem;
  }
  
  .mobile-menu-button {
    padding: 0.75rem;
  }
}

/* iPad specific optimizations */
@media (min-width: 768px) and (max-width: 1024px) {
  .mobile-dropdown {
    max-width: 380px;
    min-width: 320px;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.875rem 1rem;
  }
  
  .mobile-menu-button {
    padding: 0.625rem;
  }
}

/* Small mobile devices */
@media (max-width: 767px) {
  .mobile-dropdown {
    max-width: 280px;
    min-width: 260px;
    margin-right: 0; /* Hapus margin extra, cukup dari right-4 saja */
  }
}

/* Very small mobile devices */
@media (max-width: 480px) {
  .mobile-dropdown {
    max-width: 260px;
    min-width: 240px;
    margin-right: 0; /* Hapus margin extra */
  }
}
</style>


