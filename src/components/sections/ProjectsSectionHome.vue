<template>
  <section id="projects-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Projects</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div v-for="(project, i) in projects.slice(0, 3)" :key="i" class="blog-card glass-card flex flex-col items-center px-6 py-7 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform">
        <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-accent/10 mb-4">
          <svg v-if="project.icon === 'app'" xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4"/></svg>
          <svg v-else-if="project.icon === 'chat'" xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg v-else-if="project.icon === 'api'" xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="7" y="7" width="2" height="10" rx="1"/><rect x="15" y="7" width="2" height="10" rx="1"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <div class="font-semibold text-primary text-lg text-center mb-1 truncate w-full">{{ project.title }}</div>
        <div class="text-secondary text-sm text-center truncate w-full">{{ project.desc }}</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
