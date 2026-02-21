<template>
  <section id="projects-home" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">Featured Projects</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">Showcase of my recent work in backend development, system design, and architecture</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">Loading projects...</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="featuredProjects.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">No projects available yet.</p>
          </div>
          <!-- Projects List -->
          <template v-else>
            <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
          </template>
        </div>

        <!-- View All Projects Button -->
        <div class="text-center">
          <router-link to="/projects" class="inline-flex items-center px-8 py-4 rounded-lg glass-btn border border-accent text-accent font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 space-x-2">
            <span>View All Projects</span>
            <ExternalLink class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchProjects } from "@/services/projects";
import type { ProjectListItem } from "@/types/project";
import ProjectCard from "@/components/molecules/ProjectCard.vue";
import { ExternalLink } from "lucide-vue-next";

const projects = ref<ProjectListItem[]>([]);

// Show only first 3 projects for home page
const featuredProjects = ref<ProjectListItem[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    projects.value = await fetchProjects();
    featuredProjects.value = projects.value.slice(0, 3); // Reduce to 3 items for better layout
  } catch (error) {
    console.error("Error loading projects for homepage:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* Using global glass classes - no local overrides needed */
</style>
