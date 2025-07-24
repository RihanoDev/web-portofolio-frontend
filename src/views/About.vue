<template>
  <div class="w-full min-h-screen bg-[#181C2A] py-20 px-4 flex flex-col items-center">
    <h1 class="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">About Me</h1>
    <div class="w-full max-w-4xl flex flex-col gap-12">
      <TechStack />
      <ExperienceSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import TechStack from '@/components/sections/TechStack.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
</script>
