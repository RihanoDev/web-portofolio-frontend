<template>
  <div class="min-h-screen flex flex-col relative glass-container">
    <!-- Tech Pattern Background -->
    <div class="tech-pattern-bg"></div>
    
    <!-- Global Floating Tech Icons System -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <!-- Top Row - Tech Stack Icons -->
      <div class="absolute top-20 left-10 opacity-40 hover:opacity-60 transition-all duration-300 floating-icon-wild floating-icon-glow">
        <i class="fab fa-golang text-interactive-theme text-5xl transform hover:scale-125" style="animation-delay: 0s;"></i>
      </div>
      <div class="absolute top-32 right-20 opacity-35 hover:opacity-55 transition-all duration-300 floating-icon-soft">
        <i class="fab fa-docker text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 1s;"></i>
      </div>
      <div class="absolute top-40 left-1/4 opacity-30 hover:opacity-50 transition-all duration-300 floating-icon-wild">
        <i class="fab fa-aws text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 2s;"></i>
      </div>
      <div class="absolute top-24 right-1/3 opacity-35 hover:opacity-55 transition-all duration-300 floating-icon-soft floating-icon-glow">
        <i class="fas fa-database text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 1.5s;"></i>
      </div>
      
      <!-- Middle Row - Development Icons -->
      <div class="absolute top-1/3 left-5 opacity-30 hover:opacity-50 transition-all duration-300 floating-icon-wild">
        <i class="fab fa-kubernetes text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 3s;"></i>
      </div>
      <div class="absolute top-1/3 right-10 opacity-25 hover:opacity-45 transition-all duration-300 floating-icon-soft">
        <i class="fab fa-node-js text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 0.5s;"></i>
      </div>
      <div class="absolute top-2/5 left-1/3 opacity-20 hover:opacity-40 transition-all duration-300 floating-icon-wild floating-icon-glow">
        <i class="fas fa-cloud text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 2.5s;"></i>
      </div>
      <div class="absolute top-2/5 right-1/4 opacity-25 hover:opacity-45 transition-all duration-300 floating-icon-soft">
        <i class="fab fa-python text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 1.8s;"></i>
      </div>
      
      <!-- Center Area - Core Tech Icons -->
      <div class="absolute top-1/2 left-10 opacity-20 hover:opacity-35 transition-all duration-300 floating-icon-wild">
        <i class="fas fa-server text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 3.5s;"></i>
      </div>
      <div class="absolute top-1/2 right-15 opacity-20 hover:opacity-35 transition-all duration-300 floating-icon-soft floating-icon-glow">
        <i class="fab fa-git-alt text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 4s;"></i>
      </div>
      <div class="absolute top-3/5 left-1/4 opacity-15 hover:opacity-30 transition-all duration-300 floating-icon-wild">
        <i class="fas fa-code-branch text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 2.8s;"></i>
      </div>
      <div class="absolute top-3/5 right-1/3 opacity-15 hover:opacity-30 transition-all duration-300 floating-icon-soft">
        <i class="fab fa-linux text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 1.2s;"></i>
      </div>
      
      <!-- Bottom Row - Additional Tech Icons -->
      <div class="absolute bottom-40 left-20 opacity-30 hover:opacity-50 transition-all duration-300 floating-icon-wild floating-icon-glow">
        <i class="fas fa-code text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 2s;"></i>
      </div>
      <div class="absolute bottom-32 right-20 opacity-25 hover:opacity-45 transition-all duration-300 floating-icon-soft">
        <i class="fas fa-terminal text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 3.5s;"></i>
      </div>
      <div class="absolute bottom-20 left-1/3 opacity-20 hover:opacity-40 transition-all duration-300 floating-icon-wild">
        <i class="fas fa-laptop-code text-interactive-theme text-4xl transform hover:scale-125" style="animation-delay: 4.5s;"></i>
      </div>
      <div class="absolute bottom-10 right-1/4 opacity-25 hover:opacity-45 transition-all duration-300 floating-icon-soft floating-icon-glow">
        <i class="fas fa-cog text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 5s;"></i>
      </div>
      
      <!-- Additional Scattered Icons -->
      <div class="absolute top-16 left-1/2 opacity-15 hover:opacity-30 transition-all duration-300 floating-icon-wild">
        <i class="fab fa-react text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 0.8s;"></i>
      </div>
      <div class="absolute top-2/3 right-5 opacity-15 hover:opacity-30 transition-all duration-300 floating-icon-soft">
        <i class="fab fa-vuejs text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 3.2s;"></i>
      </div>
      <div class="absolute bottom-1/3 left-5 opacity-10 hover:opacity-25 transition-all duration-300 floating-icon-wild floating-icon-glow">
        <i class="fas fa-microchip text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 4.2s;"></i>
      </div>
      <div class="absolute top-4/5 left-1/2 opacity-10 hover:opacity-25 transition-all duration-300 floating-icon-soft">
        <i class="fas fa-network-wired text-interactive-theme text-3xl transform hover:scale-125" style="animation-delay: 5.5s;"></i>
      </div>
    </div>
    
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
import '../styles/layout.css'
import '../styles/sections.css'
import '../styles/floating-tech-icons.css'
import '../styles/glass-theme.css'

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
