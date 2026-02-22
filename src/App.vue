<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import './styles/variables.css'
import './styles/global-background.css'
import './styles/components/floating-tech-icons.css'
import { useTheme } from './composables/useTheme'
import { useGlobalAnalytics } from './composables/useAnalytics'
import { useRoute } from 'vue-router'
import FloatingViewCounter from './components/molecules/FloatingViewCounter.vue'

// Initialize theme system
useTheme()

// Initialize analytics
const analytics = useGlobalAnalytics()
const route = useRoute()

// Lazy load FontAwesome only when needed
const loadFontAwesome = async () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(async () => {
      await import('@fortawesome/fontawesome-free/css/all.css')
    })
  } else {
    setTimeout(async () => {
      await import('@fortawesome/fontawesome-free/css/all.css')
    }, 100)
  }
}

// Initialize session and track visitor
const initializeAnalytics = () => {
  analytics.initializeAnalytics()
  
  // Ensure we track the root page view
  if (route.path === '/') {
    analytics.trackPageView('/')
  }
}

onMounted(() => {
  // Theme is automatically applied by the useTheme composable
  
  
  // Load FontAwesome lazily
  loadFontAwesome()
  
  // Initialize analytics
  initializeAnalytics()
})
</script>

<template>
  <DefaultLayout>
    <router-view />
    <FloatingViewCounter />
  </DefaultLayout>
</template>

<style>
/* Optimized font loading for mobile */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0F1419;
  color: #F8FAFC;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  line-height: 1.6;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Simplified background for mobile performance */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0F1419 0%, #1A1E2E 50%, #252A3F 100%);
  pointer-events: none;
  z-index: -3;
}

/* Reduced complexity texture for mobile */
@media (min-width: 769px) {
  body::before {
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 107, 0, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 40%),
      linear-gradient(135deg, #0F1419 0%, #1A1E2E 50%, #252A3F 100%);
  }
  
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: -2;
    opacity: 0.1;
  }
}

/* Global utility classes - NORMAL (non-glass) untuk content, glass hanya untuk nav/footer */
.glass {
  background: rgba(var(--color-secondary-rgb), 0.9);
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-strong {
  background: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid var(--color-border);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.glass-subtle {
  background: rgba(var(--color-secondary-rgb), 0.85);
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Enhanced glass card - NORMAL CARD (non-glass) untuk content */
.glass-card {
  background: rgba(var(--color-secondary-rgb), 0.95);
  border: 1px solid var(--color-border);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile optimized hover effects */
@media (min-width: 769px) {
  .glass {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  .glass-strong {
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  
  .glass-subtle {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }
  
  .glass-card {
    box-shadow: 
      0 10px 35px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  .glass-card:hover {
    background: rgba(26, 30, 46, 0.98);
    border-color: rgba(255, 107, 0, 0.3);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 107, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
}

/* Mobile: Simplified hover effects */
@media (max-width: 768px) {
  .glass-card:hover {
    background: rgba(26, 30, 46, 0.98);
    border-color: rgba(255, 107, 0, 0.3);
    transform: translateY(-1px);
  }
}

/* Additional glass classes - NORMAL untuk buttons */
.glass-btn {
  background: rgba(26, 30, 46, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(20, 25, 40, 0.95);
  border-color: rgba(255, 107, 0, 0.35);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

/* Reduced animations for mobile */
@media (prefers-reduced-motion: no-preference) and (min-width: 769px) {
  @keyframes gentle-float {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-8px) scale(1.02);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 107, 0, 0.5);
    }
  }
}

/* Ensure all content is above floating icons */
main,
nav,
footer,
section,
article,
div,
.container,
.glass,
.glass-card,
.glass-strong,
.glass-subtle,
.glass-btn {
  position: relative;
  z-index: 1;
}

/* Special z-index for important elements */
.navbar,
.glass-nav {
  z-index: 50 !important;
}

.glass-footer {
  z-index: 10 !important;
}

/* Optimized scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(26, 30, 46, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 107, 0, 0.6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 107, 0, 0.8);
}

/* Text selection */
::selection {
  background: rgba(255, 107, 0, 0.3);
  color: #F8FAFC;
}

/* Focus styles */
*:focus {
  outline: 2px solid rgba(255, 107, 0, 0.5);
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  /* Reduce heavy transforms on mobile */
  .glass-card:hover {
    transform: none;
  }
  
  /* Disable complex animations on mobile */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}

/* Performance: Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print styles */
@media print {
  body::before,
  body::after {
    display: none;
  }
}
</style>
