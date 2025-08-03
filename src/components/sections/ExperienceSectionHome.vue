<template>
  <section id="experience-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Experience</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="flex flex-row flex-wrap gap-6 justify-center items-center">
      <div v-for="(exp, i) in experiences" :key="i" class="glass-card flex flex-col items-center gap-2 px-7 py-6 rounded-2xl shadow-lg min-w-[200px]">
        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
        </div>
        <div class="font-semibold text-primary truncate">{{ exp.role }}</div>
        <div class="text-secondary text-sm truncate">{{ exp.company }}</div>
        <div class="text-xs text-accent">{{ exp.period }}</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  { role: 'Backend Engineer', company: 'TechCorp', period: '2022 - Sekarang' },
  { role: 'Software Engineer', company: 'StartupX', period: '2020 - 2022' },
  { role: 'Intern', company: 'BigData Inc.', period: '2019 - 2020' }
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
.min-w-\[200px\] {
  min-width: 200px;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
