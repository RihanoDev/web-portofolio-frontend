<template>
  <!-- Hero Section -->
  <section id="home" class="relative min-h-screen flex items-center justify-center px-4 py-20">
    <!-- Simple background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/3 rounded-full blur-2xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/3 rounded-full blur-2xl"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Profile Image with enhanced styling -->
        <div class="mb-8 group">
          <div class="relative inline-block">
            <div class="w-40 h-40 mx-auto rounded-full glass-strong p-1 group-hover:scale-105 transition-all duration-500">
              <div class="w-full h-full rounded-full overflow-hidden border-2 border-primary-500/20">
                <img 
                  src="/profile.jpg" 
                  alt="Rizky Haffiyan Roseno - RihanoDev" 
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div class="px-3 py-1.5 glass-strong text-primary-400 text-xs font-semibold rounded-full shadow-glow animate-pulse border border-primary-500/30">
                Open For Freelance
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Main Heading -->
        <div class="mb-6 space-y-2">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
            <span class="text-interactive-theme">
              Rizky Haffiyan
            </span>
            <br>
            <span class="text-text-primary">Roseno</span>
          </h1>
          
          <!-- Animated subtitle -->
          <div class="relative">
            <p class="text-xl md:text-2xl text-text-secondary font-medium">
              <span class="text-interactive-theme">Backend Engineer</span> | 
              <span class="text-interactive-theme">Cloud</span> | 
              <span class="text-interactive-theme">Software Engineering</span>
            </p>
          </div>
        </div>

        <!-- Enhanced specialization tags -->
        <div class="mb-8">
          <p class="text-lg text-text-secondary mb-4 leading-relaxed max-w-2xl mx-auto">
            Crafting robust, scalable solutions with 
          </p>
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span class="px-4 py-2 rounded-full glass-subtle border border-primary-500/20 text-primary-400 font-medium text-sm hover:bg-primary-500/10 transition-all duration-300">
              <i class="fab fa-golang mr-2"></i>Golang
            </span>
            <span class="px-4 py-2 rounded-full glass-subtle border border-blue-500/20 text-blue-400 font-medium text-sm hover:bg-blue-500/10 transition-all duration-300">
              <i class="fas fa-cubes mr-2"></i>Microservices
            </span>
            <span class="px-4 py-2 rounded-full glass-subtle border border-purple-500/20 text-purple-400 font-medium text-sm hover:bg-purple-500/10 transition-all duration-300">
              <i class="fas fa-network-wired mr-2"></i>Distributed Systems
            </span>
          </div>
        </div>

        <!-- Enhanced description -->
        <div class="mb-10">
          <p class="text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Passionate about building high-performance APIs, cloud-native architectures, 
            and scalable backend systems that power exceptional user experiences.
          </p>
        </div>

        <!-- Enhanced greeting with stats -->
        <div class="mb-10">
          <div class="glass-card rounded-2xl p-6 max-w-md mx-auto">
            <p class="text-lg text-text-primary font-medium mb-3 flex items-center justify-center">
              <span class="mr-2">👋</span> Welcome to my digital space!
            </p>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-primary-500">1</div>
                <div class="text-xs text-text-muted">Years Experience</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-primary-500">6</div>
                <div class="text-xs text-text-muted">Projects Built</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-primary-500">24/7</div>
                <div class="text-xs text-text-muted">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Social Links -->
        <div class="flex justify-center items-center space-x-6 mb-8">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative social-icon-link"
            :aria-label="social.name"
            style="outline: none !important; -webkit-tap-highlight-color: transparent !important;"
          >
            <div class="w-14 h-14 rounded-xl glass hover:glass-strong transition-all duration-300 flex items-center justify-center text-text-secondary hover:text-primary-400 hover:scale-110 border border-border-subtle hover:border-primary-500/30 group-hover:shadow-glow">
              <i :class="social.icon + ' text-xl'"></i>
            </div>
            <span class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 bg-surface-glass px-2 py-1 rounded-md border border-border-subtle">
              {{ social.name }}
            </span>
          </a>
        </div>

        <!-- Call to action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects"
            class="btn-cta btn-with-icon btn-shimmer"
          >
            <i class="fas fa-code icon"></i>
            <span>View My Work</span>
          </a>
          <a 
            href="#contact"
            class="btn-outline btn-with-icon"
          >
            <i class="fas fa-envelope icon"></i>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rizkyhaffiyanr/',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/RihanoDev',
    icon: 'fab fa-github'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/rihano09',
    icon: 'fab fa-instagram'
  }
]

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/default-avatar.svg'
}
</script>

<style scoped>
.glass {
  background: rgba(26, 30, 46, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.glass-strong {
  background: rgba(26, 30, 46, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-subtle {
  background: rgba(26, 30, 46, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Force remove outline from social links */
.social-icon-link,
.social-icon-link:focus,
.social-icon-link:active,
.social-icon-link:focus-visible {
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
  box-shadow: none !important;
}

.social-icon-link:focus div {
  border-color: rgba(96, 165, 250, 0.5) !important;
}
</style>
