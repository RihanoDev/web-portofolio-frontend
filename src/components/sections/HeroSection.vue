<template>
  <section class="w-full min-h-screen flex items-center bg-[#181C2A] relative overflow-hidden">
    <div class="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16">
      <!-- Kiri: Teks dan tombol -->
      <div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          <span class="block text-white">Hello,</span>
          <span class="block text-orange-500 mt-2">I'm Rizky Haffiyan Roseno</span>
          <span class="block text-white mt-2">@RihanoDev</span>
          <span class="block text-white mt-2">An Backend Developer</span>
        </h1>
        <p class="mt-6 text-[#B0B3C7] max-w-md">
          Let's embark on a visual adventure together, where every pixel tells a story of thoughtful design.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button class="flex items-center px-7 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg shadow hover:bg-orange-600 transition">
            Discover More
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16.862 7.487l-7.375 7.375M15.5 15.5h-5v-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="flex items-center gap-3 mt-8">
          <span class="self-center text-[#B0B3C7] text-sm">Follow me</span>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] shadow hover:bg-orange-500 text-white transition-all duration-200" aria-label="LinkedIn"><i class="fab fa-linkedin-in text-lg"></i></a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] shadow hover:bg-orange-500 text-white transition-all duration-200" aria-label="Behance"><i class="fab fa-behance text-lg"></i></a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#23263A] shadow hover:bg-orange-500 text-white transition-all duration-200" aria-label="Dribbble"><i class="fab fa-dribbble text-lg"></i></a>
        </div>
      </div>
      <!-- Kanan: Foto profil dan statistik -->
      <div class="flex-1 flex flex-col items-center relative">
        <!-- Lingkaran oranye -->
        <div class="relative flex items-center justify-center">
          <div class="absolute w-72 h-72 rounded-full bg-orange-500 opacity-30 animate-pulse"></div>
          <div class="absolute w-60 h-60 rounded-full bg-orange-500 opacity-60"></div>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" class="relative w-56 h-56 rounded-full object-cover border-8 border-[#181C2A] shadow-xl z-10" />
        </div>
        <!-- Statistik -->
        <div class="absolute left-0 top-10 bg-[#23263A] rounded-xl px-5 py-3 shadow text-center text-white text-lg font-semibold flex flex-col items-center" style="min-width:90px">
          <span class="text-2xl font-bold">45+</span>
          <span class="text-xs text-[#B0B3C7]">Clients work</span>
        </div>
        <div class="absolute right-0 top-0 bg-[#23263A] rounded-xl px-5 py-3 shadow text-center text-white text-lg font-semibold flex flex-col items-center" style="min-width:90px">
          <span class="text-2xl font-bold">320</span>
          <span class="text-xs text-[#B0B3C7]">Project done</span>
        </div>
        <div class="absolute right-0 bottom-10 bg-[#23263A] rounded-xl px-5 py-3 shadow text-center text-white text-lg font-semibold flex flex-col items-center" style="min-width:110px">
          <div class="flex items-center justify-center mb-1">
            <span class="text-xl font-bold mr-1">5 years</span>
            <span class="flex text-yellow-400 text-base ml-1">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </span>
          </div>
          <span class="text-xs text-[#B0B3C7]">of experience</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Tidak perlu script interaktif untuk desain statis ini
</script>

<style scoped>
/* No specific styles for the new static design, as it's a complete redesign */
</style>
