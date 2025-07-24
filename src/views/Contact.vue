<template>
  <div class="w-full min-h-screen bg-[#181C2A] py-20 px-4 flex flex-col items-center">
    <h1 class="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">Contact</h1>
    <div class="w-full max-w-3xl">
      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
