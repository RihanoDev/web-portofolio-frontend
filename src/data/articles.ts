import type { Article } from '../types/article'

// Dummy data - will be replaced with API calls in the future
export const articlesData: Article[] = [
  {
    id: 1,
    title: 'Building High-Performance Go APIs: Best Practices and Patterns',
    excerpt: 'Learn how to build scalable and performant APIs with Go, covering middleware, database optimization, and caching strategies.',
    content: 'Full article content would go here...',
    category: 'Backend Development',
    tags: ['Go', 'API', 'Performance', 'Best Practices'],
    thumbnail: '/articles/go-api-best-practices.jpg',
    publishDate: '2024-01-15',
    readTime: 8,
    slug: 'building-high-performance-go-apis',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 2,
    title: 'Microservices Architecture with Docker and Kubernetes',
    excerpt: 'A comprehensive guide to implementing microservices architecture using containerization and orchestration tools.',
    content: 'Full article content would go here...',
    category: 'DevOps',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'Architecture'],
    thumbnail: '/articles/microservices-docker-k8s.jpg',
    publishDate: '2024-01-10',
    readTime: 12,
    slug: 'microservices-architecture-docker-kubernetes',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 3,
    title: 'Redis Caching Strategies for Better Performance',
    excerpt: 'Explore different Redis caching patterns and strategies to improve your application performance significantly.',
    content: 'Full article content would go here...',
    category: 'Database',
    tags: ['Redis', 'Caching', 'Performance', 'Database'],
    thumbnail: '/articles/redis-caching-strategies.jpg',
    publishDate: '2024-01-05',
    readTime: 6,
    slug: 'redis-caching-strategies-performance',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 4,
    title: 'CI/CD Pipeline with GitHub Actions and Docker',
    excerpt: 'Step-by-step guide to setting up automated deployment pipeline using GitHub Actions and Docker containers.',
    content: 'Full article content would go here...',
    category: 'DevOps',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'Automation'],
    thumbnail: '/articles/cicd-github-actions.jpg',
    publishDate: '2023-12-20',
    readTime: 10,
    slug: 'cicd-pipeline-github-actions-docker',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 5,
    title: 'PostgreSQL Performance Tuning Tips',
    excerpt: 'Essential PostgreSQL optimization techniques to improve query performance and database efficiency.',
    content: 'Full article content would go here...',
    category: 'Database',
    tags: ['PostgreSQL', 'Performance', 'Database', 'Optimization'],
    thumbnail: '/articles/postgresql-performance-tuning.jpg',
    publishDate: '2023-12-15',
    readTime: 7,
    slug: 'postgresql-performance-tuning-tips',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  },
  {
    id: 6,
    title: 'Vue.js 3 with TypeScript: Building Modern SPAs',
    excerpt: 'Complete guide to building modern single-page applications with Vue.js 3 and TypeScript.',
    content: 'Full article content would go here...',
    category: 'Frontend Development',
    tags: ['Vue.js', 'TypeScript', 'SPA', 'Frontend'],
    thumbnail: '/articles/vuejs3-typescript-spa.jpg',
    publishDate: '2023-12-10',
    readTime: 9,
    slug: 'vuejs3-typescript-building-modern-spas',
    author: {
      name: 'RihanoDev',
      avatar: '/profile.jpg'
    }
  }
]

// Function to get articles - ready for API integration
export const getArticles = async (): Promise<Article[]> => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/articles')
  // return response.json()
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return articlesData
}
