<template>
  <span class="inline-flex items-center rounded-full border text-xs font-medium"
        :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: 'accent' | 'blue' | 'green' | 'yellow' | 'gray'
  soft?: boolean
  pill?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'accent',
  soft: true,
  pill: true
})

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
  blue:   { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  green:  { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
  gray:   { bg: 'bg-white/10', text: 'text-secondary', border: 'border-white/10' }
}

const badgeClass = computed(() => {
  const shape = props.pill ? 'px-3 py-1' : 'px-2 py-0.5'
  const c = colorMap[props.color]
  return [shape, c.bg, c.text, c.border].join(' ')
})
</script>


