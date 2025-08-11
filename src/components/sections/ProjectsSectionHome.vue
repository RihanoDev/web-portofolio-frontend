<template>
  <section id="projects-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Projects</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="flex gap-4 overflow-x-auto pb-2 snap-x">
        <BaseCard v-for="(project, i) in projects.slice(0, 6)" :key="i" padding="lg" class="min-w-[260px] snap-start">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10">
              <i class="fas fa-code text-accent"></i>
            </div>
            <h3 class="font-semibold text-text-primary truncate">{{ project.title }}</h3>
          </div>
          <p class="text-sm text-text-secondary line-clamp-2">{{ project.desc }}</p>
        </BaseCard>
      </div>
      <div class="text-center mt-6">
        <BaseButton as="router-link" to="/projects" variant="outline">
          View all projects
        </BaseButton>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '../molecules/Card.vue'
import BaseButton from '../atoms/Button.vue'

const projects = [
  { title: 'SaaS Platform', desc: 'Multi-tenant SaaS platform for business automation.', icon: 'app' },
  { title: 'Realtime Chat', desc: 'Realtime chat app with WebSocket and scalable backend.', icon: 'chat' },
  { title: 'E-Commerce API', desc: 'RESTful API for e-commerce with payment integration.', icon: 'api' },
  { title: 'Other Project', desc: 'Project lainnya...', icon: 'app' }
]
</script>

<style scoped>
.glass-card {
  background: rgba(var(--surface-rgb), 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.08);
  transition: box-shadow 0.2s;
}
.glass-card:hover {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
}
.blog-card {
  min-height: 220px;
  cursor: pointer;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
