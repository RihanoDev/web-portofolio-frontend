import type { Project } from '../types/project'

export const getProjects = (): Project[] => [
  {
    id: 1,
    title: 'E-Commerce Microservices',
    description: 'Scalable microservices architecture for e-commerce platform with Go and Kafka',
    longDescription: 'A comprehensive e-commerce platform built with microservices architecture, featuring user management, product catalog, order processing, and payment integration.',
    category: 'Microservices',
    technologies: ['Go', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    image: '/projects/ecommerce-microservices.jpg',
    githubUrl: 'https://github.com/RihanoDev/ecommerce-microservices',
    features: [
      'User authentication and authorization',
      'Product catalog management',
      'Order processing with event sourcing',
      'Payment gateway integration',
      'Real-time notifications',
      'API Gateway with rate limiting'
    ],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Banking Transaction System',
    description: 'High-performance banking system with concurrent transaction processing',
    longDescription: 'A robust banking transaction system designed to handle thousands of concurrent transactions with ACID compliance and real-time balance updates.',
    category: 'Backend',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'Docker'],
    image: '/projects/banking-system.jpg',
    githubUrl: 'https://github.com/RihanoDev/banking-system',
    features: [
      'ACID compliant transactions',
      'Concurrent transaction processing',
      'Real-time balance updates',
      'Transaction history and auditing',
      'Multi-currency support',
      'Fraud detection algorithms'
    ],
    status: 'completed'
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API for project and task management with team collaboration features',
    longDescription: 'A comprehensive task management API with advanced features for team collaboration, project tracking, and productivity analytics.',
    category: 'API',
    technologies: ['Go', 'Gin', 'PostgreSQL', 'JWT', 'Docker', 'Swagger'],
    image: '/projects/task-management.jpg',
    githubUrl: 'https://github.com/RihanoDev/task-management-api',
    liveUrl: 'https://task-api.rihanodev',
    features: [
      'Project and task management',
      'Team collaboration tools',
      'Role-based access control',
      'Real-time notifications',
      'Analytics and reporting',
      'Integration with third-party tools'
    ],
    status: 'completed'
  },
  {
    id: 4,
    title: 'Real-time Chat System',
    description: 'WebSocket-based chat application with message persistence and user presence',
    longDescription: 'A real-time chat system supporting multiple chat rooms, direct messaging, file sharing, and online presence indicators.',
    category: 'Full Stack',
    technologies: ['Go', 'WebSocket', 'Vue.js', 'PostgreSQL', 'Redis'],
    image: '/projects/chat-system.jpg',
    githubUrl: 'https://github.com/RihanoDev/realtime-chat',
    liveUrl: 'https://chat.rihanodev',
    features: [
      'Real-time messaging',
      'Multiple chat rooms',
      'Direct messaging',
      'File sharing',
      'Online presence indicators',
      'Message history and search'
    ],
    status: 'completed'
  },
  {
    id: 5,
    title: 'CI/CD Pipeline Automation',
    description: 'Automated deployment pipeline with GitLab CI, Docker, and Kubernetes',
    longDescription: 'A complete CI/CD pipeline setup for automated testing, building, and deployment of applications using modern DevOps practices.',
    category: 'DevOps',
    technologies: ['GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    image: '/projects/cicd-pipeline.jpg',
    githubUrl: 'https://github.com/RihanoDev/cicd-automation',
    features: [
      'Automated testing and building',
      'Multi-environment deployment',
      'Infrastructure as Code',
      'Monitoring and alerting',
      'Rollback strategies',
      'Security scanning'
    ],
    status: 'completed'
  },
  {
    id: 6,
    title: 'Inventory Management System',
    description: 'Comprehensive inventory tracking system with barcode integration and analytics',
    longDescription: 'A complete inventory management solution with real-time tracking, automated reordering, and comprehensive analytics.',
    category: 'Backend',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
    image: '/projects/inventory-system.jpg',
    githubUrl: 'https://github.com/RihanoDev/inventory-system',
    features: [
      'Real-time inventory tracking',
      'Barcode and QR code integration',
      'Automated reordering',
      'Comprehensive analytics',
      'Multi-warehouse support',
      'Supplier management'
    ],
    status: 'in-progress'
  }
]


