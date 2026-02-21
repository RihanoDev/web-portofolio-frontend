<template>
  <section id="experience-home" class="py-16 relative overflow-visible">
    <div class="relative z-10">
      <div class="flex flex-col items-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">Experience</h2>
        <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
      </div>
      <div class="max-w-6xl mx-auto overflow-visible px-4" style="padding: 16px 0">
        <!-- Desktop/Tablet Grid Layout -->
        <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">Loading experiences...</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="experiences.length === 0" class="col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">No experience data available yet.</p>
          </div>
          <!-- Experience Cards -->
          <template v-else>
            <BaseCard v-for="(exp, i) in experiences" :key="i" padding="lg" class="hover:scale-105 transition-transform duration-300 hover:z-10 relative">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10">
                  <i class="fas fa-briefcase text-accent text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-lg" style="color: var(--color-text-primary)">{{ exp.title }}</h3>
                  <p class="text-sm" style="color: var(--color-text-secondary)">{{ exp.company }}</p>
                </div>
              </div>
              <p class="text-sm text-accent font-medium">{{ formatPeriod(exp) }}</p>
            </BaseCard>
          </template>
        </div>

        <!-- Mobile Horizontal Scroll -->
        <div class="md:hidden flex gap-4 overflow-x-auto pb-2 snap-x" style="padding: 8px 0">
          <!-- Loading State -->
          <div v-if="isLoading" class="w-full py-16 text-center">
            <p class="text-secondary text-lg">Loading experiences...</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="experiences.length === 0" class="w-full py-16 text-center">
            <p class="text-secondary text-lg">No experience data available yet.</p>
          </div>
          <!-- Experience Cards -->
          <template v-else>
            <BaseCard v-for="(exp, i) in experiences" :key="i" padding="lg" class="min-w-[280px] snap-start hover:scale-105 transition-transform duration-300 hover:z-10 relative">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10">
                  <i class="fas fa-briefcase text-accent"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold" style="color: var(--color-text-primary)">{{ exp.title }}</h3>
                  <p class="text-sm" style="color: var(--color-text-secondary)">{{ exp.company }}</p>
                </div>
              </div>
              <p class="text-xs text-accent">{{ formatPeriod(exp) }}</p>
            </BaseCard>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseCard from "../molecules/Card.vue";
import { fetchExperiences } from "../../services/experiences";
import type { Experience } from "../../types/experience";

const experiences = ref<Experience[]>([]);
const isLoading = ref(true);

// Format period from startDate, endDate, and current
const formatPeriod = (experience: Experience): string => {
  const startDate = new Date(experience.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  if (experience.current) {
    return `${startDate} - Present`;
  }

  if (experience.endDate) {
    const endDate = new Date(experience.endDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
    return `${startDate} - ${endDate}`;
  }

  return startDate;
};

// Load experiences on component mount
onMounted(async () => {
  try {
    isLoading.value = true;
    const allExperiences = await fetchExperiences();
    // Take only first 3 experiences for home page
    experiences.value = allExperiences.slice(0, 3);
  } catch (error) {
    console.error("Error loading experiences for homepage:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.glass-card {
  background: rgba(var(--surface-rgb), 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.2s;
}

.glass-card:hover {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
}

/* Mobile scroll improvements */
@media (max-width: 767px) {
  .min-w-\[280px\] {
    min-width: 280px;
  }

  /* Hide scrollbar but keep functionality */
  .overflow-x-auto::-webkit-scrollbar {
    height: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: rgba(var(--accent-rgb), 0.5);
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--accent-rgb), 0.7);
  }
}

/* Tablet optimizations */
@media (min-width: 768px) and (max-width: 1023px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  /* Ensure cards have equal height */
  .md\:grid > * {
    height: 100%;
  }
}

/* Large tablet and small desktop */
@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* Ensure cards have equal height */
  .lg\:grid-cols-3 > * {
    height: 100%;
  }
}

/* Smooth transitions for responsive changes */
.transition-transform {
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

/* Better hover effects for larger screens */
@media (min-width: 768px) {
  .hover\:scale-105:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
}
</style>
