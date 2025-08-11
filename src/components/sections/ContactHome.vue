<template>
  <section class="py-16 relative">
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Section Header -->
        <div class="mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
          <div class="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-secondary max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and bring your ideas to life.
          </p>
        </div>

        <!-- Contact Methods Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Email -->
          <a 
            href="mailto:rihanodev@gmail.com"
            class="glass-card rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <i class="fas fa-envelope text-accent text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">Email</h3>
            <p class="text-secondary text-sm">rihanodev@gmail.com</p>
          </a>

          <!-- Phone -->
          <a 
            href="tel:+628123456789"
            class="glass-card rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <i class="fas fa-phone text-accent text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">Phone</h3>
            <p class="text-secondary text-sm">+62 812-3456-7890</p>
          </a>

          <!-- Location -->
          <div class="glass-card rounded-xl p-6 border border-white/5">
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-accent text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">Location</h3>
            <p class="text-secondary text-sm">Jakarta, Indonesia</p>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mb-12">
          <p class="text-secondary mb-8 text-lg">You can also find me on</p>
          <div class="flex justify-center items-center space-x-4 sm:space-x-6">
            <a 
              href="https://github.com/RihanoDev"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
              title="GitHub"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-lg flex items-center justify-center text-secondary hover:text-white border border-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-accent/10">
                <i class="fab fa-github text-base sm:text-lg"></i>
              </div>
              <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a 
              href="https://linkedin.com/in/rizkyhaffiyanr"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
              title="LinkedIn"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-lg flex items-center justify-center text-secondary hover:text-white border border-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-accent/10">
                <i class="fab fa-linkedin-in text-base sm:text-lg"></i>
              </div>
              <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a 
              href="https://twitter.com/RihanoDev"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
              title="Twitter"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-lg flex items-center justify-center text-secondary hover:text-white border border-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-accent/10">
                <i class="fab fa-twitter text-base sm:text-lg"></i>
              </div>
              <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap">
                Twitter
              </span>
            </a>
            <a 
              href="https://instagram.com/rihano09"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
              title="Instagram"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 glass-strong rounded-lg flex items-center justify-center text-secondary hover:text-white border border-white/10 hover:border-accent/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-accent/10">
                <i class="fab fa-instagram text-base sm:text-lg"></i>
              </div>
              <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium whitespace-nowrap">
                Instagram
              </span>
            </a>
          </div>
        </div>

        <!-- CTA Button -->
        <div>
          <router-link 
            to="/contact"
            class="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-300"
            style="outline: none !important; -webkit-tap-highlight-color: transparent !important;"
          >
            Send Message
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>