<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#181C2A] border-b border-[#23263A]">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo bulat dan nama -->
        <router-link to="/" class="flex items-center ml-2">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-2xl shadow-lg">R</div>
          <span class="ml-3 text-white text-xl font-bold">RihanoDev</span>
        </router-link>
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-2">
          <router-link to="/about" class="px-4 py-2 text-white hover:text-orange-400 transition font-medium">About</router-link>
          <router-link to="/service" class="px-4 py-2 text-white hover:text-orange-400 transition font-medium">Service</router-link>
          <router-link to="/work" class="px-4 py-2 text-white hover:text-orange-400 transition font-medium">Work</router-link>
          <router-link to="/resume" class="ml-4 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Resume</router-link>
        </div>
        <!-- Mobile Menu Button -->
        <button class="lg:hidden p-3 rounded-full hover:bg-orange-500/20 transition" @click="toggleMobileMenu" aria-label="Toggle menu">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden mt-2 bg-[#181C2A] rounded-xl shadow p-4">
        <router-link to="/about" class="block px-4 py-3 text-white hover:text-orange-400 transition font-medium" @click="closeMobileMenu">About</router-link>
        <router-link to="/service" class="block px-4 py-3 text-white hover:text-orange-400 transition font-medium" @click="closeMobileMenu">Service</router-link>
        <router-link to="/work" class="block px-4 py-3 text-white hover:text-orange-400 transition font-medium" @click="closeMobileMenu">Work</router-link>
        <router-link to="/resume" class="block mt-2 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition text-center" @click="closeMobileMenu">Resume</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
const toggleMobileMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMobileMenu = () => { isMenuOpen.value = false }
</script>

<style scoped>
/* Enhanced nav link styling */
.nav-link {
  @apply relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out;
  color: var(--color-text-secondary);
}

.nav-link:hover {
  color: var(--color-text-primary);
  transform: translateY(-1px);
}

.nav-link.active {
  color: var(--color-primary);
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 60%;
}
</style>