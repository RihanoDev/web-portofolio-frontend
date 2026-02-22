<template>
  <footer class="relative border-t border-border/50">
    <!-- Glass Background with same style as navbar -->
    <div class="glass-footer py-16 px-4 relative">
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-[1fr_0.6fr_0.8fr] gap-x-16 gap-y-8 mb-12">
          
          <!-- Brand Section -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg" 
                   style="background: var(--gradient-primary);">
                <span class="text-white font-bold text-xl">RH</span>
              </div>
              <div>
                <h3 class="font-bold text-xl" style="color: var(--color-text-primary);">RihanoDev</h3>
                <p class="text-sm" style="color: var(--color-text-secondary);">Backend Engineer</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed mb-6" style="color: var(--color-text-secondary);">
              {{ $t('footer.brand_desc') }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="md:col-span-1">
            <h3 class="font-semibold text-lg mb-6 inline-flex items-center gap-3" style="color: var(--color-text-primary);">
              <i class="fas fa-link flex-shrink-0" style="color: var(--color-accent);"></i>
              <span>{{ $t('footer.quick_links') }}</span>
            </h3>
            <ul class="space-y-3">
              <li><router-link to="/" class="footer-link inline-flex items-center gap-3 transition-all duration-300"><i class="fas fa-home flex-shrink-0" style="color: var(--color-accent);"></i><span>Home</span></router-link></li>
              <li><router-link to="/about" class="footer-link inline-flex items-center gap-3 transition-all duration-300"><i class="fas fa-user flex-shrink-0" style="color: var(--color-accent);"></i><span>About</span></router-link></li>
              <li><router-link to="/projects" class="footer-link inline-flex items-center gap-3 transition-all duration-300"><i class="fas fa-code flex-shrink-0" style="color: var(--color-accent);"></i><span>Projects</span></router-link></li>
              <li><router-link to="/articles" class="footer-link inline-flex items-center gap-3 transition-all duration-300"><i class="fas fa-newspaper flex-shrink-0" style="color: var(--color-accent);"></i><span>Articles</span></router-link></li>
              <li><router-link to="/contact" class="footer-link inline-flex items-center gap-3 transition-all duration-300"><i class="fas fa-envelope flex-shrink-0" style="color: var(--color-accent);"></i><span>Contact</span></router-link></li>
            </ul>
          </div>


          <!-- Contact & Social -->
          <div class="md:col-span-1">
            <h3 class="font-semibold text-lg mb-6 inline-flex items-center gap-3" style="color: var(--color-text-primary);">
              <i class="fas fa-address-book flex-shrink-0" style="color: var(--color-accent);"></i>
              <span>{{ $t('footer.get_in_touch') }}</span>
            </h3>
            
            <!-- Contact Info -->
            <div class="space-y-4 mb-6">
              <a :href="'mailto:' + profileData.email" class="flex items-center gap-3 footer-link group transition-all duration-300">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail class="w-4 h-4" style="color: var(--color-accent);" />
                </div>
                <span class="text-sm">{{ profileData.email }}</span>
              </a>
              <a :href="'tel:' + profileData.phone.replace(/[^0-9+]/g, '')" class="flex items-center gap-3 footer-link group transition-all duration-300">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center transition-colors flex-shrink-0">
                  <Phone class="w-4 h-4" style="color: var(--color-accent);" />
                </div>
                <span class="text-sm">{{ profileData.phone }}</span>
              </a>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-4 h-4" style="color: var(--color-accent);" />
                </div>
                <span class="text-sm" style="color: var(--color-text-secondary);">{{ profileData.location }}</span>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-3">
              <a href="https://linkedin.com/in/rizkyhaffiyanr/" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:bg-opacity-10 transition-all duration-300"
                     style="border-color: rgba(var(--accent-rgb), 0.5);">
                  <Linkedin class="w-5 h-5 group-hover:scale-110 transition-transform" style="color: var(--color-accent);" />
                </div>
              </a>
              <a href="https://github.com/RihanoDev" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:bg-opacity-10 transition-all duration-300"
                     style="border-color: rgba(var(--accent-rgb), 0.5);">
                  <Github class="w-5 h-5 group-hover:scale-110 transition-transform" style="color: var(--color-accent);" />
                </div>
              </a>
              <a href="https://instagram.com/rihano09" 
                 target="_blank" 
                 class="social-icon group">
                <div class="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center group-hover:bg-opacity-10 transition-all duration-300"
                     style="border-color: rgba(var(--accent-rgb), 0.5);">
                  <Instagram class="w-5 h-5 group-hover:scale-110 transition-transform" style="color: var(--color-accent);" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="glass-subtle rounded-2xl p-8 mb-12">
          <div class="text-center max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold mb-4" style="color: var(--color-text-primary);">{{ $t('footer.stay_updated') }}</h3>
            <p class="mb-6" style="color: var(--color-text-secondary);">{{ $t('footer.newsletter_desc') }}</p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                :placeholder="$t('footer.placeholder_email')"
                class="flex-1 px-4 py-3 rounded-lg glass-subtle focus:outline-none transition-colors"
                style="color: var(--color-text-primary); border-color: rgba(var(--accent-rgb), 0.5);"
              >
              <button class="px-6 py-3 glass-subtle border border-accent rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                      style="color: var(--color-accent);">
                <span>{{ $t('footer.subscribe') }}</span>
                <i class="fas fa-paper-plane flex-shrink-0"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t pt-8" style="border-color: var(--color-border);">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="flex items-center space-x-4 text-sm" style="color: var(--color-text-secondary);">
              <span>&copy; 2026 RihanoDev. {{ $t('footer.rights') }}</span>
              <span class="inline-flex items-center gap-1">
                <i class="fas fa-heart flex-shrink-0" style="color: var(--color-accent);"></i>
                <span>{{ $t('footer.made_with') }}</span>
              </span>
            </div>
            
            <div class="flex items-center space-x-6 text-sm" style="color: var(--color-text-secondary);">
              <router-link to="/privacy" class="footer-link transition-colors">{{ $t('footer.privacy') }}</router-link>
              <router-link to="/terms" class="footer-link transition-colors">{{ $t('footer.terms') }}</router-link>
              <div class="inline-flex items-center gap-1">
                <i class="fas fa-code flex-shrink-0" style="color: var(--color-accent);"></i>
                <span>{{ $t('footer.built_with') || 'Built with Vue.js & Tailwind CSS' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-vue-next'
import { getProfileSettings, type ProfileData } from '../../services/profile'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const profileData = ref<ProfileData>({
  name: '',
  title: '',
  bio: '',
  avatarUrl: '',
  aboutSubtitle: '',
  aboutDescription1: '',
  aboutDescription2: '',
  aboutDescription3: '',
  coreExpertise: [],
  location: 'Jakarta, Indonesia',
  email: 'rihanodev@gmail.com',
  phone: '+62 812-3456-7890'
})

const fetchProfile = async () => {
  try {
    profileData.value = await getProfileSettings(locale.value)
  } catch (e) {
    // silently fail and use default fallback
  }
}

onMounted(() => {
  fetchProfile()
})

watch(locale, () => {
  fetchProfile()
})
</script>

<style scoped>
/* Footer glass effect - adaptive to theme */
.glass-footer {
  background: rgba(var(--color-secondary-rgb), 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--color-border);
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Light theme specific styles */
[data-theme*="light"] .glass-footer {
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);
}

.glass-subtle {
  background: rgba(var(--color-secondary-rgb), 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.glass-subtle:hover {
  background: rgba(var(--color-tertiary-rgb), 0.85);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

[data-theme*="light"] .glass-subtle {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

[data-theme*="light"] .glass-subtle:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.glass-subtle:hover {
  background: rgba(var(--color-tertiary), 0.98);
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 
    0 6px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

[data-theme*="light"] .glass-subtle:hover {
  background: rgba(248, 250, 252, 0.95);
  border-color: rgba(var(--accent-rgb), 0.3);
  box-shadow: 
    0 6px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

.footer-link {
  color: var(--color-text-secondary);
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
