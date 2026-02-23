<template>
  <router-link 
    :to="{ name: 'article-detail', params: { slug: article.slug } }"
    class="block"
  >
    <article class="article-card group cursor-pointer">
      <div class="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <!-- Article Thumbnail -->
        <div class="relative h-48 overflow-hidden">
          <img 
            :src="article.featuredImageUrl || getDefaultImage()" 
            :alt="article.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            @error="handleImageError"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <!-- Category Badge -->
          <div class="absolute top-4 left-4 flex flex-wrap gap-1 max-w-[60%]">
            <template v-if="article.categories && article.categories.length > 0">
              <span 
                v-for="(cat, index) in article.categories.slice(0, 2)" 
                :key="index"
                class="px-3 py-1 glass-strong text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30 truncate"
              >
                {{ cat || 'Uncategorized' }}
              </span>
              <span 
                v-if="article.categories.length > 2"
                class="px-2 py-1 glass-strong text-primary-400 text-xs font-bold rounded-full border border-primary-500/30"
              >
                ...
              </span>
            </template>
            <span 
              v-else
              class="px-3 py-1 glass-strong text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30"
            >
              Uncategorized
            </span>
          </div>

          <!-- Read Time -->
          <div class="absolute top-4 right-4">
            <span class="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Clock class="w-3 h-3" />
              {{ article.readTime }} {{ $t('articles.min_read') || 'min' }}
            </span>
          </div>

          <!-- Publish Date -->
          <div class="absolute bottom-4 left-4">
            <span class="text-white text-sm font-medium">
              {{ formatDate(article.publishedAt || article.createdAt) }}
            </span>
          </div>
        </div>

        <!-- Article Content -->
        <div class="p-6">
          <!-- Title -->
          <h3 class="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300 break-words" style="overflow-wrap: anywhere;">
            {{ getLocalized(article, 'title', locale) }}
          </h3>

          <!-- Excerpt -->
          <p class="text-secondary text-sm leading-relaxed mb-4 line-clamp-3 break-words" style="overflow-wrap: anywhere;">
            {{ getLocalized(article, 'excerpt', locale) }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(tag, i) in article.tags.slice(0, 3)" 
              :key="i"
              class="px-2 py-1 bg-surface/50 text-xs font-medium text-secondary rounded border border-white/5"
            >
              #{{ typeof tag === 'string' ? tag : tag.name }}
            </span>
            <span 
              v-if="article.tags.length > 3"
              class="px-2 py-1 bg-accent/10 text-xs font-medium text-accent rounded border border-accent/20"
            >
              +{{ article.tags.length - 3 }}
            </span>
          </div>

          <!-- Author and Read More -->
          <div class="flex items-center justify-between pt-4 border-t border-white/5">
            <!-- Author -->
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-gradient text-white flex items-center justify-center text-sm font-semibold shadow-md border border-white/20">
                {{ getInitials(article.authorName) }}
              </div>
              <span class="text-sm text-secondary capitalize">{{ article.authorName }}</span>
            </div>

            <!-- Read More -->
            <div class="flex items-center space-x-1 text-accent hover:text-primary transition-colors duration-300 text-sm font-medium">
              <span>{{ $t('articles.read_more') || 'Read More' }}</span>
              <ArrowRight class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup lang="ts">
import { Clock, ArrowRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { formatDate } from '../../utils/date'
import type { ArticleListItem } from '../../types/article'
import { getLocalized } from '../../utils/i18n'

const { locale } = useI18n()

interface Props {
  article: ArticleListItem
}

defineProps<Props>()


// Helper functions
const getDefaultImage = () => {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23ffffff' font-family='Arial' font-size='16'%3EArticle Image%3C/text%3E%3C/svg%3E"
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = getDefaultImage()
}
</script>

<style scoped>
/* Using global glass-card class */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
