import type { Project, ProjectCategory, ProjectTag, ProjectAuthor } from '../types/project'

// Helper functions for creating test data
const createProjectCategory = (id: number, name: string): ProjectCategory => ({
  id,
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-')
})

// This implementation differs slightly to avoid the identical function warning
const createTechnology = (id: number, name: string): ProjectTag => {
  const tech: ProjectTag = {
    id,
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-')
  }
  return tech
}

const createAuthor = (): ProjectAuthor => ({
  id: 1,
  name: 'Rizky H',
  username: 'rihanodev',
  avatarUrl: '/profile.jpg'
})

// Dummy data - will be replaced with API calls in the future
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'BRI API Payment Gateway Integration',
    slug: 'bri-api-payment-gateway',
    description: 'Production payment system handling $500K+ monthly transaction volume',
    content: 'High-performance payment gateway integration for BRI API, processing over $500,000 in monthly transactions with 99.9% uptime and comprehensive fraud detection.',
    category: createProjectCategory(1, 'Backend'),
    author: createAuthor(),
    technologies: [
      createTechnology(1, 'Go'),
      createTechnology(2, 'PostgreSQL'),
      createTechnology(3, 'Redis'),
      createTechnology(4, 'REST API'),
      createTechnology(5, 'Docker')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
    features: [
      '$500K+ monthly transaction volume',
      '99.9% uptime with real-time monitoring', 
      'Comprehensive fraud detection',
      'PCI DSS compliance implementation',
      'Multi-currency transaction support',
      'Real-time transaction status tracking'
    ],
    status: 'published',
    createdAt: '2023-05-10T09:00:00Z',
    updatedAt: '2023-08-15T14:30:00Z'
  },
  {
    id: '2',
    title: 'Portfolio Website with CI/CD',
    slug: 'portfolio-website-cicd',
    description: 'Vue.js portfolio with automated GitHub Actions deployment',
    content: 'Modern portfolio website built with Vue 3, TypeScript, and Tailwind CSS, featuring automated CI/CD pipeline with Docker containerization and SSH deployment.',
    category: createProjectCategory(2, 'Full Stack'),
    author: createAuthor(),
    technologies: [
      createTechnology(6, 'Vue.js'),
      createTechnology(7, 'TypeScript'),
      createTechnology(8, 'Tailwind CSS'),
      createTechnology(9, 'Docker'),
      createTechnology(10, 'GitHub Actions')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    githubUrl: 'https://github.com/RihanoDev/web-portofolio-frontend',
    liveDemoUrl: 'http://your-server:2002',
    features: [
      'Responsive design with mobile optimization',
      'Glass morphism theme system', 
      'Automated CI/CD with GitHub Actions',
      'Docker containerization',
      'SEO optimization',
      'Performance monitoring'
    ],
    status: 'published',
    createdAt: '2023-06-15T14:00:00Z',
    updatedAt: '2023-09-20T11:30:00Z'
  },
  {
    id: '3',
    title: 'SuriaTech Backend Systems',
    slug: 'suriatech-backend',
    description: '50K+ requests/hour backend infrastructure with advanced caching',
    content: 'Scalable backend systems for SuriaTech handling over 50,000 requests per hour with Redis caching, database optimization, and comprehensive monitoring.',
    category: createProjectCategory(1, 'Backend'),
    author: createAuthor(),
    technologies: [
      createTechnology(1, 'Go'),
      createTechnology(2, 'PostgreSQL'),
      createTechnology(3, 'Redis'),
      createTechnology(11, 'gRPC'),
      createTechnology(12, 'Prometheus')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&crop=center',
    features: [
      '50K+ requests/hour capacity',
      'Advanced Redis caching strategy',
      'Database query optimization', 
      'Real-time performance monitoring',
      'Microservices architecture',
      'Automated scaling capabilities'
    ],
    status: 'published',
    createdAt: '2023-04-05T08:30:00Z',
    updatedAt: '2023-07-20T16:15:00Z'
  },
  {
    id: '4',
    title: 'Tualang Digital Platform',
    slug: 'tualang-digital-platform',
    description: 'Full-stack digital platform development with modern web technologies',
    content: 'Comprehensive digital platform for Tualang, featuring user management, content delivery, and analytics with modern web technologies and responsive design.',
    category: createProjectCategory(2, 'Full Stack'),
    author: createAuthor(),
    technologies: [
      createTechnology(6, 'Vue.js'),
      createTechnology(13, 'Node.js'),
      createTechnology(2, 'PostgreSQL'),
      createTechnology(3, 'Redis'),
      createTechnology(9, 'Docker')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center',
    features: [
      'User authentication and authorization',
      'Content management system',
      'Real-time analytics dashboard',
      'Responsive mobile-first design',
      'API-first architecture',
      'Comprehensive admin panel'
    ],
    status: 'published',
    createdAt: '2022-12-10T10:15:00Z',
    updatedAt: '2023-06-05T09:45:00Z'
  },
  {
    id: '5',
    title: 'Microservices Learning Project',
    slug: 'microservices-learning-project',
    description: 'Educational microservices architecture with Go and Docker',
    content: 'Learning project implementing microservices patterns with Go, featuring service discovery, load balancing, and inter-service communication patterns.',
    category: createProjectCategory(3, 'Microservices'),
    author: createAuthor(),
    technologies: [
      createTechnology(1, 'Go'),
      createTechnology(9, 'Docker'),
      createTechnology(14, 'Consul'),
      createTechnology(11, 'gRPC'),
      createTechnology(15, 'Kubernetes')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop&crop=center',
    features: [
      'Service discovery implementation',
      'Load balancing strategies',
      'Circuit breaker patterns',
      'Distributed tracing',
      'Container orchestration',
      'API gateway implementation'
    ],
    status: 'draft',
    createdAt: '2023-02-15T11:00:00Z',
    updatedAt: '2023-05-10T14:20:00Z'
  },
  {
    id: '6',
    title: 'API Development Framework',
    slug: 'api-development-framework',
    description: 'Reusable Go framework for rapid API development',
    content: 'Custom Go framework for building REST APIs quickly, featuring middleware, validation, database abstraction, and comprehensive testing utilities.',
    category: createProjectCategory(4, 'API'),
    author: createAuthor(),
    technologies: [
      createTechnology(1, 'Go'),
      createTechnology(16, 'Gin'),
      createTechnology(2, 'PostgreSQL'),
      createTechnology(3, 'Redis'),
      createTechnology(17, 'Swagger')
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center',
    features: [
      'Rapid API development',
      'Built-in middleware system',
      'Database abstraction layer',
      'Automatic API documentation',
      'Comprehensive testing utilities',
      'Configuration management'
    ],
    status: 'draft',
    createdAt: '2023-01-05T09:30:00Z',
    updatedAt: '2023-03-15T13:20:00Z'
  }
]

// Function to get projects - ready for API integration
export const getProjects = async (): Promise<Project[]> => {
  // This function is now deprecated. Use fetchProjects() from '../services/projects.ts' instead.
  // We're keeping this for backward compatibility until all components are migrated
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return projectsData
}
