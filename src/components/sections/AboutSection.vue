<template>
  <section id="about" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-text-primary);">About Me</h2>
          <div class="w-24 h-1 mx-auto mb-6 rounded-full" style="background: var(--gradient-primary);"></div>
          <p class="text-xl max-w-3xl mx-auto" style="color: var(--color-text-secondary);">
            {{ profileData.aboutSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-bold" style="color: var(--color-text-primary);">Hi, I'm {{ profileData.name }}</h3>
              
              <div class="space-y-4 leading-relaxed" style="color: var(--color-text-secondary);">
                <p style="color: var(--color-text-primary);" v-if="profileData.aboutDescription1">
                  {{ profileData.aboutDescription1 }}
                </p>
                <p style="color: var(--color-text-primary);" v-if="profileData.aboutDescription2">
                  {{ profileData.aboutDescription2 }}
                </p>
                <p style="color: var(--color-text-primary);" v-if="profileData.aboutDescription3">
                  {{ profileData.aboutDescription3 }}
                </p>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="glass-subtle p-6 rounded-lg text-center border transition-all duration-300"
                   style="border-color: rgba(255, 255, 255, 0.1);">
                <div class="text-3xl font-bold mb-2" style="color: var(--color-accent);">{{ yearsExperience }}+</div>
                <div class="text-sm" style="color: var(--color-text-secondary);">Years Experience</div>
              </div>
              <div class="glass-subtle p-6 rounded-lg text-center border transition-all duration-300"
                   style="border-color: rgba(255, 255, 255, 0.1);">
                <div class="text-3xl font-bold mb-2" style="color: var(--color-accent);">{{ projectsCompleted }}+</div>
                <div class="text-sm" style="color: var(--color-text-secondary);">Projects Completed</div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-secondary">
                <MapPin class="w-5 h-5 text-accent" />
                <span>{{ profileData.location }}</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Mail class="w-5 h-5 text-accent" />
                <span>{{ profileData.email }}</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Phone class="w-5 h-5 text-accent" />
                <span>{{ profileData.phone }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Skills & Expertise -->
          <div class="space-y-8">
            <div class="glass-card p-8 rounded-xl">
              <h4 class="text-xl font-bold text-primary mb-6">Core Expertise</h4>
              
              <div class="space-y-4">
              <div class="space-y-4">
                <div v-for="(skill, idx) in profileData.coreExpertise" :key="idx">
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">{{ skill.name }}</span>
                    <span class="text-accent font-semibold">{{ skill.percentage }}%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MapPin, Mail, Phone } from 'lucide-vue-next'
import { getProfileSettings, type ProfileData } from '../../services/profile'
import { fetchExperiences } from '../../services/experiences'
import { fetchPublishedProjects } from '../../services/projects'

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

onMounted(async () => {
  try {
    profileData.value = await getProfileSettings()
  } catch (e) {
    console.error("Error loading profile:", e)
  }

  try {
    const experiences = await fetchExperiences()
    if (experiences && experiences.length > 0) {
      const earliestYear = Math.min(...experiences.map(exp => new Date(exp.startDate).getFullYear()))
      const currentYear = new Date().getFullYear()
      yearsExperience.value = currentYear - earliestYear
    }
  } catch(e) { console.error(e) }

  try {
    const projects = await fetchPublishedProjects()
    projectsCompleted.value = projects.length
  } catch(e) { console.error(e) }
})
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
