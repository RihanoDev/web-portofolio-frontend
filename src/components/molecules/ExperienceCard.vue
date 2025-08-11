<template>
  <div 
    class="relative"
    :class="[
      'md:w-1/2',
      isLeft ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:ml-auto',
      'ml-16 md:ml-auto'
    ]"
  >
    <!-- Timeline Dot -->
    <div class="absolute w-6 h-6 bg-accent rounded-full -left-11 md:-left-3 top-6 z-10 shadow-lg">
      <div class="absolute inset-1 bg-background rounded-full"></div>
    </div>

    <!-- Experience Card -->
    <div 
      class="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/5"
      :class="{ 'md:text-right': !isLeft }"
    >
      <!-- Period Badge -->
      <div class="mb-4">
        <span class="inline-block px-4 py-2 bg-gradient text-white text-sm font-semibold rounded-full">
          {{ experience.period }}
        </span>
      </div>

      <!-- Company & Logo -->
      <div class="flex items-center mb-4" :class="{ 'md:justify-end': !isLeft }">
        <div v-if="experience.logo && isLeft" class="w-12 h-12 mr-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
          <img 
            :src="experience.logo" 
            :alt="experience.company"
            class="w-8 h-8 object-contain"
            @error="handleImageError"
          />
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-primary mb-1">{{ experience.title }}</h3>
          <div class="flex items-center gap-2" :class="{ 'md:justify-end': !isLeft }">
            <h4 class="text-accent font-semibold">{{ experience.company }}</h4>
            <span class="text-xs px-2 py-1 rounded-full" :class="getTypeClass(experience.type)">
              {{ getTypeText(experience.type) }}
            </span>
          </div>
          <p class="text-sm text-secondary">{{ experience.location }}</p>
        </div>

        <div v-if="experience.logo && !isLeft" class="w-12 h-12 ml-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
          <img 
            :src="experience.logo" 
            :alt="experience.company"
            class="w-8 h-8 object-contain"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- Description -->
      <p class="text-secondary mb-6 leading-relaxed">
        {{ experience.description }}
      </p>

      <!-- Key Achievements -->
      <div class="mb-6">
        <h5 class="font-semibold text-primary mb-3 flex items-center gap-2" :class="{ 'md:justify-end': !isLeft }">
          <Trophy class="w-4 h-4 text-accent" />
          Key Achievements
        </h5>
        <ul class="space-y-2" :class="{ 'md:text-right': !isLeft }">
          <li 
            v-for="achievement in experience.achievements.slice(0, 3)" 
            :key="achievement"
            class="flex items-start gap-2 text-sm text-secondary"
            :class="{ 'md:flex-row-reverse': !isLeft }"
          >
            <CheckCircle class="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <span>{{ achievement }}</span>
          </li>
          
          <!-- Show more achievements on hover -->
          <div v-if="experience.achievements.length > 3" class="overflow-hidden">
            <div class="max-h-0 group-hover:max-h-40 transition-all duration-500 space-y-2">
              <li 
                v-for="achievement in experience.achievements.slice(3)" 
                :key="achievement"
                class="flex items-start gap-2 text-sm text-secondary opacity-70"
                :class="{ 'md:flex-row-reverse': !isLeft }"
              >
                <CheckCircle class="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{{ achievement }}</span>
              </li>
            </div>
          </div>
        </ul>
      </div>

      <!-- Technologies -->
      <div>
        <h5 class="font-semibold text-primary mb-3 flex items-center gap-2" :class="{ 'md:justify-end': !isLeft }">
          <Code class="w-4 h-4 text-accent" />
          Technologies
        </h5>
        <div class="flex flex-wrap gap-2" :class="{ 'md:justify-end': !isLeft }">
          <span 
            v-for="tech in experience.technologies" 
            :key="tech"
            class="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trophy, CheckCircle, Code } from 'lucide-vue-next'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: 'full-time' | 'freelance' | 'contract'
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

interface Props {
  experience: Experience
  index: number
  isLeft: boolean
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/default-company.svg'
}

const getTypeClass = (type: string) => {
  switch (type) {
    case 'full-time':
      return 'bg-green-500/20 text-green-400'
    case 'freelance':
      return 'bg-blue-500/20 text-blue-400'
    case 'contract':
      return 'bg-yellow-500/20 text-yellow-400'
    default:
      return 'bg-gray-500/20 text-gray-400'
  }
}

const getTypeText = (type: string) => {
  switch (type) {
    case 'full-time':
      return 'Full-time'
    case 'freelance':
      return 'Freelance'
    case 'contract':
      return 'Contract'
    default:
      return 'Unknown'
  }
}
</script>

<style scoped>
/* Local styles removed - using global glass-card class */
</style>
