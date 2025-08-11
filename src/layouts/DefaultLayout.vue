<template>
  <div class="min-h-screen flex flex-col relative glass-container">
    
    <Navbar />
    
    <main class="flex-1 w-full relative z-10">
      <div class="w-full min-h-[calc(100vh-4rem)] mt-16">
        <slot />
      </div>
    </main>
    
    <!-- Floating View Counter -->
    <FloatingViewCounter />
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import FloatingViewCounter from '../components/ui/FloatingViewCounter.vue'
// Removed decorative CSS imports; all styling handled by Tailwind/style.css

// Add intersection observer for scroll animations
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, {
    threshold: 0.1
  })

  // Observe all sections
  const sections = document.querySelectorAll('.section')
  sections.forEach((section) => observer.observe(section))
})
</script>

<style scoped>
/* Glass container with theme support */
.glass-container {
  position: relative;
}

/* Dark theme glass container */
.dark-theme .glass-container,
.dark .glass-container {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Light theme glass container */
.light-theme .glass-container {
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Animation styles */
@keyframes animate-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes animate-float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes animate-float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes animate-pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-float {
  animation: animate-float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: animate-float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-slow {
  animation: animate-float-slow 10s ease-in-out infinite;
  animation-delay: 4s;
}

.animate-pulse-slow {
  animation: animate-pulse-slow 4s ease-in-out infinite;
}

/* Performance optimizations */
.animate-float,
.animate-float-delayed,
.animate-float-slow,
.animate-pulse-slow {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
</style>
