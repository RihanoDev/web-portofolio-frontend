<template>
  <section id="contact" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-interactive-primary">Get In Touch</h2>
          <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-interactive-theme mb-6">Let's Talk</h3>
              <p class="text-secondary leading-relaxed mb-8">
                I'm always open to discussing <span class="text-highlight-interactive">new opportunities</span>, interesting projects, 
                and potential collaborations. Whether you have a specific project in mind 
                or just want to connect, feel free to reach out.
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactInfo 
                icon="Mail"
                title="Email"
                content="rihanodev@gmail.com"
                href="mailto:rihanodev@gmail.com"
              />
              <ContactInfo 
                icon="Phone"
                title="Phone"
                content="+62 812-3456-7890"
                href="tel:+628123456789"
              />
              <ContactInfo 
                icon="MapPin"
                title="Location"
                content="Jakarta, Indonesia"
                href="https://maps.google.com/?q=Jakarta,Indonesia"
              />
              <ContactInfo 
                icon="Clock"
                title="Response Time"
                content="Usually within 24 hours"
              />
            </div>
          </div>

          <!-- Contact Form -->
          <div class="glass-card p-8 rounded-xl">
            <h3 class="text-2xl font-bold text-primary mb-6">Send Message</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div class="form-group">
                <label for="name" class="block text-sm font-medium text-primary mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <!-- Email Field -->
              <div class="form-group">
                <label for="email" class="block text-sm font-medium text-primary mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <!-- Subject Field -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-primary mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <!-- Message Field -->
              <div class="form-group">
                <label for="message" class="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="form-input resize-none"
                  placeholder="Tell me about your project or inquiry..."
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
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
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
            <h3 class="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h3>
            <p class="text-secondary mb-6">
              Let's discuss your requirements and see how I can help bring your backend systems to life
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Lightbulb class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">Consultation</h4>
                <p class="text-sm text-secondary">Free initial consultation to understand your needs</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Code class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">Development</h4>
                <p class="text-sm text-secondary">Clean, scalable code following best practices</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-gradient rounded-lg flex items-center justify-center">
                  <Rocket class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-primary">Deployment</h4>
                <p class="text-sm text-secondary">Full deployment and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Send, Loader2, Lightbulb, Code, Rocket } from 'lucide-vue-next'
import ContactInfo from '../molecules/ContactInfo.vue'
import BaseButton from '../atoms/Button.vue'

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
    console.log('Form submitted:', form)
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    submitStatus.type = 'success'
    submitStatus.message = 'Thank you for your message! I\'ll get back to you soon.'
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.type = 'error'
    submitStatus.message = 'Something went wrong. Please try again or contact me directly.'
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: var(--primary);
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
