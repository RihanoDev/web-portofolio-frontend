<template>
  <section id="projects-home" class="py-20 relative">
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

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- View All Projects Button -->
        <div class="text-center">
          <router-link 
            to="/projects"
            class="inline-flex items-center px-8 py-4 rounded-lg glass-btn border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2"
          >
            <span>View All Projects</span>
            <ExternalLink class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects } from '@/data'
import type { Project } from '@/types'
import { ProjectCard } from '@/components'
import { ExternalLink } from 'lucide-vue-next'

const projects = ref<Project[]>([])

// Show only first 6 projects for home page
const featuredProjects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await getProjects()
  featuredProjects.value = projects.value.slice(0, 6)
})
</script>

<style scoped>
/* Using global glass classes - no local overrides needed */
</style>
