<template>
  <section id="articles-home" class="py-16 relative">
    <div class="relative z-10">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Articles</h2>
      <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div v-for="(article, i) in articles.slice(0, 3)" :key="i" class="blog-card glass-card flex flex-col items-center px-6 py-7 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform">
        <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-accent/10 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/><path d="M17 3v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3"/></svg>
        </div>
        <div class="font-semibold text-primary text-lg text-center mb-1 truncate w-full">{{ article.title }}</div>
        <div class="text-secondary text-sm text-center truncate w-full">{{ article.desc }}</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
