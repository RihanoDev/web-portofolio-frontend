<template>
  <div class="home">
    <HeroSection />
    <TechStack />
    <ProjectsSection />
    <BlogSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from '@/components/sections/HeroSection.vue'
import TechStack from '@/components/sections/TechStack.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50
  })
})
</script>

<style lang="scss">
.home {
  overflow-x: hidden; // Prevents horizontal scrollbar during animations
}
</style>
