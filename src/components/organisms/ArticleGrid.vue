<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <article 
      v-for="article in articles" 
      :key="article.id"
      class="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
    >
      <!-- Image Header -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
            {{ article.category }}
          </span>
        </div>
        
        <!-- Read Time -->
        <div class="absolute top-4 right-4">
          <span class="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
            {{ article.readTime }} min
          </span>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        <!-- Meta Info -->
        <div class="flex items-center space-x-2 text-xs text-gray-400 mb-3">
          <Calendar class="w-4 h-4" />
          <span>{{ formatDate(article.publishedAt) }}</span>
          <span>•</span>
          <User class="w-4 h-4" />
          <span>{{ article.author }}</span>
        </div>
        
        <!-- Title -->
        <h3 class="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors duration-300">
          {{ article.title }}
        </h3>
        
        <!-- Excerpt -->
        <p class="text-gray-300 text-sm mb-4 line-clamp-3">
          {{ article.excerpt }}
        </p>
        
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <Badge v-for="tag in article.tags.slice(0, 3)" :key="tag" color="gray">#{{ tag }}</Badge>
        </div>
        
        <!-- Action Button -->
        <BaseButton as="a" :href="article.url" target="_blank" rel="noopener noreferrer" variant="outline" size="sm" class="w-full">
          <span class="mr-2">Read Article</span>
          <ExternalLink class="w-4 h-4" />
        </BaseButton>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { Calendar, User, ExternalLink } from 'lucide-vue-next'
import BaseButton from '../base/BaseButton.vue'
import Badge from '../base/Badge.vue'
import { formatDate } from '../../utils/date'

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: number
  publishedAt: string
  author: string
  tags: string[]
  image: string
  url: string
}

// Sample articles data
const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Microservices with Golang",
    excerpt: "Learn how to design and implement scalable microservices architecture using Golang, covering best practices for service communication and data management.",
    category: "Backend",
    readTime: 8,
    publishedAt: "2024-01-15",
    author: "Rizky Haffiyan",
    tags: ["golang", "microservices", "architecture"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe5c870eb?w=400&h=300&fit=crop",
    url: "#"
  },
  {
    id: 2,
    title: "Database Optimization Techniques",
    excerpt: "Comprehensive guide to optimizing PostgreSQL performance, including indexing strategies, query optimization, and connection pooling.",
    category: "Database",
    readTime: 12,
    publishedAt: "2024-01-10",
    author: "Rizky Haffiyan",
    tags: ["postgresql", "optimization", "database"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    url: "#"
  },
  {
    id: 3,
    title: "Container Orchestration with Kubernetes",
    excerpt: "Deep dive into Kubernetes deployment strategies, scaling policies, and best practices for production environments.",
    category: "DevOps",
    readTime: 15,
    publishedAt: "2024-01-05",
    author: "Rizky Haffiyan",
    tags: ["kubernetes", "devops", "containers"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
    url: "#"
  }
]


const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1555949963-ff9fe5c870eb?w=400&h=300&fit=crop'
}
</script>

<style scoped>
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
