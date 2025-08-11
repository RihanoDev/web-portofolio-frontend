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
            @click="setActiveCategory(category)"
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
            v-for="project in paginatedProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center space-x-4 mt-12">
          <!-- Previous Button -->
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="flex items-center px-4 py-2 rounded-lg glass-btn border border-white/10 text-secondary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:scale-105 space-x-2"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          >
            <ChevronLeft class="w-4 h-4" />
            <span>Previous</span>
          </button>

          <!-- Page Numbers -->
          <div class="flex space-x-2">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              :class="currentPage === page 
                ? 'bg-gradient text-white shadow-lg' 
                : 'glass text-secondary hover:text-primary border border-white/10'"
            >
              {{ page }}
            </button>
          </div>

          <!-- Next Button -->
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="flex items-center px-4 py-2 rounded-lg glass-btn border border-white/10 text-secondary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:scale-105 space-x-2"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
          >
            <span>Next</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Pagination Info -->
        <div class="text-center mt-4 text-sm text-secondary">
          Showing {{ startItem }} to {{ endItem }} of {{ totalProjects }} projects
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import ProjectCard from '../molecules/ProjectCard.vue'
import type { Project } from '../../types/project'
import { getProjects } from '../../data/projects'

const activeCategory = ref('All')
const currentPage = ref(1)
const projectsPerPage = 6

const categories = ['All', 'Backend', 'Microservices', 'API', 'Full Stack', 'DevOps']

const projects = ref<Project[]>([])

// Load projects on component mount
onMounted(async () => {
  projects.value = await getProjects()
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeCategory.value)
})

const totalProjects = computed(() => filteredProjects.value.length)
const totalPages = computed(() => Math.ceil(totalProjects.value / projectsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage
  const end = start + projectsPerPage
  return filteredProjects.value.slice(start, end)
})

const startItem = computed(() => {
  return totalProjects.value === 0 ? 0 : (currentPage.value - 1) * projectsPerPage + 1
})

const endItem = computed(() => {
  const end = currentPage.value * projectsPerPage
  return end > totalProjects.value ? totalProjects.value : end
})

const visiblePages = computed(() => {
  const pages: number[] = []
  const maxVisiblePages = 5
  
  if (totalPages.value <= maxVisiblePages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    let start = Math.max(1, currentPage.value - 2)
    let end = Math.min(totalPages.value, start + maxVisiblePages - 1)
    
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1)
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }
  
  return pages
})

const setActiveCategory = (category: string) => {
  activeCategory.value = category
  currentPage.value = 1 // Reset to first page when changing category
}

const goToPage = async (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    await nextTick()
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
/* Using global glass classes - no local overrides needed */
</style>
