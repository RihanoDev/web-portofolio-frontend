<template>
  <section id="articles-home" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">{{ $t('articles.title') || 'Latest Articles' }}</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">{{ $t('articles.subtitle') }}</p>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('articles.loading') }}</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="featuredArticles.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('articles.empty') }}</p>
          </div>
          <!-- Articles List -->
          <template v-else>
            <ArticleCard v-for="article in featuredArticles" :key="article.id" :article="article" />
          </template>
        </div>

        <!-- View All Articles Button -->
        <div class="text-center">
          <router-link to="/articles" class="inline-flex items-center px-8 py-4 rounded-lg glass-btn border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2">
            <span>{{ $t('articles.view_all') || 'View All Articles' }}</span>
            <ExternalLink class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchArticles } from "@/services/articles";
import type { ArticleListItem } from "@/types/article";
import ArticleCard from "@/components/molecules/ArticleCard.vue";
import { ExternalLink } from "lucide-vue-next";

const articles = ref<ArticleListItem[]>([]);

// Show only first 3 articles for home page
const featuredArticles = ref<ArticleListItem[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    articles.value = await fetchArticles();
    featuredArticles.value = articles.value.slice(0, 3); // Reduce to 3 items for better layout
  } catch (error) {
    
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
