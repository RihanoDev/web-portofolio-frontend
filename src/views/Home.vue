<template>
  <div class="home">
    <HeroSection />
    <ExperienceSectionHome />
    <TechStackSectionHome />
    <ProjectsSectionHome />
    <ArticlesSectionHome />
    <ContactHome />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from '@/components/sections/HeroSection.vue'
import ExperienceSectionHome from '@/components/sections/ExperienceSectionHome.vue'
import TechStackSectionHome from '@/components/sections/TechStackSectionHome.vue'
import ProjectsSectionHome from '@/components/sections/ProjectsSectionHome.vue'
import ArticlesSectionHome from '@/components/sections/ArticlesSectionHome.vue'
import ContactHome from '@/components/sections/ContactHome.vue'

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
