<template>
  <section id="projects" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">Featured Projects</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            Showcase of my recent work in backend development, system design, and architecture
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center mb-12 gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-300"
            :class="activeCategory === category 
              ? 'bg-gradient text-white shadow-lg' 
              : 'glass text-secondary hover:text-primary border border-white/10'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- View All Projects Button -->
        <div class="text-center mt-12">
          <a 
            href="https://github.com/RihanoDev" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-4 rounded-lg glass border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2"
          >
            <span>View All Projects</span>
            <ExternalLink class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ExternalLink } from 'lucide-vue-next'
import ProjectCard from '../ui/ProjectCard.vue'

interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  category: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  features: string[]
  status: 'completed' | 'in-progress' | 'planned'
}

const activeCategory = ref('All')

const categories = ['All', 'Backend', 'Microservices', 'API', 'Full Stack', 'DevOps']

const projects: Project[] = [
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

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
