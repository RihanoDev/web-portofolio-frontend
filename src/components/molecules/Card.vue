<template>
  <div class="glass-card rounded-xl" :class="paddingClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md'
})

const paddingClass = computed(() => {
  switch (props.padding) {
    case 'none':
      return ''
    case 'sm':
      return 'p-3'
    case 'lg':
      return 'p-8'
    default:
      return 'p-6'
  }
})
</script>


