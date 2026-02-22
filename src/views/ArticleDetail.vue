<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-10">
      <div class="max-w-4xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="flex flex-col items-center justify-center py-20">
          <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p class="mt-4 text-lg text-secondary">{{ $t('articles.loading') }}</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">{{ $t('common.error_loading') || 'Error Loading Article' }}</h2>
          <p class="text-red-600 dark:text-red-300">{{ error }}</p>
          <button 
            @click="fetchArticle()" 
            class="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
          >
            {{ $t('common.retry') || 'Retry' }}
          </button>
        </div>

        <!-- Article Content -->
        <article v-else-if="article" class="article-detail">
          <!-- Article Header -->
          <header class="mb-8">
            <!-- Categories -->
            <div class="flex gap-2 mb-4">
              <span 
                v-for="(category, index) in article.categories" 
                :key="typeof category === 'string' ? index : category.id"
                class="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
              >
                {{ typeof category === 'string' ? category : category.name }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {{ getLocalized(article, 'title', locale) }}
            </h1>

            <!-- Meta Info -->
            <div class="flex flex-wrap items-center gap-6 text-secondary mb-6">
              <!-- Date -->
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4" />
                <span>{{ formatDate(article.publishedAt || article.createdAt) }}</span>
              </div>
              
              <!-- Reading Time -->
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4" />
                <span>{{ article.readTime || '5' }} {{ $t('articles.min_read') || 'min read' }}</span>
              </div>
              
              <!-- View Count -->
              <div class="flex items-center gap-2">
                <Eye class="w-4 h-4" />
                <span>{{ viewCount.total || 0 }} {{ $t('articles.views') || 'views' }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="(tag, index) in article.tags" 
                :key="typeof tag === 'string' ? index : tag.id"
                class="px-3 py-1 text-xs font-medium bg-surface/50 text-secondary rounded border border-white/10"
              >
                #{{ typeof tag === 'string' ? tag : tag.name }}
              </span>
            </div>
          </header>

          <!-- Featured Image -->
          <figure v-if="article.featuredImageUrl" class="mb-8">
            <img 
              :src="article.featuredImageUrl" 
              :alt="article.title" 
              class="w-full h-auto rounded-xl object-cover max-h-96"
            />
          </figure>

          <!-- Article Content -->
          <div class="prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-accent max-w-none break-words">
            <!-- If content is provided as HTML -->
            <div v-if="getLocalized(article, 'content', locale)" v-html="sanitizeHtml(getLocalized(article, 'content', locale))"></div>
            
            <!-- If no content, show placeholder -->
            <div v-else class="bg-surface/30 p-6 rounded-lg border border-white/5 text-center">
              <p class="text-secondary">Full article content coming soon!</p>
            </div>
          </div>

          <!-- Author Bio -->
          <div class="mt-12 p-6 glass-subtle rounded-xl flex items-center gap-6 border border-white/5 hover:border-white/10 transition-all duration-300">
            <!-- Interactive Initials Logo -->
            <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 shadow-xl bg-gradient">
              <span class="text-2xl sm:text-3xl text-white font-bold drop-shadow-md capitalize">
                {{ getInitials(article.author?.name || 'Author') }}
              </span>
              <!-- Inner ring highlight -->
              <div class="absolute inset-0 rounded-full border-2 border-white/20"></div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-primary mb-2 capitalize">{{ article.author?.name || 'Author' }}</h3>
              <p class="text-secondary leading-relaxed text-sm sm:text-base text-justify" style="text-justify: inter-word;">
                {{ profile?.title || 'System Administrator and technology contributor.' }}
              </p>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="mt-12 pt-8 border-t border-white/10">
            <div class="flex justify-between">
              <router-link to="/articles" class="flex items-center gap-2 text-accent hover:text-primary transition-colors">
                <ArrowLeft class="w-5 h-5" />
                <span>{{ $t('articles.back_to_list') || 'Back to Articles' }}</span>
              </router-link>
            </div>
          </div>
        </article>

        <!-- Not Found State -->
        <div v-else class="text-center py-16">
          <h2 class="text-3xl font-bold text-primary mb-4">{{ $t('articles.not_found_title') || 'Article Not Found' }}</h2>
          <p class="text-secondary mb-8">{{ $t('articles.not_found_desc') || 'The article you\'re looking for doesn\'t exist or has been removed.' }}</p>
          <router-link 
            to="/articles" 
            class="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg inline-block transition-colors"
          >
            {{ $t('articles.browse_all') || 'Browse All Articles' }}
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
import { Calendar, Clock, Eye, ArrowLeft } from 'lucide-vue-next';
import { formatDate } from '../utils/date';
import { analyticsService } from '../services/analytics';
import type { ViewCountData } from '../types/analytics';
import type { Article } from '../types/article';
import { fetchArticleBySlug } from '../services/articles';
import { getLocalized } from '../utils/i18n';
import { getProfileSettings, type ProfileData } from '../services/profile';

const { locale } = useI18n();

// Route and params
const route = useRoute();
const slug = computed(() => route.params.slug as string);

// State
const article = ref<Article | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const profile = ref<ProfileData | null>(null);

const viewCount = ref<ViewCountData>({
  total: 0,
  today: 0,
  week: 0,
  month: 0,
  unique: 0
});

// Fetch profile data
const fetchProfile = async () => {
  try {
    profile.value = await getProfileSettings(locale.value);
  } catch (err) {
    // Profil default ada di logic jika error
  }
};

// Fetch article data
const fetchArticle = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const articleData = await fetchArticleBySlug(slug.value);
    article.value = articleData;
    
    // Track view after successful article fetch
    trackArticleView();
    
    // Update document title
    if (articleData?.title) {
      document.title = `${articleData.title} | Rizky's Portfolio`;
    }
  } catch (err) {
    
    error.value = 'Failed to load article. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// Track article view
const trackArticleView = async () => {
  if (!article.value) return;
  
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
      page: `/article/${slug.value}`,
      visitorId,
      sessionId: sessionStorage.getItem('session_id') || undefined
    });
    
    // Update view count data from the track response
    if (result.data) {
      
      viewCount.value = result.data;
    } else {
      
      // Fallback to getting view count if tracking doesn't return data
      try {
        const pageViewCount = await analyticsService.getViewCount(`/article/${slug.value}`);
        if (pageViewCount) {
          viewCount.value = pageViewCount;
        }
      } catch (viewErr) {
        
      }
    }
  } catch (err) {
    
    
    // Try to get at least the view count on error
    try {
      const pageViewCount = await analyticsService.getViewCount(`/article/${slug.value}`);
      if (pageViewCount) {
        viewCount.value = pageViewCount;
      }
    } catch (viewErr) {
      
    }
  }
};

// Get author initials
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
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
  fetchArticle();
  fetchProfile();
  
  // Initialize session ID if not present
  if (!sessionStorage.getItem('session_id')) {
    sessionStorage.setItem('session_id', `session_${Date.now()}`);
  }
});

import { watch } from 'vue';
watch(locale, fetchProfile);
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
  text-align: justify;
  text-justify: inter-word;
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
