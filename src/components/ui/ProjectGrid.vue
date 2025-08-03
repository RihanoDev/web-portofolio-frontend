<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <article 
      v-for="project in projects" 
      :key="project.id"
      class="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
    >
      <!-- Image Header -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Status Badge -->
        <div class="absolute top-4 left-4">
          <span 
            class="px-3 py-1 text-white text-xs font-semibold rounded-full"
            :class="{
              'bg-green-500': project.status === 'completed',
              'bg-yellow-500': project.status === 'in-progress',
              'bg-blue-500': project.status === 'planning'
            }"
          >
            {{ project.status.replace('-', ' ').toUpperCase() }}
          </span>
        </div>
        
        <!-- Tech Stack Icons -->
        <div class="absolute top-4 right-4 flex space-x-1">
          <span 
            v-for="tech in project.technologies.slice(0, 3)" 
            :key="tech"
            class="w-6 h-6 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-xs"
          >
            {{ getTechIcon(tech) }}
          </span>
        </div>
        
        <!-- Quick Action Buttons on Hover -->
        <div class="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-icon btn-social github"
            @click.stop
          >
            <Github class="w-4 h-4" />
          </a>
          <a 
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-icon bg-blue-600 text-white hover:bg-blue-700"
            @click.stop
          >
            <ExternalLink class="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        <!-- Meta Info -->
        <div class="flex items-center justify-between text-xs text-gray-400 mb-3">
          <div class="flex items-center space-x-2">
            <Calendar class="w-4 h-4" />
            <span>{{ formatDate(project.createdAt) }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Star class="w-4 h-4" />
            <span>{{ project.stars || 0 }}</span>
          </div>
        </div>
        
        <!-- Title -->
        <h3 class="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors duration-300">
          {{ project.title }}
        </h3>
        
        <!-- Description -->
        <p class="text-gray-300 text-sm mb-4 line-clamp-3">
          {{ project.description }}
        </p>
        
        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tech in project.technologies.slice(0, 4)" 
            :key="tech"
            class="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-md"
          >
            {{ tech }}
          </span>
          <span 
            v-if="project.technologies.length > 4"
            class="px-2 py-1 bg-white/5 text-xs text-gray-400 rounded-md"
          >
            +{{ project.technologies.length - 4 }}
          </span>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex gap-2">
          <a 
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary btn-sm btn-with-icon flex-1"
          >
            <Github class="icon" />
            <span>Code</span>
          </a>
          <a 
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-sm btn-with-icon flex-1"
          >
            <ExternalLink class="icon" />
            <span>Live Demo</span>
          </a>
          <button 
            v-if="!project.liveUrl && project.githubUrl"
            class="btn-primary btn-sm btn-with-icon flex-1"
            @click="viewProject(project)"
          >
            <Eye class="icon" />
            <span>View</span>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Star, Github, ExternalLink, Eye } from 'lucide-vue-next'

interface Project {
  id: number
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planning'
  createdAt: string
  technologies: string[]
  stars?: number
  image: string
  githubUrl?: string
  liveUrl?: string
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Platform",
    description: "Multi-tenant SaaS platform for business management with real-time analytics, user management, and payment integration.",
    status: "completed",
    createdAt: "2024-01-20",
    technologies: ["Golang", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    stars: 45,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/rihanoDev/saas-platform",
    liveUrl: "https://saas-demo.rihanodev"
  },
  {
    id: 2,
    title: "Realtime Chat App",
    description: "High-performance realtime chat application with WebSocket support, message encryption, and multimedia sharing capabilities.",
    status: "completed",
    createdAt: "2024-01-15",
    technologies: ["Node.js", "Socket.io", "Vue.js", "MongoDB", "Docker"],
    stars: 32,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/rihanoDev/chat-app",
    liveUrl: "https://chat.rihanodev"
  },
  {
    id: 3,
    title: "E-Commerce API",
    description: "RESTful API for e-commerce platform with payment processing, inventory management, and order tracking.",
    status: "in-progress",
    createdAt: "2024-01-10",
    technologies: ["Golang", "PostgreSQL", "Redis", "gRPC", "Docker"],
    stars: 28,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/rihanoDev/ecommerce-api"
  }
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const getTechIcon = (tech: string) => {
  const icons: Record<string, string> = {
    'Golang': '🐹',
    'Node.js': '🟢',
    'PostgreSQL': '🐘',
    'Redis': '🗄️',
    'Docker': '🐳',
    'Kubernetes': '☸️',
    'Vue.js': '💚',
    'MongoDB': '🥬',
    'Socket.io': '🔌',
    'gRPC': '⚡'
  }
  return icons[tech] || '⚙️'
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
}

const viewProject = (project: Project) => {
  if (project.githubUrl) {
    window.open(project.githubUrl, '_blank')
  }
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
