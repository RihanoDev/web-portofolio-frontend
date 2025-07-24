<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- Background Pattern -->
    <div class="fixed inset-0 bg-grid opacity-20 pointer-events-none"></div>
    
    <!-- Floating Elements for Visual Interest -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 animate-float" style="animation-delay: -2s;"></div>
    </div>
    
    <Navbar />
    
    <main class="flex-1 w-full relative z-10">
      <div class="w-full min-h-[calc(100vh-4rem)] mt-16">
        <slot />
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import '../styles/layout.css'
import '../styles/sections.css'

// Add intersection observer for scroll animations
import { onMounted } from 'vue'

onMounted(() => {
  // Smooth reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, observerOptions)

  // Observe all sections and cards
  document.querySelectorAll('.section, .card').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Enhanced container styling */
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

/* Smooth scroll behavior */
:deep(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Enhanced scrollbar */
:deep(::-webkit-scrollbar) {
  width: 8px;
}

:deep(::-webkit-scrollbar-track) {
  background: var(--color-background-alt);
  border-radius: 4px;
}

:deep(::-webkit-scrollbar-thumb) {
  background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: linear-gradient(to bottom, var(--color-primary-hover), var(--color-secondary-hover));
}

/* Enhanced link hover effects */
:deep(a) {
  position: relative;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(a):not(.btn):not(.nav-link)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: var(--gradient-primary);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(a):not(.btn):not(.nav-link):hover::after {
  width: 100%;
}

/* Focus styles for accessibility */
:deep(*:focus-visible) {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  :deep(*) {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-float {
    animation: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :deep(.btn-primary) {
    background: var(--color-primary);
    border: 2px solid var(--color-text-primary);
  }
  
  :deep(.card) {
    border: 2px solid var(--color-border);
  }
}
</style>