<template>
  <section id="articles" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Latest Articles</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            Sharing knowledge and insights about backend development, system design, and technology trends
          </p>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>

        <!-- View All Articles Button -->
        <div class="text-center">
          <a 
            href="/blog" 
            class="inline-flex items-center px-8 py-4 rounded-lg glass border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2"
          >
            <span>View All Articles</span>
            <ArrowRight class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import ArticleCard from '../molecules/ArticleCard.vue'
import type { Article } from '../../types/article'
import { getArticles } from '../../data/articles'

const articles = ref<Article[]>([])

// Load articles on component mount
onMounted(async () => {
  articles.value = await getArticles()
})
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
