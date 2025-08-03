<template>
  <footer class="relative border-t border-border-subtle">
    <!-- Glass Background -->
    <div class="glass-footer py-16 px-4 relative">
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Enhanced Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <!-- Enhanced Brand Section -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-4 shadow-lg">
                <span class="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 class="text-text-primary font-bold text-xl">RihanoDev</h3>
                <p class="text-text-secondary text-sm">Backend Engineer</p>
              </div>
            </div>
            <p class="text-text-muted text-sm leading-relaxed mb-6">
              Specialized in building robust backend systems, APIs, and cloud solutions. 
              Passionate about creating scalable and efficient software architecture.
            </p>
          </div>

          <!-- Enhanced Quick Links -->
          <div class="md:col-span-1">
            <h3 class="text-text-primary font-semibold text-lg mb-6 inline-flex items-center gap-3">
              <i class="fas fa-link text-primary-400 flex-shrink-0"></i>
              <span>Quick Links</span>
            </h3>
            <ul class="space-y-3">
              <li><router-link to="/" class="footer-link inline-flex items-center gap-3"><i class="fas fa-home text-blue-400 flex-shrink-0"></i><span>Home</span></router-link></li>
              <li><router-link to="/about" class="footer-link inline-flex items-center gap-3"><i class="fas fa-user text-green-400 flex-shrink-0"></i><span>About</span></router-link></li>
              <li><router-link to="/projects" class="footer-link inline-flex items-center gap-3"><i class="fas fa-code text-purple-400 flex-shrink-0"></i><span>Projects</span></router-link></li>
              <li><router-link to="/articles" class="footer-link inline-flex items-center gap-3"><i class="fas fa-newspaper text-yellow-400 flex-shrink-0"></i><span>Articles</span></router-link></li>
              <li><router-link to="/contact" class="footer-link inline-flex items-center gap-3"><i class="fas fa-envelope text-red-400 flex-shrink-0"></i><span>Contact</span></router-link></li>
            </ul>
          </div>

          <!-- Enhanced Services -->
          <div class="md:col-span-1">
            <h3 class="text-text-primary font-semibold text-lg mb-6 inline-flex items-center gap-3">
              <i class="fas fa-cogs text-primary-400 flex-shrink-0"></i>
              <span>Services</span>
            </h3>
            <ul class="space-y-3">
              <li><span class="footer-link cursor-default inline-flex items-center gap-3"><i class="fas fa-server text-blue-400 flex-shrink-0"></i><span>Backend Development</span></span></li>
              <li><span class="footer-link cursor-default inline-flex items-center gap-3"><i class="fas fa-database text-green-400 flex-shrink-0"></i><span>Database Design</span></span></li>
              <li><span class="footer-link cursor-default inline-flex items-center gap-3"><i class="fas fa-code-branch text-purple-400 flex-shrink-0"></i><span>API Development</span></span></li>
              <li><span class="footer-link cursor-default inline-flex items-center gap-3"><i class="fas fa-network-wired text-orange-400 flex-shrink-0"></i><span>System Integration</span></span></li>
              <li><span class="footer-link cursor-default inline-flex items-center gap-3"><i class="fas fa-cloud text-cyan-400 flex-shrink-0"></i><span>Cloud Solutions</span></span></li>
            </ul>
          </div>

          <!-- Enhanced Contact & Social -->
          <div class="md:col-span-1">
            <h3 class="text-text-primary font-semibold text-lg mb-6 inline-flex items-center gap-3">
              <i class="fas fa-address-book text-primary-400 flex-shrink-0"></i>
              <span>Get in Touch</span>
            </h3>
            
            <!-- Enhanced Contact Info -->
            <div class="space-y-4 mb-6">
              <a href="mailto:rihanodev@gmail.com" class="flex items-center gap-3 footer-link group">
                <div class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors flex-shrink-0">
                  <Mail class="w-4 h-4 text-red-400" />
                </div>
                <span class="text-sm">rihanodev@gmail.com</span>
              </a>
              <a href="tel:+6281214768206" class="flex items-center gap-3 footer-link group">
                <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                  <Phone class="w-4 h-4 text-green-400" />
                </div>
                <span class="text-sm">+62 812-1476-8206</span>
              </a>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-4 h-4 text-blue-400" />
                </div>
                <span class="text-text-muted text-sm">Bandung, West Java, Indonesia</span>
              </div>
            </div>

            <!-- Enhanced Social Links -->
            <div class="flex space-x-3">
              <a href="https://linkedin.com/in/rizkyhaffiyanr/" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover:bg-blue-600/20 group-hover:border-blue-600/40 transition-all duration-300">
                  <Linkedin class="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </div>
              </a>
              <a href="https://github.com/RihanoDev" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg bg-gray-600/10 flex items-center justify-center border border-gray-600/20 group-hover:bg-gray-600/20 group-hover:border-gray-600/40 transition-all duration-300">
                  <Github class="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
                </div>
              </a>
              <a href="https://instagram.com/rihano09" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg bg-pink-600/10 flex items-center justify-center border border-pink-600/20 group-hover:bg-pink-600/20 group-hover:border-pink-600/40 transition-all duration-300">
                  <Instagram class="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="glass-card rounded-2xl p-8 mb-12">
          <div class="text-center max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-text-primary mb-4">Stay Updated</h3>
            <p class="text-text-secondary mb-6">Get notified about new projects, articles, and backend development insights.</p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 rounded-lg glass-input text-text-primary placeholder-text-muted"
              >
              <button class="px-6 py-3 glass-btn glass-glow text-primary-400 font-semibold rounded-lg hover:text-primary-300 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <span>Subscribe</span>
                <i class="fas fa-paper-plane flex-shrink-0"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Enhanced Footer Bottom -->
        <div class="border-t border-border-subtle pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex items-center space-x-4 text-text-muted text-sm">
              <span>&copy; 2024 RihanoDev. All rights reserved.</span>
              <span class="inline-flex items-center gap-1">
                <i class="fas fa-heart text-red-400 flex-shrink-0"></i>
                <span>Made with passion in Indonesia</span>
              </span>
            </div>
            
            <div class="flex items-center space-x-6 text-text-muted text-sm">
              <a href="/privacy" class="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="/terms" class="hover:text-primary-400 transition-colors">Terms of Service</a>
              <div class="inline-flex items-center gap-1">
                <i class="fas fa-code text-primary-400 flex-shrink-0"></i>
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
.footer-link {
  color: #94A3B8;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #FF6B00;
}

.social-icon {
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
}
</style>
