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
import { ref, computed, onMounted } from 'vue'
import { ExternalLink } from 'lucide-vue-next'
import ProjectCard from '../molecules/ProjectCard.vue'
import type { Project } from '../../types/project'
import { getProjects } from '../../data/projects'

const activeCategory = ref('All')
const categories = ['All', 'Backend', 'Full Stack', 'Microservices', 'API']
const projects = ref<Project[]>([])
const loading = ref(true)

// Load projects on component mount
onMounted(async () => {
  try {
    projects.value = await getProjects()
  } catch (error) {
    console.error('Error loading projects:', error)
  } finally {
    loading.value = false
  }
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeCategory.value)
})
</script>


