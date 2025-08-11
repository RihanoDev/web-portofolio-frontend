<template>
  <section id="articles-home" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">Latest Articles</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            Sharing knowledge and insights about backend development, system design, and technology trends
          </p>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.id"
            :article="article"
          />
        </div>

        <!-- View All Articles Button -->
        <div class="text-center">
          <router-link 
            to="/articles"
            class="inline-flex items-center px-8 py-4 rounded-lg glass-btn border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2"
          >
            <span>View All Articles</span>
            <ExternalLink class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getArticles } from '@/data'
import type { Article } from '@/types'
import { ArticleCard } from '@/components'
import { ExternalLink } from 'lucide-vue-next'

const articles = ref<Article[]>([])

// Show only first 6 articles for home page
const featuredArticles = ref<Article[]>([])

onMounted(async () => {
  articles.value = await getArticles()
  featuredArticles.value = articles.value.slice(0, 6)
})
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
