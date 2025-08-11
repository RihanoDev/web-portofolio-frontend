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
            <i class="fas fa-user text-2xl text-primary-400 group-hover:text-primary-300"></i>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About <span class="text-primary-400">Me</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            <span class="text-primary-400 font-semibold">Passionate backend engineer</span> with expertise in building 
            <span class="text-primary-400 font-semibold">scalable, high-performance systems</span>. 
            Dedicated to <span class="text-primary-400 font-semibold">clean code</span>, best practices, and 
            <span class="text-primary-400 font-semibold">continuous learning</span> in the ever-evolving tech landscape.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div class="glass-subtle rounded-xl p-6 border border-border-subtle/20 hover:border-primary-400/30 transition-all duration-300 group">
            <div class="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">3+</div>
            <div class="text-text-secondary text-sm">Years of Experience</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border border-border-subtle/20 hover:border-primary-400/30 transition-all duration-300 group">
            <div class="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
            <div class="text-text-secondary text-sm">Projects Completed</div>
          </div>
          <div class="glass-subtle rounded-xl p-6 border border-border-subtle/20 hover:border-primary-400/30 transition-all duration-300 group">
            <div class="text-3xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform">∞</div>
            <div class="text-text-secondary text-sm">Learning Journey</div>
          </div>
        </div>

        <!-- Enhanced Expertise Section -->
        <div class="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-2xl font-bold text-text-primary mb-8">
            <span class="text-primary-400">Core</span> <span class="text-primary-400">Expertise</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-primary-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <i class="fas fa-server text-interactive-theme text-lg group-hover:text-interactive-primary transition-all duration-300"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">Backend Development</h4>
                </div>
                <p class="text-text-muted text-sm">Building robust APIs and server-side logic</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <i class="fab fa-golang text-blue-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">Golang Expert</h4>
                </div>
                <p class="text-text-muted text-sm">Proficient in Go for high-performance applications</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <i class="fas fa-database text-purple-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">Database Design</h4>
                </div>
                <p class="text-text-muted text-sm">Optimized database architecture and queries</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-green-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <i class="fas fa-network-wired text-green-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">System Architecture</h4>
                </div>
                <p class="text-text-muted text-sm">Designing scalable distributed systems</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <i class="fas fa-cloud text-orange-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">Cloud Solutions</h4>
                </div>
                <p class="text-text-muted text-sm">AWS, Docker, Kubernetes deployment</p>
              </div>
            </div>

            <div class="group">
              <div class="glass-subtle rounded-xl p-6 border border-border-subtle hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <i class="fas fa-cubes text-red-400 text-lg"></i>
                  </div>
                  <h4 class="font-semibold text-text-primary">Microservices</h4>
                </div>
                <p class="text-text-muted text-sm">Building resilient microservice architectures</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div data-aos="fade-up" data-aos-delay="300">
          <p class="text-text-secondary mb-6">
            Want to learn more about my journey and experience?
          </p>
          <router-link 
            to="/about" 
            class="inline-flex items-center gap-2 px-8 py-4 glass border border-primary-500/30 text-primary-400 font-semibold rounded-xl hover:bg-primary-500/10 transition-all duration-300 hover:scale-105"
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
