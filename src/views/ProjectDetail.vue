<template>
  <div class="min-h-screen pt-20">
    <div class="container mx-auto px-4 py-10">
      <div class="max-w-4xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="flex flex-col items-center justify-center py-20">
          <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p class="mt-4 text-lg text-secondary">{{ $t('projects.loading') }}</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">{{ $t('common.error_loading') || 'Error Loading Project' }}</h2>
          <p class="text-red-600 dark:text-red-300">{{ error }}</p>
          <button 
            @click="fetchProject()" 
            class="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
          >
            {{ $t('common.retry') || 'Retry' }}
          </button>
        </div>

        <!-- Project Content -->
        <article v-else-if="project" class="project-detail">
          <!-- Project Header -->
          <header class="mb-8">
            <!-- Category Badge -->
            <div class="flex gap-2 mb-4">
              <span 
                v-if="project.category"
                class="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30"
              >
                {{ project.category.name }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {{ getLocalized(project, 'title', locale) }}
            </h1>

            <!-- Meta Info -->
            <div class="flex flex-wrap items-center gap-6 text-secondary mb-6">
              <!-- Date -->
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4" />
                <span>{{ formatDate(project.createdAt) }}</span>
              </div>
              
              <!-- Status Badge -->
              <div 
                class="px-3 py-1 text-xs font-medium rounded-full"
                :class="getStatusClass(project.status)"
              >
                {{ project.status }}
              </div>
              
              <!-- View Count -->
              <div class="flex items-center gap-2">
                <Eye class="w-4 h-4" />
                <span>{{ viewCount.total || 0 }} {{ $t('projects.views') || 'views' }}</span>
              </div>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech.id"
                class="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded border border-blue-500/30"
              >
                {{ tech.name }}
              </span>
            </div>
            
            <!-- External Links -->
            <div class="flex flex-wrap gap-4 mb-8">
              <a 
                v-if="project.githubUrl" 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-2 px-4 py-2 rounded-lg glass-btn transition-all duration-300 hover:text-white hover:bg-accent"
              >
                <span>GitHub</span>
                <ExternalLink class="w-4 h-4" />
              </a>
              
              <a 
                v-if="project.liveDemoUrl" 
                :href="project.liveDemoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-2 px-4 py-2 rounded-lg glass-btn transition-all duration-300 hover:text-white hover:bg-green-600"
              >
                <span>Live Demo</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>
          </header>

          <!-- Featured Image -->
          <figure v-if="project.thumbnailUrl" class="mb-8">
            <img 
              :src="project.thumbnailUrl" 
              :alt="project.title" 
              class="w-full h-auto rounded-xl object-cover max-h-96"
            />
          </figure>

          <!-- Project Content -->
          <div class="prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-accent max-w-none">
            <!-- If content is provided as HTML -->
            <div v-if="getLocalized(project, 'content', locale)" v-html="sanitizeHtml(getLocalized(project, 'content', locale))"></div>
            
            <!-- If no content, show description -->
            <div v-else-if="getLocalized(project, 'description', locale)" class="text-secondary">
              {{ getLocalized(project, 'description', locale) }}
            </div>
            
            <!-- If no description, show placeholder -->
            <div v-else class="bg-surface/30 p-6 rounded-lg border border-white/5 text-center">
              <p class="text-secondary">Full project description coming soon!</p>
            </div>
          </div>
          
          <!-- Project Gallery -->
          <div v-if="project.images && project.images.length > 0" class="mt-12">
            <h2 class="text-2xl font-bold text-primary mb-4">Project Gallery</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(image, index) in project.images" 
                :key="index"
                class="rounded-lg overflow-hidden"
              >
                <img 
                  :src="image.url" 
                  :alt="getLocalized(image, 'caption', locale) || `${getLocalized(project, 'title', locale)} screenshot ${index + 1}`" 
                  class="w-full h-auto object-cover"
                />
                <p v-if="getLocalized(image, 'caption', locale)" class="py-2 px-3 text-sm text-secondary text-center">
                  {{ getLocalized(image, 'caption', locale) }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="mt-12 pt-8 border-t border-white/10">
            <div class="flex justify-between">
              <router-link to="/projects" class="flex items-center gap-2 text-accent hover:text-primary transition-colors">
                <ArrowLeft class="w-5 h-5" />
                <span>{{ $t('projects.back_to_list') || 'Back to Projects' }}</span>
              </router-link>
            </div>
          </div>
        </article>

        <!-- Not Found State -->
        <div v-else class="text-center py-16">
          <h2 class="text-3xl font-bold text-primary mb-4">{{ $t('projects.not_found_title') || 'Project Not Found' }}</h2>
          <p class="text-secondary mb-8">{{ $t('projects.not_found_desc') || 'The project you\'re looking for doesn\'t exist or has been removed.' }}</p>
          <router-link 
            to="/projects" 
            class="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg inline-block transition-colors"
          >
            {{ $t('projects.browse_all') || 'Browse All Projects' }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Calendar, Eye, ExternalLink, ArrowLeft } from 'lucide-vue-next';
import { formatDate } from '../utils/date';
import { analyticsService } from '../services/analytics';
import type { ViewCountData } from '../types/analytics';
import type { Project } from '../types/project';
import { fetchProjectBySlug } from '../services/projects';
import { getLocalized } from '../utils/i18n';

const { locale } = useI18n();

// Route and params
const route = useRoute();
const slug = computed(() => route.params.slug as string);

// State
const project = ref<Project | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const viewCount = ref<ViewCountData>({
  total: 0,
  today: 0,
  week: 0,
  month: 0,
  unique: 0
});

// Fetch project data
const fetchProject = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const projectData = await fetchProjectBySlug(slug.value);
    project.value = projectData;
    
    // Track view after successful project fetch
    trackProjectView();
    
    // Update document title
    if (projectData?.title) {
      document.title = `${projectData.title} | Rizky's Portfolio`;
    }
  } catch (err) {
    console.error('Error fetching project:', err);
    error.value = 'Failed to load project. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// Track project view
const trackProjectView = async () => {
  if (!project.value) return;
  
  try {
    // Get visitor ID from localStorage or create a new one
    const visitorId = localStorage.getItem('visitor_id') || 
      `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    // Save visitor ID if it was newly created
    if (!localStorage.getItem('visitor_id')) {
      localStorage.setItem('visitor_id', visitorId);
    }
    
    // Only track view once - the response already includes the stats we need
    const result = await analyticsService.trackView({
      page: `/project/${slug.value}`,
      visitorId,
      sessionId: sessionStorage.getItem('session_id') || undefined
    });
    
    // Update view count data from the track response
    if (result.data) {
      console.log('View count updated:', result.data);
      viewCount.value = result.data;
    } else {
      console.warn('No view count data received from tracking');
      // Fallback to getting view count if tracking doesn't return data
      try {
        const pageViewCount = await analyticsService.getViewCount(`/project/${slug.value}`);
        if (pageViewCount) {
          viewCount.value = pageViewCount;
        }
      } catch (viewErr) {
        console.error('Failed to fetch view count:', viewErr);
      }
    }
  } catch (err) {
    console.error('Failed to track project view:', err);
    
    // Try to get at least the view count on error
    try {
      const pageViewCount = await analyticsService.getViewCount(`/project/${slug.value}`);
      if (pageViewCount) {
        viewCount.value = pageViewCount;
      }
    } catch (viewErr) {
      console.error('Failed to fetch view count after tracking error:', viewErr);
    }
  }
};

// Get status classes for styling
const getStatusClass = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'active':
    case 'completed':
      return 'bg-green-500/20 text-green-400 border border-green-500/30';
    case 'in progress':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
    case 'planning':
      return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
    case 'archived':
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
};

// Basic HTML sanitizer (In production use a proper library like DOMPurify)
const sanitizeHtml = (html: string) => {
  // This is a very basic sanitization - consider using a proper library
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/g, '');
};

// Lifecycle hooks
onMounted(() => {
  fetchProject();
  
  // Initialize session ID if not present
  if (!sessionStorage.getItem('session_id')) {
    sessionStorage.setItem('session_id', `session_${Date.now()}`);
  }
});
</script>

<style scoped>
/* Prose customization for dark mode */
:deep(.prose) {
  color: #ccd6e0;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4) {
  color: #f0f4f8;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
}

:deep(.prose a) {
  color: #60a5fa;
  text-decoration: none;
  border-bottom: 1px solid rgba(96, 165, 250, 0.4);
  transition: color 0.2s, border-color 0.2s;
}

:deep(.prose a:hover) {
  color: #93c5fd;
  border-color: rgba(147, 197, 253, 0.6);
}

:deep(.prose blockquote) {
  border-left: 4px solid #60a5fa;
  background-color: rgba(30, 41, 59, 0.5);
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  font-style: italic;
  color: #cbd5e1;
}

:deep(.prose pre) {
  background-color: #1e293b;
  border-radius: 0.375rem;
  padding: 1.25rem;
  overflow-x: auto;
}

:deep(.prose code) {
  background-color: rgba(30, 41, 59, 0.5);
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

:deep(.prose pre code) {
  background-color: transparent;
  padding: 0;
}

:deep(.prose ul),
:deep(.prose ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

:deep(.prose img) {
  border-radius: 0.375rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(.prose hr) {
  border-color: rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  :deep(.prose) {
    font-size: 1rem;
  }
  
  :deep(.prose h1) {
    font-size: 1.875rem;
  }
  
  :deep(.prose h2) {
    font-size: 1.5rem;
  }
}
</style>
