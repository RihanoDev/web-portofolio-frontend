<template>
  <div class="floating-tech-background">
    <!-- Tech Stack Icons using online images -->
    <div class="floating-icon float-1 size-lg" style="top: 8%; left: 12%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" />
    </div>
    <div class="floating-icon float-2 size-xl" style="top: 18%; left: 68%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
    </div>
    <div class="floating-icon float-3 size-lg" style="top: 32%; left: 18%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
    </div>
    <div class="floating-icon float-4 size-xl" style="top: 52%; left: 32%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
    </div>
    <div class="floating-icon float-5 size-lg" style="top: 38%; left: 88%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
    </div>
    <div class="floating-icon float-6 size-xl" style="top: 58%; left: 58%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
    </div>
    
    <!-- Additional Tech Stack Icons -->
    <div class="floating-icon float-7 size-md" style="top: 15%; left: 85%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
    </div>
    <div class="floating-icon float-8 size-lg" style="top: 75%; left: 25%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
    </div>
    <div class="floating-icon float-9 size-md" style="top: 25%; left: 45%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
    </div>
    <div class="floating-icon float-10 size-lg" style="top: 65%; left: 75%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
    </div>
    <div class="floating-icon float-11 size-md" style="top: 45%; left: 8%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
    </div>
    <div class="floating-icon float-12 size-xl" style="top: 85%; left: 65%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />
    </div>
    <div class="floating-icon float-13 size-md" style="top: 12%; left: 25%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
    </div>
    <div class="floating-icon float-14 size-lg" style="top: 72%; left: 15%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
    </div>
    <div class="floating-icon float-15 size-md" style="top: 28%; left: 75%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
    </div>
    <div class="floating-icon float-16 size-lg" style="top: 55%; left: 45%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" />
    </div>
    <div class="floating-icon float-17 size-md" style="top: 88%; left: 85%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
    </div>
    <div class="floating-icon float-18 size-xl" style="top: 5%; left: 55%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
    </div>
    <div class="floating-icon float-19 size-md" style="top: 48%; left: 92%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="API" />
    </div>
    <div class="floating-icon float-20 size-lg" style="top: 78%; left: 5%;">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Microservices" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// Ensure component is properly mounted and stays visible
onMounted(() => {
  console.log('FloatingTechIcons mounted')
  // Force a repaint to ensure icons are rendered
  const container = document.querySelector('.floating-tech-background') as HTMLElement
  if (container) {
    container.style.opacity = '1'
    container.style.visibility = 'visible'
  }
})

onUnmounted(() => {
  console.log('FloatingTechIcons unmounted')
})
</script>

<style scoped>
/* Component styles are imported globally in App.vue */
</style>
