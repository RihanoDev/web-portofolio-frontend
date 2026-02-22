<template>
  <router-link 
    :to="{ name: 'project-detail', params: { slug: props.project.slug } }"
    class="block"
  >
    <div class="project-card group cursor-pointer glass-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <!-- Project Image -->
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          :style="{ 'content-visibility': 'auto' }"
          @error="handleImageError"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Status Badge -->
        <div class="absolute top-4 right-4">
          <span 
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="getStatusClass(project.status)"
          >
            {{ getTranslatedStatus(project.status) }}
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
            <h4 class="text-sm font-semibold text-primary mb-2">{{ $t('projects.key_features') || 'Key Features:' }}</h4>
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
          <BaseButton v-if="project.githubUrl" as="a" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" class="flex-1" @click.stop>
            <Github class="w-4 h-4 mr-2" />
            <span>{{ $t('projects.cta_code') || 'Code' }}</span>
          </BaseButton>
          <BaseButton v-if="project.liveUrl" as="a" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" class="flex-1" @click.stop>
            <ExternalLink class="w-4 h-4 mr-2" />
            <span>{{ $t('projects.cta_live') || 'Live Demo' }}</span>
          </BaseButton>
          <BaseButton v-if="!project.liveUrl && project.githubUrl" variant="primary" size="sm" class="flex-1">
            <Eye class="w-4 h-4 mr-2" />
            <span>{{ $t('projects.cta_details') || 'View Details' }}</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { Github, ExternalLink, CheckCircle, Eye } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import BaseButton from '../atoms/Button.vue'
import Badge from '../atoms/Badge.vue'
import type { ProjectListItem } from '../../types/project'
import { getLocalized } from '../../utils/i18n'

const { locale, t } = useI18n()

// Adapter for backward compatibility
interface ProjectCardProps {
  project: ProjectListItem
}

// Define props using the adapter interface
const props = defineProps<ProjectCardProps>()

// Function to get default image
const getDefaultImage = () => {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23ffffff' font-family='Arial' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E"
}

// Computed properties to map new data structure to the expected format
const project = {
  get id() { return props.project.id },
  get title() { return getLocalized(props.project, 'title', locale.value) },
  get description() { return getLocalized(props.project, 'description', locale.value) },
  get category() { return props.project.category || 'Uncategorized' },
  get technologies() { return props.project.technologies || [] },
  get image() { return props.project.thumbnailUrl || getDefaultImage() },
  get githubUrl() { return props.project.githubUrl },
  get liveUrl() { return props.project.liveDemoUrl },
  get features() { 
    // Extract features from localized description if available
    const desc = getLocalized(props.project, 'description', locale.value)
    const descParts = desc.split('. ')
    return descParts.length > 1 ? descParts : [desc]
  },
  get status() {
    // Map status from ProjectStatus to UI status
    switch (props.project.status?.toLowerCase()) {
      case 'published':
      case 'completed': return 'completed'
      case 'draft':
      case 'in-progress':
      case 'ongoing': return 'in-progress'
      case 'private':
      case 'planned':
      case 'planning': return 'planned'
      case 'archived': return 'archived'
      default: return 'in-progress'
    }
  }
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = getDefaultImage()
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-400 border border-green-500/30'
    case 'in-progress':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
    case 'planned':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
    case 'archived':
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
    default:
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
  }
}

const getTranslatedStatus = (status: string) => {
  switch (status) {
    case 'completed':
      return t('projects.status_completed') || 'Completed'
    case 'in-progress':
      return t('projects.status_in_progress') || 'In Progress'
    case 'planned':
      return t('projects.status_planned') || 'Planned'
    case 'archived':
      return t('projects.status_archived') || 'Archived'
    default:
      return t('projects.status_unknown') || 'Unknown'
  }
}
</script>

<style scoped>
.project-card {
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Using global glass-card class, enhanced with project-specific effects */
.project-card::before {
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

.project-card:hover::before {
  left: 100%;
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
