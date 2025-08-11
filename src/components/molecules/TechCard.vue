<template>
  <div 
    class="tech-card group cursor-pointer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <!-- Icon -->
      <div class="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center tech-icon-bg">
        <i :class="icon + ' text-3xl'" :style="{ color: color }"></i>
      </div>
      
      <!-- Name -->
      <h4 class="font-semibold text-primary text-center group-hover:text-accent transition-colors duration-300">
        {{ name }}
      </h4>
      
      <!-- Description on hover -->
      <div 
        class="mt-2 text-xs text-secondary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        v-if="description"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  icon: string
  color: string
  description?: string
}

defineProps<Props>()

const isHovered = ref(false)
</script>

<style scoped>
/* Using global glass-card - only tech-specific styles here */
.tech-icon-bg {
  background: rgba(26, 30, 46, 0.3);
  transition: all 0.3s ease;
}

.tech-card:hover .tech-icon-bg {
  background: rgba(255, 107, 0, 0.1);
}
</style>
