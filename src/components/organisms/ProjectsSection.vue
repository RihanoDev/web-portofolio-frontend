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
        <div class="flex flex-wrap justify-center mb-10 gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeCategory === category 
              ? 'bg-gradient text-white shadow-lg' 
              : 'glass text-secondary hover:text-primary border border-white/10'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
import ProjectCard from '../molecules/ProjectCard.vue'
import type { Project } from '../../types/project'

const activeCategory = ref('All')
const categories = ['All', 'Backend', 'Full Stack', 'Microservices', 'API']

const projects: Project[] = [
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
    githubUrl: 'https://github.com/yourusername/web-portofolio-frontend',
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
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})
</script>
</script>


