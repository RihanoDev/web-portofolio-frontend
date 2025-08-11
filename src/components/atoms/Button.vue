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
    primary: 'text-white hover:scale-105 shadow-lg hover:shadow-xl btn-primary-custom',
    secondary: 'glass border hover:scale-105 btn-secondary-custom',
    outline: 'border hover:scale-105 btn-outline-custom',
    ghost: 'hover:scale-105 btn-ghost-custom'
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
/* Custom button styles using CSS custom properties */
.btn-primary-custom {
  background-color: var(--color-accent);
  color: white;
}

.btn-primary-custom:hover {
  background-color: var(--color-accent);
  filter: brightness(0.9);
}

.btn-secondary-custom {
  color: var(--color-text-primary);
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-secondary-custom:hover {
  border-color: rgba(var(--accent-rgb), 0.5);
  background-color: rgba(var(--accent-rgb), 0.1);
}

.btn-outline-custom {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn-outline-custom:hover {
  background-color: var(--color-accent);
  color: white;
}

.btn-ghost-custom {
  color: var(--color-text-primary);
}

.btn-ghost-custom:hover {
  color: var(--color-accent);
  background-color: rgba(var(--accent-rgb), 0.1);
}
</style>