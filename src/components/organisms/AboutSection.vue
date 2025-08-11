<template>
  <section id="about" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-text-primary">About Me</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto">
            Backend engineer yang fokus pada hasil: reliabel, terukur, dan sederhana untuk dioperasikan.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-text-primary">Hi, I'm Rizky Haffiyan Roseno</h3>
              
              <div class="space-y-4 text-text-secondary leading-relaxed">
                <p class="text-text-primary">
                  Saya membangun backend yang cepat dan robust dengan <span class="text-primary-400 font-semibold">Go</span>, fokus pada microservices, transaksi konsisten, dan API ber-throughput tinggi.
                </p>
                <p class="text-text-primary">
                  Beberapa hasil: memangkas p95 response hingga 40% lewat indexing dan caching, meningkatkan uptime jadi 99.9% dengan observability dan circuit breaker, serta menurunkan waktu rilis lewat CI/CD yang rapih.
                </p>
                <p class="text-text-primary">
                  Prinsip saya: kirim bernilai bisnis, ukur dengan metrik, dan jaga agar sistem mudah dirawat.
                </p>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="glass-subtle p-6 rounded-lg text-center border border-border-subtle/20 hover:glass-card transition-all duration-300">
                <div class="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div class="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div class="glass-subtle p-6 rounded-lg text-center border border-border-subtle/20 hover:glass-card transition-all duration-300">
                <div class="text-3xl font-bold text-primary-400 mb-2">50+</div>
                <div class="text-sm text-text-secondary">Projects Completed</div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-secondary">
                <MapPin class="w-5 h-5 text-accent" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Mail class="w-5 h-5 text-accent" />
                <span>rihanodev@gmail.com</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Phone class="w-5 h-5 text-accent" />
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          <!-- Right: Skills & Expertise -->
          <div class="space-y-8">
            <div class="glass-card p-8 rounded-xl">
              <h4 class="text-xl font-bold text-primary mb-6">Core Expertise</h4>
              
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Backend Development</span>
                    <span class="text-accent font-semibold">95%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Golang</span>
                    <span class="text-accent font-semibold">90%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Database Design</span>
                    <span class="text-accent font-semibold">85%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 85%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">System Architecture</span>
                    <span class="text-accent font-semibold">80%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 80%"></div>
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
import { MapPin, Mail, Phone } from 'lucide-vue-next'
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
