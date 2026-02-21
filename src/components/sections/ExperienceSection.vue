<template>
  <section id="experience" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">{{ $t('experience.title') }}</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">{{ $t('experience.subtitle') }}</p>
        </div>

        <!-- Experiences Horizontal Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <!-- Loading State -->
          <div v-if="isLoading" class="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('experience.loading') }}</p>
          </div>
          <!-- Empty State -->
          <div v-else-if="experiences.length === 0" class="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
            <p class="text-secondary text-lg">{{ $t('experience.empty') }}</p>
          </div>
          <!-- Experience Cards -->
          <template v-else>
            <BaseCard v-for="exp in experiences" :key="exp.id" padding="lg" class="w-full max-w-md h-full flex flex-col">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0 flex items-center justify-center">
                  <i class="fas fa-briefcase text-accent"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {{ getLocalized(exp, 'title', locale) }}
                  </h3>
                  <p class="text-sm font-medium text-secondary">
                    {{ exp.company }} • {{ getLocalized(exp, 'location', locale) }}
                  </p>
                  <p class="text-xs text-accent font-semibold">{{ formatPeriod(exp.startDate, exp.endDate, exp.current) }}</p>
                </div>
              </div>
              <p class="text-sm text-secondary mb-4 flex-grow">{{ getLocalized(exp, 'description', locale) }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in exp.technologies" :key="t.id" class="px-3 py-1 text-xs bg-accent/5 border border-accent/10 text-accent rounded-full hover:bg-accent/10 transition-colors">
                  {{ t.name }}
                </span>
              </div>
            </BaseCard>
          </template>
        </div>

        <!-- Skills Summary -->
        <div class="mt-24 mb-8">
          <div class="text-center mb-16">
            <h3 class="text-3xl font-bold text-primary mb-4">{{ $t('experience.skills_title') }}</h3>
            <p class="text-secondary">{{ $t('experience.skills_subtitle') }}</p>
            <div class="w-16 h-1 bg-accent/30 mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="skill in skillCategories" :key="skill.category" class="glass-card p-6 rounded-xl text-center hover:border-accent/30 transition-all duration-300">
              <div class="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient flex items-center justify-center">
                <component :is="skill.icon" class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-bold text-primary mb-2">{{ skill.category }}</h4>
              <div class="flex flex-wrap gap-1 justify-center">
                <span v-for="tech in skill.technologies.slice(0, 3)" :key="tech" class="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { Server, Database, Cloud, Code } from "lucide-vue-next";
import BaseCard from "../molecules/Card.vue";
import type { Experience } from "../../types/experience";
import { fetchExperiences } from "../../services/experiences";
import { getLocalized } from "../../utils/i18n";

const { t, locale } = useI18n();

const experiences = ref<Experience[]>([]);
const isLoading = ref(true);

// Load experiences on component mount
onMounted(async () => {
  try {
    isLoading.value = true;
    experiences.value = await fetchExperiences();
  } catch (error) {
    console.error("Error loading experiences:", error);
  } finally {
    isLoading.value = false;
  }
});

// Format date period helper
const formatPeriod = (startDate: string, endDate: string | null | undefined, current: boolean): string => {
  const currentLocale = locale.value === 'id' ? 'id-ID' : 'en-US';
  
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString(currentLocale, { month: "short", year: "numeric" });
  };

  const start = formatDate(startDate);
  const end = current ? t('experience.present') : endDate ? formatDate(endDate) : t('experience.present');
  return `${start} - ${end}`;
};

const skillCategories = [
  {
    category: "Backend",
    icon: Server,
    technologies: ["Go", "Node.js", "Python", "Java", "C++"],
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch"],
  },
  {
    category: "DevOps",
    icon: Cloud,
    technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
  },
  {
    category: "Architecture",
    icon: Code,
    technologies: ["Microservices", "REST API", "gRPC", "GraphQL", "Event Sourcing"],
  },
];
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
