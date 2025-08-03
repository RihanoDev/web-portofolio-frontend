<template>
  <div class="loading-spinner" :class="sizeClass">
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
    <div class="spinner-dot"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'loading-sm'
    case 'lg': return 'loading-lg'
    case 'xl': return 'loading-xl'
    default: return 'loading-md'
  }
})
</script>

<style scoped>
.loading-spinner {
  position: relative;
  display: inline-block;
}

.loading-sm {
  width: 20px;
  height: 20px;
}

.loading-md {
  width: 40px;
  height: 40px;
}

.loading-lg {
  width: 60px;
  height: 60px;
}

.loading-xl {
  width: 80px;
  height: 80px;
}

.spinner-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

.spinner-ring:nth-child(1) {
  border-top-color: #3b82f6;
  animation-delay: 0s;
}

.spinner-ring:nth-child(2) {
  border-right-color: #8b5cf6;
  animation-delay: 0.5s;
}

.spinner-ring:nth-child(3) {
  border-bottom-color: #10b981;
  animation-delay: 1s;
}

.spinner-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25%;
  height: 25%;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(0.8);
  }
}

/* Dark mode adjustments */
.dark .spinner-ring:nth-child(1) {
  border-top-color: #60a5fa;
}

.dark .spinner-ring:nth-child(2) {
  border-right-color: #a78bfa;
}

.dark .spinner-ring:nth-child(3) {
  border-bottom-color: #34d399;
}

.dark .spinner-dot {
  background: linear-gradient(45deg, #60a5fa, #a78bfa, #34d399);
}
</style>
