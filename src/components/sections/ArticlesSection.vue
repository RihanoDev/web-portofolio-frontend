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
import { ArrowRight } from 'lucide-vue-next'
import ArticleCard from '../ui/ArticleCard.vue'

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

const articles: Article[] = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Go and Kafka',
    excerpt: 'Learn how to design and implement microservices architecture using Go and Apache Kafka for event-driven communication.',
    category: 'Architecture',
    tags: ['Go', 'Microservices', 'Kafka', 'Event-Driven'],
    thumbnail: '/articles/microservices-go-kafka.jpg',
    publishDate: '2024-01-15',
    readTime: 8,
    slug: 'building-scalable-microservices-go-kafka',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 2,
    title: 'Database Optimization Techniques for High-Traffic Applications',
    excerpt: 'Explore advanced database optimization strategies to handle millions of requests while maintaining performance.',
    category: 'Database',
    tags: ['PostgreSQL', 'Performance', 'Optimization', 'Scaling'],
    thumbnail: '/articles/database-optimization.jpg',
    publishDate: '2024-01-10',
    readTime: 12,
    slug: 'database-optimization-high-traffic',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 3,
    title: 'Implementing CQRS Pattern in Go Applications',
    excerpt: 'Deep dive into Command Query Responsibility Segregation pattern and its implementation in Go for complex business logic.',
    category: 'Design Patterns',
    tags: ['Go', 'CQRS', 'Architecture', 'Design Patterns'],
    thumbnail: '/articles/cqrs-pattern-go.jpg',
    publishDate: '2024-01-05',
    readTime: 15,
    slug: 'implementing-cqrs-pattern-go',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 4,
    title: 'Container Orchestration with Kubernetes: Best Practices',
    excerpt: 'Master Kubernetes deployment strategies, resource management, and monitoring for production-ready applications.',
    category: 'DevOps',
    tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers'],
    thumbnail: '/articles/kubernetes-best-practices.jpg',
    publishDate: '2023-12-28',
    readTime: 10,
    slug: 'kubernetes-best-practices',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 5,
    title: 'API Security: Protecting Your Backend Services',
    excerpt: 'Essential security practices for REST APIs including authentication, authorization, rate limiting, and data validation.',
    category: 'Security',
    tags: ['API Security', 'Authentication', 'JWT', 'Rate Limiting'],
    thumbnail: '/articles/api-security.jpg',
    publishDate: '2023-12-20',
    readTime: 7,
    slug: 'api-security-backend-services',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 6,
    title: 'Monitoring and Observability in Distributed Systems',
    excerpt: 'Comprehensive guide to implementing monitoring, logging, and tracing in microservices environments.',
    category: 'Monitoring',
    tags: ['Monitoring', 'Observability', 'Prometheus', 'Grafana'],
    thumbnail: '/articles/monitoring-observability.jpg',
    publishDate: '2023-12-15',
    readTime: 11,
    slug: 'monitoring-observability-distributed-systems',
    author: {
      name: 'Rizky Haffiyan',
      avatar: '/profile.jpg'
    }
  }
]
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
