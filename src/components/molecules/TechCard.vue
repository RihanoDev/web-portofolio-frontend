<template>
  <div 
    class="tech-card-wrapper group cursor-pointer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 relative">
      <!-- Icon -->
      <div class="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center tech-icon-bg">
        <img 
          v-if="devIconUrl" 
          :src="devIconUrl" 
          :alt="name"
          class="w-10 h-10 object-contain"
          loading="lazy"
        />
        <i 
          v-else
          :class="icon + ' text-3xl'" 
          :style="{ color: color }"
        ></i>
      </div>
      
      <!-- Name -->
      <h4 class="font-semibold text-center transition-colors duration-300" 
          style="color: var(--color-text-primary);">
        {{ name }}
      </h4>
      
      <!-- Description on hover -->
      <div 
        class="mt-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style="color: var(--color-text-secondary);"
        v-if="description"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  name: string
  icon: string
  color: string
  description?: string
}

const props = defineProps<Props>()
const isHovered = ref(false)

// Mapping tech names to DevIcon CDN URLs
const devIconUrl = computed(() => {
  const iconMap: Record<string, string> = {
    'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
    'GRPC': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'GitAction': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  }

  return iconMap[props.name] || ''
})
</script>

<style scoped>
/* Container wrapper to provide space for scaling */
.tech-card-wrapper {
  padding: 8px;
  margin: 4px;
  position: relative;
  overflow: visible;
}

/* Tech icon background - adaptive to theme */
.tech-icon-bg {
  background: rgba(var(--color-secondary), 0.3);
  transition: all 0.3s ease;
}

.tech-card-wrapper:hover .tech-icon-bg {
  background: rgba(var(--accent-rgb), 0.1);
}

.tech-card-wrapper:hover .glass-card {
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.15);
}

.tech-card-wrapper:hover h4 {
  color: var(--color-accent) !important;
}

/* Ensure hover effect doesn't get clipped */
.glass-card {
  transform-origin: center;
  will-change: transform;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* Light theme adjustments */
[data-theme*="light"] .tech-icon-bg {
  background: rgba(var(--color-tertiary), 0.5);
}

[data-theme*="light"] .glass-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
