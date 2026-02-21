import type { Article } from '../types/article'

// Dummy data - will be replaced with API calls in the future
export const articlesData: Article[] = [
  {
    id: "1",
    title: 'Building High-Performance Go APIs: Best Practices and Patterns',
    slug: 'building-high-performance-go-apis',
    excerpt: 'Learn how to build scalable and performant APIs with Go, covering middleware, database optimization, and caching strategies.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 1, name: 'Backend Development', slug: 'backend-development' }
    ],
    tags: [
      { id: 1, name: 'Go', slug: 'go' },
      { id: 2, name: 'API', slug: 'api' },
      { id: 3, name: 'Performance', slug: 'performance' },
      { id: 4, name: 'Best Practices', slug: 'best-practices' }
    ],
    publishedAt: '2024-01-15T00:00:00Z',
    readTime: 8,
    viewCount: 234,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: "2",
    title: 'Microservices Architecture with Docker and Kubernetes',
    slug: 'microservices-architecture-docker-kubernetes',
    excerpt: 'A comprehensive guide to implementing microservices architecture using containerization and orchestration tools.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 2, name: 'DevOps', slug: 'devops' }
    ],
    tags: [
      { id: 5, name: 'Microservices', slug: 'microservices' },
      { id: 6, name: 'Docker', slug: 'docker' },
      { id: 7, name: 'Kubernetes', slug: 'kubernetes' },
      { id: 8, name: 'Architecture', slug: 'architecture' }
    ],
    publishedAt: '2024-01-10T00:00:00Z',
    readTime: 12,
    viewCount: 189,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    id: "3",
    title: 'Redis Caching Strategies for Better Performance',
    slug: 'redis-caching-strategies-performance',
    excerpt: 'Explore different Redis caching patterns and strategies to improve your application performance significantly.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 3, name: 'Database', slug: 'database' }
    ],
    tags: [
      { id: 9, name: 'Redis', slug: 'redis' },
      { id: 10, name: 'Caching', slug: 'caching' },
      { id: 3, name: 'Performance', slug: 'performance' },
      { id: 11, name: 'Database', slug: 'database' }
    ],
    publishedAt: '2024-01-05T00:00:00Z',
    readTime: 6,
    viewCount: 156,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z'
  },
  {
    id: "4",
    title: 'CI/CD Pipeline with GitHub Actions and Docker',
    slug: 'cicd-pipeline-github-actions-docker',
    excerpt: 'Step-by-step guide to setting up automated deployment pipeline using GitHub Actions and Docker containers.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 2, name: 'DevOps', slug: 'devops' }
    ],
    tags: [
      { id: 12, name: 'CI/CD', slug: 'cicd' },
      { id: 13, name: 'GitHub Actions', slug: 'github-actions' },
      { id: 6, name: 'Docker', slug: 'docker' },
      { id: 14, name: 'Automation', slug: 'automation' }
    ],
    publishedAt: '2023-12-20T00:00:00Z',
    readTime: 10,
    viewCount: 298,
    createdAt: '2023-12-20T00:00:00Z',
    updatedAt: '2023-12-20T00:00:00Z'
  },
  {
    id: "5",
    title: 'PostgreSQL Performance Tuning Tips',
    slug: 'postgresql-performance-tuning-tips',
    excerpt: 'Essential PostgreSQL optimization techniques to improve query performance and database efficiency.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 3, name: 'Database', slug: 'database' }
    ],
    tags: [
      { id: 15, name: 'PostgreSQL', slug: 'postgresql' },
      { id: 3, name: 'Performance', slug: 'performance' },
      { id: 11, name: 'Database', slug: 'database' },
      { id: 16, name: 'Optimization', slug: 'optimization' }
    ],
    publishedAt: '2023-12-15T00:00:00Z',
    readTime: 7,
    viewCount: 167,
    createdAt: '2023-12-15T00:00:00Z',
    updatedAt: '2023-12-15T00:00:00Z'
  },
  {
    id: "6",
    title: 'Vue.js 3 with TypeScript: Building Modern SPAs',
    slug: 'vuejs3-typescript-building-modern-spas',
    excerpt: 'Complete guide to building modern single-page applications with Vue.js 3 and TypeScript.',
    content: 'Full article content would go here...',
    featuredImageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center',
    status: 'published',
    author: {
      id: 1,
      name: 'RihanoDev',
      username: 'rihanoDev',
      avatarUrl: '/profile.jpg'
    },
    categories: [
      { id: 4, name: 'Frontend Development', slug: 'frontend-development' }
    ],
    tags: [
      { id: 17, name: 'Vue.js', slug: 'vuejs' },
      { id: 18, name: 'TypeScript', slug: 'typescript' },
      { id: 19, name: 'SPA', slug: 'spa' },
      { id: 20, name: 'Frontend', slug: 'frontend' }
    ],
    publishedAt: '2023-12-10T00:00:00Z',
    readTime: 9,
    viewCount: 203,
    createdAt: '2023-12-10T00:00:00Z',
    updatedAt: '2023-12-10T00:00:00Z'
  }
]

// Function to get articles - ready for API integration
export const getArticles = async (): Promise<Article[]> => {
  // const response = await fetch('/api/articles')
  // return response.json()
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return articlesData
}
