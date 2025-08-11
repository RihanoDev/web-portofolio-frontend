import type { Article } from '../types/article'

export const getArticles = (): Article[] => [
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
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
    author: { name: 'Rizky Haffiyan', avatar: '/profile.jpg' }
  }
]


