<template>
  <!-- Hero Section -->
  <section id="home" class="relative min-h-screen flex items-center justify-center px-4 py-20">
    <!-- Simple background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/3 rounded-full blur-2xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/3 rounded-full blur-2xl"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Profile Image with enhanced styling -->
        <div class="mb-8 group">
          <div class="relative inline-block">
            <div class="w-40 h-40 mx-auto rounded-full glass-strong p-1 group-hover:scale-105 transition-all duration-500">
              <div class="w-full h-full rounded-full overflow-hidden border-2 border-primary-500/20 relative bg-gray-800/50">
                <!-- Skeleton Loader -->
                <div 
                  v-if="!isImageLoaded" 
                  class="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 animate-pulse z-10"
                ></div>
                <!-- Image -->
                <img 
                  v-if="displayAvatarUrl"
                  :src="displayAvatarUrl" 
                  :alt="profileData.name" 
                  class="w-full h-full object-cover relative z-0 transition-opacity duration-300"
                  :class="{'opacity-0': !isImageLoaded, 'opacity-100': isImageLoaded}"
                  @load="isImageLoaded = true"
                  @error="handleImageError"
                />
              </div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
               <div class="px-3 py-1.5 glass-strong text-xs font-semibold rounded-full shadow-glow animate-pulse border"
                   style="color: var(--color-accent); border-color: rgba(var(--accent-rgb), 0.3);">
                {{ $t('hero.freelance') }}
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Main Heading -->
        <div class="mb-6 space-y-2">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style="color: var(--color-text-primary);">
            {{ profileData.name }}
          </h1>
          
          <!-- Subheadline -->
          <div class="relative">
            <p class="text-lg md:text-xl font-normal"
               style="color: var(--color-text-secondary);">
              {{ profileData.title }}
            </p>
          </div>
        </div>

        <!-- Enhanced description -->
        <div class="mb-10">
          <p class="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
             style="color: var(--color-text-secondary);">
            {{ profileData.bio }}
          </p>
        </div>

        

        <!-- Enhanced Social Links -->
        <div class="flex justify-center items-center space-x-6 mb-8">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative social-icon-link"
            :aria-label="social.name"
            style="outline: none !important; -webkit-tap-highlight-color: transparent !important;"
          >
            <div class="w-14 h-14 rounded-xl glass hover:glass-strong transition-all duration-300 flex items-center justify-center hover:scale-110 border group-hover:shadow-glow"
                 style="color: var(--color-text-secondary); border-color: rgba(255, 255, 255, 0.1);">
              <i :class="social.icon + ' text-xl'"></i>
            </div>
            <span class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 px-2 py-1 rounded-md border"
                  style="color: var(--color-text-secondary); background-color: rgba(var(--color-secondary-rgb), 0.8); border-color: rgba(255, 255, 255, 0.1);">
              {{ social.name }}
            </span>
          </a>
        </div>

        <!-- Call to action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BaseButton as="router-link" to="/projects" variant="primary">
            <i class="fas fa-code mr-2"></i>
            <span>{{ $t('hero.cta_projects') }}</span>
          </BaseButton>
          <BaseButton as="router-link" to="/contact" variant="outline">
            <i class="fas fa-envelope mr-2"></i>
            <span>{{ $t('hero.cta_contact') }}</span>
          </BaseButton>
          <BaseButton as="router-link" to="/about" variant="ghost">
            <i class="fas fa-user mr-2"></i>
            <span>{{ $t('nav.about') }}</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '../atoms/Button.vue'
import { getProfileSettings, type ProfileData } from '../../services/profile'

const { locale } = useI18n()

const profileData = ref<ProfileData>({
  name: 'Rizky Haffiyan Roseno',
  title: 'Backend Engineer · Go · Microservices · Cloud',
  bio: 'Passionate about building high-performance APIs, cloud-native architectures, and scalable backend systems that power exceptional user experiences.',
  avatarUrl: '', // Start empty to show skeleton
  aboutSubtitle: '',
  aboutDescription1: '',
  aboutDescription2: '',
  aboutDescription3: '',
  coreExpertise: [],
  location: '',
  email: '',
  phone: ''
})

const isImageLoaded = ref(false)
const displayAvatarUrl = ref('')

const loadProfile = async () => {
  try {
    const data = await getProfileSettings(locale.value)
    if (data && data.avatarUrl) {
      if (displayAvatarUrl.value !== data.avatarUrl) {
        isImageLoaded.value = false // reset for new image load
      }
      profileData.value = data
      displayAvatarUrl.value = data.avatarUrl
    } else {
      // Keep existing data if fetch succeeded but has incomplete info
      profileData.value = { ...profileData.value, ...data }
      displayAvatarUrl.value = '/profile.jpg'
    }
  } catch (e) {
    console.error("Error loading profile:", e)
    displayAvatarUrl.value = '/profile.jpg'
  }
}

onMounted(loadProfile)

// Re-fetch when locale changes
watch(locale, loadProfile)

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rizkyhaffiyanr/',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/RihanoDev',
    icon: 'fab fa-github'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/rihano09',
    icon: 'fab fa-instagram'
  }
]

const handleImageError = () => {
  // Prevent infinite loop if the fallback itself somehow fails
  if (displayAvatarUrl.value === '/profile.jpg') {
    displayAvatarUrl.value = '/default-avatar.svg'
    isImageLoaded.value = true
    return
  }
  
  // Primary fallback as requested: if API image fetch fails, route to /profile.jpg
  displayAvatarUrl.value = '/profile.jpg'
}
</script>

<style scoped>
/* Using global glass effects - no local styles needed */

/* Force remove outline from social links */
.social-icon-link,
.social-icon-link:focus,
.social-icon-link:active,
.social-icon-link:focus-visible {
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
  box-shadow: none !important;
}

.social-icon-link:focus div {
  border-color: rgba(96, 165, 250, 0.5) !important;
}
</style>
