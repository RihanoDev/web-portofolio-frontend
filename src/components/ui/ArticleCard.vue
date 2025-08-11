<template>
  <article class="article-card group cursor-pointer">
    <div class="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <!-- Article Thumbnail -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="article.thumbnail" 
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 glass-strong text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30">
            {{ article.category }}
          </span>
        </div>

        <!-- Read Time -->
        <div class="absolute top-4 right-4">
          <span class="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full flex items-center gap-1">
            <Clock class="w-3 h-3" />
            {{ article.readTime }} min
          </span>
        </div>

        <!-- Publish Date -->
        <div class="absolute bottom-4 left-4">
          <span class="text-white text-sm font-medium">
            {{ formatDate(article.publishDate) }}
          </span>
        </div>
      </div>

      <!-- Article Content -->
      <div class="p-6">
        <!-- Title -->
        <h3 class="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {{ article.title }}
        </h3>

        <!-- Excerpt -->
        <p class="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {{ article.excerpt }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tag in article.tags.slice(0, 3)" 
            :key="tag"
            class="px-2 py-1 bg-surface/50 text-xs font-medium text-secondary rounded border border-white/5"
          >
            #{{ tag }}
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
            <img 
              :src="article.author.avatar" 
              :alt="article.author.name"
              class="w-8 h-8 rounded-full object-cover"
              @error="handleAuthorImageError"
            />
            <span class="text-sm text-secondary">{{ article.author.name }}</span>
          </div>

          <!-- Read More -->
          <a 
            :href="`/blog/${article.slug}`"
            class="flex items-center space-x-1 text-accent hover:text-primary transition-colors duration-300 text-sm font-medium"
            @click.stop
          >
            <span>Read More</span>
            <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Clock, ArrowRight } from 'lucide-vue-next'
import { formatDate } from '../../utils/date'

interface Article {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  tags: string[]
  thumbnail: string
  publishDate: string
  readTime: number
  slug: string
  author: {
    name: string
    avatar: string
  }
}

interface Props {
  article: Article
}

defineProps<Props>()


const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder-article.jpg'
}

const handleAuthorImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/default-avatar.svg'
}
</script>

<style scoped>
.article-card .glass {
  background: rgba(var(--surface-rgb), 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.article-card:hover .glass {
  background: rgba(var(--surface-rgb), 0.6);
  border-color: rgba(var(--accent-rgb), 0.2);
}

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
