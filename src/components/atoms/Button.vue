<template>
  <component
    :is="as"
    class="inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none"
    :class="computedClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button'
})

const computedClasses = computed(() => {
  const base = 'font-semibold disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none relative overflow-hidden'
  const variants: Record<string, string> = {
    primary: 'bg-accent text-white hover:bg-accent/90 hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'glass text-primary border border-white/10 hover:border-accent/50 hover:bg-accent/10',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-primary hover:text-accent hover:bg-accent/10'
  }
  const sizes: Record<string, string> = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm md:text-base px-5 py-3',
    lg: 'text-base md:text-lg px-6 py-4'
  }
  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>