import type { Project } from '../types/project'

// Dummy data - will be replaced with API calls in the future
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'BRI API Payment Gateway Integration',
    description: 'Production payment system handling $500K+ monthly transaction volume',
    longDescription: 'High-performance payment gateway integration for BRI API, processing over $500,000 in monthly transactions with 99.9% uptime and comprehensive fraud detection.',
    category: 'Backend',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'Docker'],
    image: '/projects/payment-gateway.jpg',
    features: [
      '$500K+ monthly transaction volume',
      '99.9% uptime with real-time monitoring', 
      'Comprehensive fraud detection',
      'PCI DSS compliance implementation',
      'Multi-currency transaction support',
      'Real-time transaction status tracking'
    ],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Portfolio Website with CI/CD',
    description: 'Vue.js portfolio with automated GitHub Actions deployment',
    longDescription: 'Modern portfolio website built with Vue 3, TypeScript, and Tailwind CSS, featuring automated CI/CD pipeline with Docker containerization and SSH deployment.',
    category: 'Full Stack',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions'],
    image: '/projects/portfolio-website.jpg',
    githubUrl: 'https://github.com/RihanoDev/web-portofolio-frontend',
    liveUrl: 'http://your-server:2002',
    features: [
      'Responsive design with mobile optimization',
      'Glass morphism theme system', 
      'Automated CI/CD with GitHub Actions',
      'Docker containerization',
      'SEO optimization',
      'Performance monitoring'
    ],
    status: 'completed'
  },
  {
    id: 3,
    title: 'SuriaTech Backend Systems',
    description: '50K+ requests/hour backend infrastructure with advanced caching',
    longDescription: 'Scalable backend systems for SuriaTech handling over 50,000 requests per hour with Redis caching, database optimization, and comprehensive monitoring.',
    category: 'Backend',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'Prometheus'],
    image: '/projects/suriatech-backend.jpg',
    features: [
      '50K+ requests/hour capacity',
      'Advanced Redis caching strategy',
      'Database query optimization', 
      'Real-time performance monitoring',
      'Microservices architecture',
      'Automated scaling capabilities'
    ],
    status: 'completed'
  },
  {
    id: 4,
    title: 'Tualang Digital Platform',
    description: 'Full-stack digital platform development with modern web technologies',
    longDescription: 'Comprehensive digital platform for Tualang, featuring user management, content delivery, and analytics with modern web technologies and responsive design.',
    category: 'Full Stack',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/projects/tualang-platform.jpg',
    features: [
      'User authentication and authorization',
      'Content management system',
      'Real-time analytics dashboard',
      'Responsive mobile-first design',
      'API-first architecture',
      'Comprehensive admin panel'
    ],
    status: 'completed'
  },
  {
    id: 5,
    title: 'Microservices Learning Project',
    description: 'Educational microservices architecture with Go and Docker',
    longDescription: 'Learning project implementing microservices patterns with Go, featuring service discovery, load balancing, and inter-service communication patterns.',
    category: 'Microservices',
    technologies: ['Go', 'Docker', 'Consul', 'gRPC', 'Kubernetes'],
    image: '/projects/microservices-learning.jpg',
    features: [
      'Service discovery implementation',
      'Load balancing strategies',
      'Circuit breaker patterns',
      'Distributed tracing',
      'Container orchestration',
      'API gateway implementation'
    ],
    status: 'in-progress'
  },
  {
    id: 6,
    title: 'API Development Framework',
    description: 'Reusable Go framework for rapid API development',
    longDescription: 'Custom Go framework for building REST APIs quickly, featuring middleware, validation, database abstraction, and comprehensive testing utilities.',
    category: 'API',
    technologies: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Swagger'],
    image: '/projects/api-framework.jpg',
    features: [
      'Rapid API development',
      'Built-in middleware system',
      'Database abstraction layer',
      'Automatic API documentation',
      'Comprehensive testing utilities',
      'Configuration management'
    ],
    status: 'in-progress'
  }
]

// Function to get projects - ready for API integration
export const getProjects = async (): Promise<Project[]> => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/projects')
  // return response.json()
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return projectsData
}
