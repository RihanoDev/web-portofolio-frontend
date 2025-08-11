<template>
  <section id="articles-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Articles</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="flex gap-4 overflow-x-auto pb-2 snap-x">
        <BaseCard v-for="(article, i) in articles.slice(0, 6)" :key="i" padding="lg" class="min-w-[260px] snap-start">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10">
              <i class="fas fa-newspaper text-accent"></i>
            </div>
            <h3 class="font-semibold text-text-primary truncate">{{ article.title }}</h3>
          </div>
          <p class="text-sm text-text-secondary line-clamp-2">{{ article.desc }}</p>
        </BaseCard>
      </div>
      <div class="text-center mt-6">
        <BaseButton as="router-link" to="/articles" variant="outline">
          View all articles
        </BaseButton>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '../base/BaseCard.vue'
import BaseButton from '../base/BaseButton.vue'

const articles = [
  { title: 'Scaling Microservices', desc: 'Best practices for scaling microservices in production.' },
  { title: 'Golang Tips', desc: 'Tips and tricks for writing clean Go code.' },
  { title: 'Database Indexing', desc: 'How to optimize queries with proper indexing.' },
  { title: 'Artikel Lain', desc: 'Artikel lainnya...' }
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
