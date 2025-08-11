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
            About <span style="color: var(--color-accent);">Me</span>
          </h2>
          <div class="w-24 h-1 rounded-full mx-auto mb-6" 
               style="background: var(--gradient-primary);"></div>
          <p class="text-xl max-w-3xl mx-auto leading-relaxed" 
             style="color: var(--color-text-secondary);">
            <span class="font-semibold" style="color: var(--color-accent);">Passionate backend engineer</span> with expertise in building 
            <span class="font-semibold" style="color: var(--color-accent);">scalable, high-performance systems</span>. 
            Dedicated to <span class="font-semibold" style="color: var(--color-accent);">clean code</span>, best practices, and 
            <span class="font-semibold" style="color: var(--color-accent);">continuous learning</span> in the ever-evolving tech landscape.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: rgba(255, 255, 255, 0.1);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">3+</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">Years of Experience</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: rgba(255, 255, 255, 0.1);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">50+</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">Projects Completed</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 group hover:scale-105"
               style="border-color: rgba(255, 255, 255, 0.1);">
            <div class="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform" 
                 style="color: var(--color-accent);">∞</div>
            <div class="text-sm" style="color: var(--color-text-secondary);">Learning Journey</div>
          </div>
        </div>

        <!-- Enhanced Expertise Section -->
        <div class="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl font-bold mb-8" 
              style="color: var(--color-text-primary);">
            <span style="color: var(--color-accent);">Core</span> <span style="color: var(--color-accent);">Expertise</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-primary-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <i class="fas fa-server text-interactive-theme text-lg group-hover:text-interactive-primary transition-all duration-300"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">Backend Development</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">Building robust APIs and server-side logic</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border transition-all duration-300 hover:scale-105"
                   style="border-color: rgba(255, 255, 255, 0.1);">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center"
                       style="background-color: rgba(var(--accent-rgb), 0.1);">
                    <i class="fab fa-golang text-lg" style="color: var(--color-accent);"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">Golang Expert</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">Proficient in Go for high-performance applications</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <i class="fas fa-database text-purple-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">Database Design</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">Optimized database architecture and queries</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <i class="fas fa-network-wired text-green-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">System Architecture</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">Designing scalable distributed systems</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <i class="fas fa-cloud text-orange-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">Cloud Solutions</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">AWS, Docker, Kubernetes deployment</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <i class="fas fa-cubes text-red-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold" style="color: var(--color-text-primary);">Microservices</h4>
                </div>
                <p class="text-sm" style="color: var(--color-text-secondary);">Building resilient microservice architectures</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div data-aos="fade-up" data-aos-delay="300">
          <p class="mb-6" style="color: var(--color-text-secondary);">
            Want to learn more about my journey and experience?
          </p>
          <router-link 
            to="/about" 
            class="inline-flex items-center gap-2 px-8 py-4 glass border font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            style="border-color: rgba(var(--accent-rgb), 0.3); color: var(--color-accent);"
          >
            <span>View Full About Page</span>
            <i class="fas fa-arrow-right flex-shrink-0"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic will be here if needed
</script>

<style scoped>
.glass-subtle {
  background: rgba(26, 30, 46, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.glass-strong {
  background: rgba(26, 30, 46, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
