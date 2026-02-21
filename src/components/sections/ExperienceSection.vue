<template>
  <section id="experience" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Experience</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">My professional journey in backend development and software engineering</p>
        </div>

        <!-- Skills Summary -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-primary mb-4">Key Skills & Expertise</h3>
            <p class="text-secondary">Technologies and methodologies I've mastered throughout my career</p>
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

        <!-- Experiences Horizontal Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard v-for="exp in experiences" :key="exp.id" padding="lg">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <i class="fas fa-briefcase text-accent"></i>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary">{{ exp.title }}</h3>
                <p class="text-sm text-secondary">{{ exp.company }} • {{ exp.location }}</p>
                <p class="text-xs text-accent">{{ formatPeriod(exp.startDate, exp.endDate, exp.current) }}</p>
              </div>
            </div>
            <p class="text-sm text-secondary mb-3">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span v-for="t in exp.technologies" :key="t.id" class="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                {{ t.name }}
              </span>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Server, Database, Cloud, Code } from "lucide-vue-next";
import BaseCard from "../molecules/Card.vue";
import type { Experience } from "../../types/experience";
import { getExperiences } from "../../data/experiences";

const experiences = ref<Experience[]>([]);

// Load experiences on component mount
onMounted(async () => {
  experiences.value = await getExperiences();
});

// Format date period helper
const formatPeriod = (startDate: string, endDate: string | null | undefined, current: boolean): string => {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const start = formatDate(startDate);
  const end = current ? "Present" : endDate ? formatDate(endDate) : "Present";
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
