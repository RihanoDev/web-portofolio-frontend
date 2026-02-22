<template>
  <section id="contact" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">{{ $t('contact.title') }}</h2>
          <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-interactive-theme mb-6">{{ $t('contact.talk_title') }}</h3>
              <p class="text-secondary leading-relaxed mb-8" v-html="$t('contact.talk_desc')">
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactInfo 
                icon="Mail"
                title="Email"
                :content="profileData.email"
                :href="'mailto:' + profileData.email"
              />
              <ContactInfo 
                icon="Phone"
                title="Phone"
                :content="profileData.phone"
                :href="'tel:' + profileData.phone.replace(/[^0-9+]/g, '')"
              />
              <ContactInfo 
                icon="MapPin"
                title="Location"
                :content="profileData.location"
                :href="'https://maps.google.com/?q=' + profileData.location"
              />
              <ContactInfo 
                icon="Clock"
                title="Response Time"
                :content="$t('contact.response_time')"
              />
            </div>
          </div>

          <!-- Contact Form -->
          <div class="glass-card p-8 rounded-xl">
            <h3 class="text-2xl font-bold text-primary mb-6">{{ $t('contact.form_title') }}</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div class="form-group">
                <label for="name" class="block text-sm font-medium text-primary mb-2">
                  {{ $t('contact.label_name') }}
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="form-input"
                  :placeholder="$t('contact.placeholder_name')"
                />
              </div>

              <!-- Email Field -->
              <div class="form-group">
                <label for="email" class="block text-sm font-medium text-primary mb-2">
                  {{ $t('contact.label_email') }}
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="form-input"
                  :placeholder="$t('contact.placeholder_email')"
                />
              </div>

              <!-- Subject Field -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-primary mb-2">
                  {{ $t('contact.label_subject') }}
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="form-input"
                  :placeholder="$t('contact.placeholder_subject')"
                />
              </div>

              <!-- Message Field -->
              <div class="form-group">
                <label for="message" class="block text-sm font-medium text-primary mb-2">
                  {{ $t('contact.label_message') }}
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="form-input resize-none"
                  :placeholder="$t('contact.placeholder_message')"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <BaseButton
                type="submit"
                :disabled="isSubmitting"
                variant="primary"
                size="lg"
                class="w-full"
              >
                <span v-if="!isSubmitting">{{ $t('contact.btn_send') }}</span>
                <span v-else>{{ $t('contact.btn_sending') }}</span>
                <Send class="w-5 h-5 ml-2" v-if="!isSubmitting" />
                <Loader2 class="w-5 h-5 ml-2 animate-spin" v-else />
              </BaseButton>
            </form>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus.message" class="mt-4 p-4 rounded-lg" :class="{
              'bg-green-500/20 text-green-400 border border-green-500/30': submitStatus.type === 'success',
              'bg-red-500/20 text-red-400 border border-red-500/30': submitStatus.type === 'error'
            }">
              {{ submitStatus.message }}
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-16 text-center">
          <div class="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold text-primary mb-4">{{ $t('contact.ready_title') }}</h3>
            <p class="text-secondary mb-6">
              {{ $t('contact.ready_desc') }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Lightbulb class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">{{ $t('contact.info_consult_title') }}</h4>
                <p class="text-sm text-secondary">{{ $t('contact.info_consult_desc') }}</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Code class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">{{ $t('contact.info_dev_title') }}</h4>
                <p class="text-sm text-secondary">{{ $t('contact.info_dev_desc') }}</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Rocket class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">{{ $t('contact.info_deploy_title') }}</h4>
                <p class="text-sm text-secondary">{{ $t('contact.info_deploy_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Send, Loader2, Lightbulb, Code, Rocket } from 'lucide-vue-next'
import ContactInfo from '../molecules/ContactInfo.vue'
import BaseButton from '../atoms/Button.vue'
import { getProfileSettings, type ProfileData } from '../../services/profile'

const { t, locale } = useI18n()

const profileData = ref<ProfileData>({
  name: 'Rizky Haffiyan Roseno',
  title: 'Backend Engineer',
  bio: '',
  avatarUrl: '/profile.jpg',
  aboutSubtitle: '',
  aboutDescription1: '',
  aboutDescription2: '',
  aboutDescription3: '',
  coreExpertise: [],
  location: 'Jakarta, Indonesia',
  email: 'rihanodev@gmail.com',
  phone: '+62 812-3456-7890'
})

onMounted(async () => {
  try {
    profileData.value = await getProfileSettings(locale.value)
  } catch (e) {
    
  }
})

const isSubmitting = ref(false)
const submitStatus = reactive({
  type: null as 'success' | 'error' | null,
  message: ''
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.type = null
  submitStatus.message = ''

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to your backend
    
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    submitStatus.type = 'success'
    submitStatus.message = t('contact.msg_success')
  } catch (error) {
    
    submitStatus.type = 'error'
    submitStatus.message = t('contact.msg_error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Using global glass effects - no local styles needed */

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(var(--surface-rgb), 0.5);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.1);
}

.form-input::placeholder {
  color: var(--secondary);
}
</style>
