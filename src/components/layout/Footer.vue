<template>
  <footer class="relative border-t border-white/5">
    <!-- Glass Background with same style as navbar -->
    <div class="glass-footer py-16 px-4 relative">
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-[1fr_0.6fr_0.8fr] gap-x-16 gap-y-8 mb-12">
          
          <!-- Brand Section -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center mr-4 shadow-lg">
                <span class="text-white font-bold text-xl">RH</span>
              </div>
              <div>
                <h3 class="text-primary font-bold text-xl">RihanoDev</h3>
                <p class="text-secondary text-sm">Backend Engineer</p>
              </div>
            </div>
            <p class="text-secondary text-sm leading-relaxed mb-6">
              Specialized in building robust backend systems, APIs, and cloud solutions. 
              Passionate about creating scalable and efficient software architecture.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="md:col-span-1">
            <h3 class="text-primary font-semibold text-lg mb-6 inline-flex items-center gap-3">
              <i class="fas fa-link text-accent flex-shrink-0"></i>
              <span>Quick Links</span>
            </h3>
            <ul class="space-y-3">
              <li><router-link to="/" class="footer-link inline-flex items-center gap-3 transition-all duration-300 hover:text-accent"><i class="fas fa-home text-accent flex-shrink-0"></i><span>Home</span></router-link></li>
              <li><router-link to="/about" class="footer-link inline-flex items-center gap-3 transition-all duration-300 hover:text-accent"><i class="fas fa-user text-accent flex-shrink-0"></i><span>About</span></router-link></li>
              <li><router-link to="/projects" class="footer-link inline-flex items-center gap-3 transition-all duration-300 hover:text-accent"><i class="fas fa-code text-accent flex-shrink-0"></i><span>Projects</span></router-link></li>
              <li><router-link to="/articles" class="footer-link inline-flex items-center gap-3 transition-all duration-300 hover:text-accent"><i class="fas fa-newspaper text-accent flex-shrink-0"></i><span>Articles</span></router-link></li>
              <li><router-link to="/contact" class="footer-link inline-flex items-center gap-3 transition-all duration-300 hover:text-accent"><i class="fas fa-envelope text-accent flex-shrink-0"></i><span>Contact</span></router-link></li>
            </ul>
          </div>


          <!-- Contact & Social -->
          <div class="md:col-span-1">
            <h3 class="text-primary font-semibold text-lg mb-6 inline-flex items-center gap-3">
              <i class="fas fa-address-book text-accent flex-shrink-0"></i>
              <span>Get in Touch</span>
            </h3>
            
            <!-- Contact Info -->
            <div class="space-y-4 mb-6">
              <a href="mailto:rihanodev@gmail.com" class="flex items-center gap-3 footer-link group transition-all duration-300">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center group-hover:border-accent/50 transition-colors flex-shrink-0">
                  <Mail class="w-4 h-4 text-accent" />
                </div>
                <span class="text-sm">rihanodev@gmail.com</span>
              </a>
              <a href="tel:+6281214768206" class="flex items-center gap-3 footer-link group transition-all duration-300">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center group-hover:border-accent/50 transition-colors flex-shrink-0">
                  <Phone class="w-4 h-4 text-accent" />
                </div>
                <span class="text-sm">+62 812-1476-8206</span>
              </a>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-4 h-4 text-accent" />
                </div>
                <span class="text-secondary text-sm">Bandung, West Java, Indonesia</span>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-3">
              <a href="https://linkedin.com/in/rizkyhaffiyanr/" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <Linkedin class="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://github.com/RihanoDev" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <Github class="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://instagram.com/rihano09" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <Instagram class="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="glass-subtle rounded-2xl p-8 mb-12">
          <div class="text-center max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-primary mb-4">Stay Updated</h3>
            <p class="text-secondary mb-6">Get notified about new projects, articles, and backend development insights.</p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 rounded-lg glass-subtle text-primary placeholder-secondary focus:border-accent/50 focus:outline-none transition-colors"
              >
              <button class="px-6 py-3 glass-subtle border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>Subscribe</span>
                <i class="fas fa-paper-plane flex-shrink-0"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-white/5 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex items-center space-x-4 text-secondary text-sm">
              <span>&copy; 2024 RihanoDev. All rights reserved.</span>
              <span class="inline-flex items-center gap-1">
                <i class="fas fa-heart text-accent flex-shrink-0"></i>
                <span>Made with passion in Indonesia</span>
              </span>
            </div>
            
            <div class="flex items-center space-x-6 text-secondary text-sm">
              <a href="/privacy" class="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" class="hover:text-accent transition-colors">Terms of Service</a>
              <div class="inline-flex items-center gap-1">
                <i class="fas fa-code text-accent flex-shrink-0"></i>
                <span>Built with Vue.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-vue-next'
</script>

<style scoped>
/* Enhanced glass effect for footer - stronger blur to block floating icons */
.glass-footer {
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 -8px 40px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.glass-subtle {
  background: rgba(3, 5, 10, 0.95);
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(60px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-subtle:hover {
  background: rgba(2, 3, 8, 0.98);
  border-color: rgba(255, 107, 0, 0.3);
  box-shadow: 
    0 6px 25px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.footer-link {
  color: var(--color-secondary);
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--color-accent);
  transform: translateX(4px);
}

.social-icon {
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.05);
}
</style>
