<template>
  <section id="experience-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Experience</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="flex gap-4 overflow-x-auto pb-2 snap-x">
        <BaseCard v-for="(exp, i) in experiences" :key="i" padding="lg" class="min-w-[260px] snap-start">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10">
              <i class="fas fa-briefcase text-accent"></i>
            </div>
            <div>
              <h3 class="font-semibold text-text-primary truncate">{{ exp.role }}</h3>
              <p class="text-sm text-text-secondary truncate">{{ exp.company }}</p>
            </div>
          </div>
          <p class="text-xs text-accent">{{ exp.period }}</p>
        </BaseCard>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '../base/BaseCard.vue'

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
