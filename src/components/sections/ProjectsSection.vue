<template>
  <section id="projects" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">{{ $t('projects.title') }}</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">{{ $t('projects.subtitle') }}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center items-center mb-10 gap-2 relative z-20">
          <button
            v-for="category in visibleCategories"
            :key="category"
            @click="setActiveCategory(category)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeCategory === category ? 'bg-gradient text-white shadow-lg' : 'glass text-secondary hover:text-primary border border-white/10'"
          >
            {{ category }}
          </button>

          <!-- Dropdown for More Categories -->
          <div v-if="hiddenCategories.length > 0" class="relative" ref="dropdownRef">
            <button
              @click="isDropdownOpen = !isDropdownOpen"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between gap-2 min-w-[140px]"
              :class="isHiddenCategoryActive ? 'bg-gradient text-white shadow-lg' : 'glass text-secondary hover:text-primary border border-white/10'"
            >
              <span class="truncate max-w-[120px]">{{ isHiddenCategoryActive ? activeCategory : 'More Categories' }}</span>
              <ChevronDown class="w-4 h-4 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': isDropdownOpen }" />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isDropdownOpen"
              class="absolute left-1/2 -translate-x-1/2 mt-2 w-56 p-2 z-[50] rounded-xl glass border border-white/10 shadow-2xl flex flex-col gap-1 max-h-60 overflow-y-auto"
            >
              <button
                v-for="category in hiddenCategories"
                :key="category"
                @click="
                  setActiveCategory(category);
                  isDropdownOpen = false;
                "
                class="px-4 py-2 w-full text-left rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeCategory === category ? 'bg-white/20 text-white' : 'text-secondary hover:bg-white/10 hover:text-primary'"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('projects.loading') }}</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="filteredProjects.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">
              {{ activeCategory === "All" ? $t('projects.empty') : $t('projects.empty_category', { category: activeCategory }) }}
            </p>
          </div>
          <!-- Projects List -->
          <template v-else>
            <ProjectCard v-for="project in paginatedProjects" :key="project.id" :project="project" />
          </template>
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
            <span>{{ $t('common.previous') }}</span>
          </button>

          <!-- Page Numbers -->
          <div class="flex space-x-2">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              :class="currentPage === page ? 'bg-gradient text-white shadow-lg' : 'glass text-secondary hover:text-primary border border-white/10'"
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
            <span>{{ $t('common.next') }}</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Pagination Info -->
        <div class="text-center mt-4 text-sm text-secondary">
          {{ $t('common.showing', { start: startItem, end: endItem, total: totalProjects, items: $t('common.projects') }) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { onClickOutside } from '@vueuse/core';
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-vue-next";
import ProjectCard from "../molecules/ProjectCard.vue";
import type { ProjectListItem, ProjectCategory } from "../../types/project";
import { fetchProjects, fetchProjectCategories } from "../../services/projects";

const activeCategory = ref("All");
const currentPage = ref(1);
const projectsPerPage = 6;

const categories = ref<string[]>(["All"]);
const categoryData = ref<ProjectCategory[]>([]);

const visibleCategories = computed(() => categories.value.slice(0, 4));
const hiddenCategories = computed(() => categories.value.slice(4));
const isDropdownOpen = ref(false);
const isHiddenCategoryActive = computed(() => hiddenCategories.value.includes(activeCategory.value));
const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
});

const projects = ref<ProjectListItem[]>([]);
const isLoading = ref(true);

// Load projects on component mount
onMounted(async () => {
  try {
    isLoading.value = true;
    // Load categories first
    categoryData.value = await fetchProjectCategories();
    categories.value = ["All", ...categoryData.value.map((cat) => cat.name)];

    // Then load projects
    projects.value = await fetchProjects();
  } catch (error) {
    
  } finally {
    isLoading.value = false;
  }
});

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return projects.value;
  }
  return projects.value.filter((project) => project.category === activeCategory.value);
});

const totalProjects = computed(() => filteredProjects.value.length);
const totalPages = computed(() => Math.ceil(totalProjects.value / projectsPerPage));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  return filteredProjects.value.slice(start, end);
});

const startItem = computed(() => {
  return totalProjects.value === 0 ? 0 : (currentPage.value - 1) * projectsPerPage + 1;
});

const endItem = computed(() => {
  const end = currentPage.value * projectsPerPage;
  return end > totalProjects.value ? totalProjects.value : end;
});

const visiblePages = computed(() => {
  const pages: number[] = [];
  const maxVisiblePages = 5;

  if (totalPages.value <= maxVisiblePages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    let start = Math.max(1, currentPage.value - 2);
    let end = Math.min(totalPages.value, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
});

const setActiveCategory = (category: string) => {
  activeCategory.value = category;
  currentPage.value = 1; // Reset to first page when changing category
};

const goToPage = async (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    await nextTick();
    // Scroll to top of projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
/* Using global glass classes - no local overrides needed */
</style>
