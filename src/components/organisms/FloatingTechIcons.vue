<template>
  <!-- Render fewer icons on mobile for better performance -->
  <div class="floating-tech-background" :class="{ 'mobile-optimized': isMobile }">
    <!-- Essential Tech Stack Icons - Always visible -->
    <div class="floating-icon float-1 size-lg" style="top: 8%; left: 12%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" loading="lazy" />
    </div>
    <div class="floating-icon float-2 size-xl" style="top: 18%; left: 68%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" loading="lazy" />
    </div>
    <div class="floating-icon float-3 size-lg" style="top: 32%; left: 18%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" loading="lazy" />
    </div>
    <div class="floating-icon float-4 size-xl" style="top: 52%; left: 32%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" loading="lazy" />
    </div>
    <div class="floating-icon float-5 size-lg" style="top: 38%; left: 88%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" loading="lazy" />
    </div>
    <div class="floating-icon float-6 size-xl" style="top: 58%; left: 58%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" loading="lazy" />
    </div>
    
    <!-- Additional Tech Stack Icons - Hidden on mobile -->
    <template v-if="!isMobile">
      <div class="floating-icon float-7 size-md" style="top: 15%; left: 85%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" loading="lazy" />
      </div>
      <div class="floating-icon float-8 size-lg" style="top: 75%; left: 25%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" loading="lazy" />
      </div>
      <div class="floating-icon float-9 size-md" style="top: 25%; left: 45%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" loading="lazy" />
      </div>
      <div class="floating-icon float-10 size-lg" style="top: 65%; left: 75%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" loading="lazy" />
      </div>
      <div class="floating-icon float-11 size-md" style="top: 45%; left: 8%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" loading="lazy" />
      </div>
      <div class="floating-icon float-12 size-xl" style="top: 85%; left: 65%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" loading="lazy" />
      </div>
      <div class="floating-icon float-13 size-md" style="top: 12%; left: 25%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" loading="lazy" />
      </div>
      <div class="floating-icon float-14 size-lg" style="top: 72%; left: 15%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" loading="lazy" />
      </div>
      <div class="floating-icon float-15 size-md" style="top: 28%; left: 75%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" loading="lazy" />
      </div>
      <div class="floating-icon float-16 size-lg" style="top: 55%; left: 45%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" loading="lazy" />
      </div>
      <div class="floating-icon float-17 size-md" style="top: 88%; left: 85%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" loading="lazy" />
      </div>
      <div class="floating-icon float-18 size-xl" style="top: 5%; left: 55%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" loading="lazy" />
      </div>
      <div class="floating-icon float-19 size-md" style="top: 48%; left: 92%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="API" loading="lazy" />
      </div>
      <div class="floating-icon float-20 size-lg" style="top: 78%; left: 5%;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Microservices" loading="lazy" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

// Detect mobile device
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 || 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  
  // Use requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      const container = document.querySelector('.floating-tech-background') as HTMLElement
      if (container) {
        container.style.opacity = '1'
        container.style.visibility = 'visible'
      }
    })
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      const container = document.querySelector('.floating-tech-background') as HTMLElement
      if (container) {
        container.style.opacity = '1'
        container.style.visibility = 'visible'
      }
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* Component styles are imported globally in App.vue */
.mobile-optimized .floating-icon {
  animation-duration: 8s !important; /* Slower animations on mobile */
}
</style>
