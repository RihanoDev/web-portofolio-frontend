<template>
  <section id="articles" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">Latest Articles</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">Sharing knowledge and insights about backend development, system design, and technology trends</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center mb-10 gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="
              activeCategory = category;
              currentPage = 1;
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeCategory === category ? 'bg-gradient text-white shadow-lg' : 'glass text-secondary hover:text-primary border border-white/10'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">Loading articles...</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="filteredArticles.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">
              {{ activeCategory === "All" ? "No articles available yet." : `No articles found in "${activeCategory}" category.` }}
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
            <span>Previous</span>
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
            <span>Next</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Pagination Info -->
        <div class="text-center mt-4 text-sm text-secondary">Showing {{ startItem }} to {{ endItem }} of {{ totalArticles }} articles</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
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
    console.error("Error loading articles data:", error);
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
