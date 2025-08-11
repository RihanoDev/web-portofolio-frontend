<template>
  <div class="contact-info-item group">
    <a 
      v-if="href" 
      :href="href" 
      target="_blank" 
      rel="noopener noreferrer"
      class="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-surface/30"
    >
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <component :is="iconComponent" class="w-6 h-6 text-white" />
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-1">{{ title }}</h4>
        <p class="text-secondary">{{ content }}</p>
      </div>
    </a>
    
    <div 
      v-else
      class="flex items-start space-x-4 p-4 rounded-lg"
    >
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center">
          <component :is="iconComponent" class="w-6 h-6 text-white" />
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-1">{{ title }}</h4>
        <p class="text-secondary">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Mail, Phone, MapPin, Clock } from 'lucide-vue-next'

interface Props {
  icon: 'Mail' | 'Phone' | 'MapPin' | 'Clock'
  title: string
  content: string
  href?: string
}

const props = defineProps<Props>()

const iconComponents = {
  Mail,
  Phone,
  MapPin,
  Clock
}

const iconComponent = computed(() => iconComponents[props.icon])
</script>

<style scoped>
.contact-info-item {
  transition: all 0.3s ease;
}

.contact-info-item:hover {
  transform: translateY(-2px);
}
</style>
