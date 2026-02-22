<template>
  <section id="about-home" class="py-20 relative">
    <!-- Simple background pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 border border-primary-500 rounded-full animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-24 h-24 border border-primary-500 rounded-lg rotate-45 animate-bounce" style="animation-duration: 3s;"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Enhanced Header -->
        <div class="mb-12" data-aos="fade-up">
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full glass-strong mb-6 group hover:scale-110 transition-all duration-300">
            <i class="fas fa-user text-2xl transition-colors duration-300" 
               style="color: var(--color-accent);"></i>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4" 
              style="color: var(--color-text-primary);">
            {{ $t('about.title_part1') }} <span style="color: var(--color-accent);">{{ $t('about.title_part2') }}</span>
          </h2>
          <div class="w-24 h-1 rounded-full mx-auto mb-6" 
               style="background: var(--gradient-primary);"></div>
          <p class="text-xl max-w-3xl mx-auto leading-relaxed" 
             style="color: var(--color-text-secondary);">
            {{ profileData.aboutSubtitle || profileData.aboutDescription1 }}
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: var(--color-border);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">{{ yearsExperience }}+</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.years_exp') }}</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: var(--color-border);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">{{ projectsCompleted }}+</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.projects_done') }}</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: var(--color-border);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">∞</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.learning') }}</div>
          </div>
        </div>

        <!-- Enhanced Expertise Section -->
        <div class="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl font-bold mb-8" 
              style="color: var(--color-text-primary);">
            <span style="color: var(--color-accent);">{{ $t('about.core_expertise').split(' ')[0] }}</span> <span style="color: var(--color-accent);">{{ $t('about.core_expertise').split(' ')[1] }}</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-primary-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <i class="fas fa-server text-interactive-theme text-lg group-hover:text-interactive-primary transition-all duration-300"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_backend_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_backend_desc') }}</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 hover:scale-105"
                   style="border-color: var(--color-border);">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center"
                       style="background-color: rgba(var(--accent-rgb), 0.1);">
                    <i class="fab fa-golang text-lg" style="color: var(--color-accent);"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_go_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_go_desc') }}</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <i class="fas fa-database text-purple-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_db_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_db_desc') }}</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <i class="fas fa-network-wired text-green-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_arch_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_arch_desc') }}</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <i class="fas fa-cloud text-orange-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_cloud_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_cloud_desc') }}</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <i class="fas fa-cubes text-red-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">{{ $t('about.expertise_micro_title') }}</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">{{ $t('about.expertise_micro_desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div data-aos="fade-up" data-aos-delay="300">
          <p class="mb-6" style="color: var(--color-text-secondary);">
            {{ $t('about.cta_text') }}
          </p>
          <router-link 
            to="/about" 
            class="inline-flex items-center gap-2 px-8 py-4 glass border font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            style="border-color: rgba(var(--accent-rgb), 0.3); color: var(--color-accent);"
          >
            <span>{{ $t('about.cta_button') }}</span>
            <i class="fas fa-arrow-right flex-shrink-0"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { getProfileSettings, type ProfileData } from '../../services/profile'
import { fetchExperiences } from '../../services/experiences'
import { fetchPublishedProjects } from '../../services/projects'

const { locale } = useI18n()

const yearsExperience = ref<number>(0)
const projectsCompleted = ref<number>(0)

const profileData = ref<ProfileData>({
  name: 'Rizky Haffiyan Roseno',
  title: 'Backend Engineer · Go · Microservices · Cloud',
  bio: 'Passionate about building high-performance APIs, cloud-native architectures, and scalable backend systems that power exceptional user experiences.',
  avatarUrl: '/profile.jpg',
  aboutSubtitle: 'Backend engineer yang fokus pada hasil: reliabel, terukur, dan sederhana untuk dioperasikan.',
  aboutDescription1: 'Saya membangun backend yang cepat dan robust dengan Go, fokus pada microservices, transaksi konsisten, dan API ber-throughput tinggi.',
  aboutDescription2: 'Beberapa hasil: memangkas p95 response hingga 40% lewat indexing dan caching, meningkatkan uptime jadi 99.9% dengan observability dan circuit breaker, serta menurunkan waktu rilis lewat CI/CD yang rapih.',
  aboutDescription3: 'Prinsip saya: kirim bernilai bisnis, ukur dengan metrik, dan jaga agar sistem mudah dirawat.',
  coreExpertise: [],
  location: 'Jakarta, Indonesia',
  email: 'rihanodev@gmail.com',
  phone: '+62 812-3456-7890'
})

const loadProfile = async () => {
  try {
    profileData.value = await getProfileSettings(locale.value)
  } catch (e) {
    
  }
}

onMounted(async () => {
  await loadProfile()

  try {
    const experiences = await fetchExperiences()
    if (experiences && experiences.length > 0) {
      const earliestYear = Math.min(...experiences.map(exp => new Date(exp.startDate).getFullYear()))
      const currentYear = new Date().getFullYear()
      yearsExperience.value = currentYear - earliestYear
    }
  } catch(e) {  }

  try {
    const projects = await fetchPublishedProjects()
    projectsCompleted.value = projects.length
  } catch(e) {  }
})

watch(locale, loadProfile)
</script>

<style scoped>
.glass-subtle {
  background: rgba(var(--color-secondary-rgb), 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.glass-strong {
  background: rgba(var(--color-secondary-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--color-border);
}
</style>
