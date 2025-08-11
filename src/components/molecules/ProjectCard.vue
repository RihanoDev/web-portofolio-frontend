<template>
  <div class="project-card group cursor-pointer">
    <div class="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <!-- Project Image -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Status Badge -->
        <div class="absolute top-4 right-4">
          <span 
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="getStatusClass(project.status)"
          >
            {{ getStatusText(project.status) }}
          </span>
        </div>

        <!-- Quick Links on Hover -->
        <div class="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      <!-- Project Content -->
      <div class="p-6">
        <!-- Title and Category -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-accent uppercase tracking-wider">
              {{ project.category }}
            </span>
          </div>
          <h3 class="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
            {{ project.title }}
          </h3>
        </div>

        <!-- Description -->
        <p class="text-secondary text-sm leading-relaxed mb-4">
          {{ project.description }}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-1.5 mb-3">
          <Badge v-for="tech in project.technologies.slice(0, 4)" :key="tech" color="gray">{{ tech }}</Badge>
          <Badge v-if="project.technologies.length > 4">+{{ project.technologies.length - 4 }} more</Badge>
        </div>

        <!-- Key Features (shown on hover) -->
        <div class="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <div class="pt-4 border-t border-white/5">
            <h4 class="text-sm font-semibold text-primary mb-2">Key Features:</h4>
            <ul class="space-y-1">
              <li 
                v-for="feature in project.features.slice(0, 3)" 
                :key="feature"
                class="flex items-start space-x-2 text-xs text-secondary"
              >
                <CheckCircle class="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 mt-4 pt-4 border-t border-white/5">
          <BaseButton v-if="project.githubUrl" as="a" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" class="flex-1">
            <Github class="w-4 h-4 mr-2" />
            <span>Code</span>
          </BaseButton>
          <BaseButton v-if="project.liveUrl" as="a" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" class="flex-1">
            <ExternalLink class="w-4 h-4 mr-2" />
            <span>Live Demo</span>
          </BaseButton>
          <BaseButton v-if="!project.liveUrl && project.githubUrl" variant="primary" size="sm" class="flex-1" @click="openProject">
            <Eye class="w-4 h-4 mr-2" />
            <span>View</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github, ExternalLink, CheckCircle, Eye } from 'lucide-vue-next'
import BaseButton from '../base/BaseButton.vue'
import Badge from '../base/Badge.vue'

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

interface Props {
  project: Project
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder-project.jpg'
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-400 border border-green-500/30'
    case 'in-progress':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
    case 'planned':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'in-progress':
      return 'In Progress'
    case 'planned':
      return 'Planned'
    default:
      return 'Unknown'
  }
}

const openProject = () => {
  // Could open a modal or navigate to project detail page
  console.log('Open project details')
}
</script>

<style scoped>
.project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card .glass {
  background: rgba(var(--surface-rgb), 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
}

.project-card .glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.05), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.project-card:hover .glass::before {
  left: 100%;
}

.project-card:hover .glass {
  background: rgba(var(--surface-rgb), 0.7);
  border-color: rgba(var(--accent-rgb), 0.3);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 107, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Enhanced button interactions */
.project-card a,
.project-card button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card a::before,
.project-card button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.project-card a:hover::before,
.project-card button:hover::before {
  left: 100%;
}

.project-card a:hover,
.project-card button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(255, 107, 0, 0.25);
}

.project-card a:active,
.project-card button:active {
  transform: translateY(0) scale(0.98);
  transition: all 0.1s ease;
}

/* Enhanced image hover effects */
.project-card img {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover img {
  transform: scale(1.1);
  filter: brightness(1.1) contrast(1.1);
}

/* Technology badges enhanced */
.project-card span[class*="px-2"] {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card span[class*="px-2"]:hover {
  transform: scale(1.05);
  background: rgba(255, 107, 0, 0.1);
  border-color: rgba(255, 107, 0, 0.3);
}

/* Quick action buttons */
.project-card .w-8 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card .w-8:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 15px rgba(255, 107, 0, 0.4);
}

/* Features expansion animation */
.project-card .max-h-0 {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .max-h-0 {
  max-height: 200px;
}

/* Enhanced status badge */
.project-card .absolute.top-4.right-4 span {
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.project-card:hover .absolute.top-4.right-4 span {
  transform: scale(1.05);
}

/* Title color transition */
.project-card h3 {
  transition: all 0.3s ease;
}

.project-card:hover h3 {
  color: var(--accent);
  text-shadow: 0 0 10px rgba(255, 107, 0, 0.3);
}

/* Gradient background enhancement */
.bg-gradient {
  background: linear-gradient(135deg, var(--accent), rgba(var(--accent-rgb), 0.8));
  position: relative;
  overflow: hidden;
}

.bg-gradient::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.bg-gradient:hover::after {
  left: 100%;
}

/* Loading state animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.project-card.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
