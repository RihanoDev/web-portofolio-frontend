<template>
  <section id="articles" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">{{ $t('articles.title') }}</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">{{ $t('articles.subtitle') }}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center items-center mb-10 gap-2 relative z-20">
          <button
            v-for="category in visibleCategories"
            :key="category"
            @click="
              activeCategory = category;
              currentPage = 1;
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeCategory === category ? 'bg-gradient text-white shadow-lg border border-transparent' : 'glass text-secondary hover:text-primary border border-white/10'"
          >
            {{ category }}
          </button>

          <!-- Dropdown for More Categories -->
          <div v-if="hiddenCategories.length > 0" class="relative" ref="dropdownRef">
            <button
              @click="isDropdownOpen = !isDropdownOpen"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between gap-2 min-w-[140px]"
              :class="isHiddenCategoryActive ? 'bg-gradient text-white shadow-lg border border-transparent' : 'glass text-secondary hover:text-primary border border-white/10'"
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
                  activeCategory = category;
                  currentPage = 1;
                  isDropdownOpen = false;
                "
                class="px-4 py-2 w-full text-left rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeCategory === category ? 'bg-accent/20 text-accent font-semibold' : 'text-secondary hover:bg-white/10 hover:text-primary'"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('articles.loading') }}</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="filteredArticles.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">
              {{ activeCategory === "All" ? $t('articles.empty') : $t('articles.empty_category', { category: activeCategory }) }}
            </p>
          </div>
          <!-- Articles List -->
          <template v-else>
            <ArticleCard v-for="article in paginatedArticles" :key="article.id" :article="article" />
          </template>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center space-x-4">
          <!-- Previous Button -->
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="flex items-center px-4 py-2 rounded-lg glass border border-white/10 text-secondary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:scale-105 space-x-2"
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
            class="flex items-center px-4 py-2 rounded-lg glass border border-white/10 text-secondary font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white hover:scale-105 space-x-2"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
          >
            <span>{{ $t('common.next') }}</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Pagination Info -->
        <div class="text-center mt-4 text-sm text-secondary">
          {{ $t('common.showing', { start: startItem, end: endItem, total: totalArticles, items: $t('common.articles') }) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { onClickOutside } from '@vueuse/core';
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-vue-next";
import ArticleCard from "../molecules/ArticleCard.vue";
import type { ArticleListItem, ArticleCategory } from "../../types/article";
import { fetchArticles, fetchArticleCategories } from "../../services/articles";

// Reactive states
const activeCategory = ref("All");
const articles = ref<ArticleListItem[]>([]);
const currentPage = ref(1);
const articlesPerPage = 6; // Jumlah artikel per halaman
const isLoading = ref(true);

// Categories
const categories = ref<string[]>(["All"]);
const categoryData = ref<ArticleCategory[]>([]);

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

// Load articles and categories on component mount
onMounted(async () => {
  try {
    isLoading.value = true;
    // Load categories first
    categoryData.value = await fetchArticleCategories();
    categories.value = ["All", ...categoryData.value.map((cat) => cat.name)];

    // Then load articles
    articles.value = await fetchArticles();
  } catch (error) {
    
  } finally {
    isLoading.value = false;
  }
});

// Computed properties for filtering and pagination
const filteredArticles = computed(() => {
  if (activeCategory.value === "All") {
    return articles.value;
  }
  return articles.value.filter((article) => article.categories.includes(activeCategory.value));
});

const totalArticles = computed(() => filteredArticles.value.length);

const totalPages = computed(() => Math.ceil(totalArticles.value / articlesPerPage));

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  return filteredArticles.value.slice(start, end);
});

const startItem = computed(() => {
  if (totalArticles.value === 0) return 0;
  return (currentPage.value - 1) * articlesPerPage + 1;
});

const endItem = computed(() => {
  const end = currentPage.value * articlesPerPage;
  return end > totalArticles.value ? totalArticles.value : end;
});

// Visible page numbers (show max 5 pages)
const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages = [];

  if (total <= 5) {
    // Show all pages if total is 5 or less
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Show 5 pages with current page in middle when possible
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);

    // Adjust if we're near the beginning
    if (current <= 3) {
      start = 1;
      end = 5;
    }

    // Adjust if we're near the end
    if (current >= total - 2) {
      start = total - 4;
      end = total;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
});

// Methods
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top of articles section
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
