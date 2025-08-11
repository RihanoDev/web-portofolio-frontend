<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="skill-card group relative overflow-hidden rounded-xl p-6 glass-card hover:border-accent/30 transition-all duration-300"
    >
      <!-- Background Icon -->
      <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div class="text-4xl" v-html="skill.icon"></div>
      </div>
      
      <!-- Skill Content -->
      <div class="relative z-10">
        <div class="flex items-center space-x-3 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br p-2 text-white shadow-lg"
               :style="{ background: skill.color }">
            <div class="w-full h-full flex items-center justify-center text-lg" v-html="skill.icon"></div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ skill.category }}</p>
          </div>
        </div>
        
        <!-- Skill Level -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
            <span class="text-sm font-bold text-gray-900 dark:text-white">{{ skill.level }}%</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div 
              class="h-2.5 rounded-full transition-all duration-1000 ease-out"
              :style="{ 
                width: `${skill.level}%`,
                background: skill.color
              }"
            ></div>
          </div>
        </div>
        
        <!-- Experience -->
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center space-x-2">
            <Calendar class="w-4 h-4" />
            <span>{{ skill.experience }} experience</span>
          </div>
        </div>
        
        <!-- Projects Count -->
        <div class="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center space-x-2">
            <Briefcase class="w-4 h-4" />
            <span>{{ skill.projects }} projects</span>
          </div>
        </div>
      </div>
      
      <!-- Hover Effect -->
      <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Briefcase } from 'lucide-vue-next'

interface Skill {
  name: string
  category: string
  level: number
  experience: string
  projects: number
  icon: string
  color: string
}

const skills: Skill[] = [
  {
    name: 'Golang',
    category: 'Backend Language',
    level: 90,
    experience: '3+ years',
    projects: 15,
    icon: '🐹',
    color: 'linear-gradient(135deg, #00ADD8, #007A9A)'
  },
  {
    name: 'Node.js',
    category: 'Runtime Environment',
    level: 85,
    experience: '3+ years',
    projects: 12,
    icon: '🟢',
    color: 'linear-gradient(135deg, #339933, #66BB6A)'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 88,
    experience: '3+ years',
    projects: 20,
    icon: '🐘',
    color: 'linear-gradient(135deg, #336791, #4A90E2)'
  },
  {
    name: 'Docker',
    category: 'Containerization',
    level: 82,
    experience: '2+ years',
    projects: 18,
    icon: '🐳',
    color: 'linear-gradient(135deg, #2496ED, #0db7ed)'
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    level: 75,
    experience: '2+ years',
    projects: 8,
    icon: '☸️',
    color: 'linear-gradient(135deg, #326CE5, #7B68EE)'
  },
  {
    name: 'Redis',
    category: 'Caching',
    level: 80,
    experience: '2+ years',
    projects: 10,
    icon: '🗄️',
    color: 'linear-gradient(135deg, #DC382D, #FF6B6B)'
  },
  {
    name: 'Vue.js',
    category: 'Frontend Framework',
    level: 78,
    experience: '2+ years',
    projects: 8,
    icon: '💚',
    color: 'linear-gradient(135deg, #4FC08D, #42B883)'
  },
  {
    name: 'TypeScript',
    category: 'Programming Language',
    level: 83,
    experience: '2+ years',
    projects: 14,
    icon: '🟦',
    color: 'linear-gradient(135deg, #3178C6, #007ACC)'
  },
  {
    name: 'REST API',
    category: 'Web Services',
    level: 92,
    experience: '3+ years',
    projects: 25,
    icon: '🔌',
    color: 'linear-gradient(135deg, #FF9500, #FFB84D)'
  }
]
</script>

<style scoped>
.skill-card {
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.dark .skill-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Animation for skill bars */
.skill-card:hover .h-2\.5 {
  animation: skillFill 1.5s ease-out forwards;
}

@keyframes skillFill {
  0% {
    width: 0%;
  }
  100% {
    width: var(--skill-width);
  }
}
</style>
