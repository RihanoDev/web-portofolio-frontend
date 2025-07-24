<template>
  <footer class="bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Logo & Description -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Portfolio
          </h3>
          <p class="text-gray-600 mb-4">
            Frontend Developer & UI/UX Designer creating modern and responsive web applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center">
          <h4 class="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <div class="space-y-2">
            <router-link
              v-for="item in quickLinks"
              :key="item.path"
              :to="item.path"
              class="block text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Social Media -->
        <div class="text-center md:text-right">
          <h4 class="font-semibold text-gray-900 mb-4">Connect With Me</h4>
          <div class="flex justify-center md:justify-end gap-2">
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] hover:bg-orange-500 text-white transition-all duration-200" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] hover:bg-orange-500 text-white transition-all duration-200" aria-label="Behance"><i class="fab fa-behance"></i></a>
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] hover:bg-orange-500 text-white transition-all duration-200" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 my-8"></div>

      <!-- Copyright -->
      <div class="text-center text-gray-600 text-sm">
        <p>© {{ new Date().getFullYear() }} Rizky Haffiyan Roseno. All rights reserved.</p>
        <p class="mt-2">
          Made with <span class="text-red-500">❤</span> using Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'fab fa-twitter'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: 'fab fa-instagram'
  }
]
</script>
