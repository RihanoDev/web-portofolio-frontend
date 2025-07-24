<template>
  <section class="w-full bg-light py-20" id="contact">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title text-center" data-aos="fade-up">Get in Touch</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"> 
        <div class="space-y-8" data-aos="fade-right">
          <div class="animate-fade-in-up">
            <h3 class="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">Let's talk about everything!</h3>
            <p class="text-lg text-secondary">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>
          <div class="space-y-6 animate-fade-in">
            <div class="flex items-center space-x-4 group">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <i class="fas fa-envelope text-light"></i>
              </div>
              <span class="text-secondary group-hover:text-primary transition-colors duration-300">email@example.com</span>
            </div>
            <div class="flex items-center space-x-4 group">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <i class="fas fa-phone text-light"></i>
              </div>
              <span class="text-secondary group-hover:text-primary transition-colors duration-300">+1234567890</span>
            </div>
            <div class="flex items-center space-x-4 group">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <i class="fas fa-map-marker-alt text-light"></i>
              </div>
              <span class="text-secondary group-hover:text-primary transition-colors duration-300">Your Location</span>
            </div>
          </div>
        </div>
        
        <form class="space-y-6 bg-white p-8 rounded-2xl shadow-2xl animate-fade-in-up" @submit.prevent="handleSubmit" data-aos="fade-left">
          <div class="form-group relative">
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              class="input-field peer placeholder-transparent"
              placeholder="Your Name"
              required
              @focus="focused = 'name'"
              @blur="focused = null"
            >
            <label 
              for="name" 
              class="absolute left-4 -top-2.5 bg-white px-2 text-sm text-secondary-light transition-all duration-200
                     peer-focus:text-primary peer-focus:text-sm peer-focus:-top-2.5
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-3.5"
            >
              Your Name
            </label>
          </div>
          
          <div class="form-group relative">
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              class="input-field peer placeholder-transparent"
              placeholder="Your Email"
              required
              @focus="focused = 'email'"
              @blur="focused = null"
            >
            <label 
              for="email" 
              class="absolute left-4 -top-2.5 bg-white px-2 text-sm text-secondary-light transition-all duration-200
                     peer-focus:text-primary peer-focus:text-sm peer-focus:-top-2.5
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-3.5"
            >
              Your Email
            </label>
          </div>

          <div class="form-group relative">
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="input-field peer placeholder-transparent resize-none"
              placeholder="Your Message"
              required
              @focus="focused = 'message'"
              @blur="focused = null"
            ></textarea>
            <label 
              for="message" 
              class="absolute left-4 -top-2.5 bg-white px-2 text-sm text-secondary-light transition-all duration-200
                     peer-focus:text-primary peer-focus:text-sm peer-focus:-top-2.5
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-3.5"
            >
              Your Message
            </label>
          </div>

          <button 
            type="submit"
            class="btn btn-primary w-full group relative overflow-hidden"
            :disabled="isSubmitting"
          >
            <span class="relative z-10 transition-transform duration-500 group-hover:translate-y-full">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </span>
            <span class="absolute inset-0 z-0 bg-primary-hover transform transition-transform duration-500 translate-y-full group-hover:translate-y-0"></span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const focused = ref<string | null>(null) // Added focused state for potential label animation
const isSubmitting = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    // Implement your form submission logic here
    console.log('Form submitted:', formData.value)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call

    // Reset form after successful submission
    formData.value.name = ''
    formData.value.email = ''
    formData.value.message = ''
    alert('Message sent successfully!')

  } catch (error: unknown) {
    console.error('Error submitting form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
    alert(errorMessage)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/*
  Jika Anda ingin elemen input/textarea memiliki gaya yang konsisten
  sesuai dengan Tailwind CSS, Anda tidak perlu CSS kustom sebanyak ini.
  Tailwind sudah menyediakan banyak utilitas.

  Saya akan menyisakan definisi input-field, btn, dan section-title
  jika Anda ingin mempertahankan gaya kustom di luar Tailwind.
  Jika tidak, Anda bisa menghapus ini dan hanya menggunakan kelas Tailwind.
*/

/* Custom styles for the floating label effect */
.input-field {
  @apply w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200;
  /* Add custom styles if you want to override or extend Tailwind's defaults */
}

/* Custom styles for buttons */
.btn {
  @apply py-3 px-6 rounded-lg font-semibold;
}

.btn-primary {
  @apply bg-[#2C3E50] text-white hover:bg-[#34495E] transition-colors duration-200;
}

/* Specific button animation style */
.bg-primary-hover {
  background-color: #34495E; /* Define this color if not in your Tailwind config */
}

/* Section title style */
.section-title {
  @apply text-4xl font-bold text-primary mb-12; /* Adjust as per your branding */
  color: #2C3E50; /* Example primary color */
}

/* Animations if not already defined in your global CSS/Tailwind plugins */
/* Ensure your Tailwind config includes custom animations if these are used */
@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInFromBottom 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeInFromBottom 0.8s ease-out forwards;
}

/* Overwrite the SCSS variables from the previous style block if they are still present.
   If you truly want SCSS variables, ensure they are imported/defined globally in your Vite setup.
   For now, I'm removing the SCSS specific styles to prevent conflict and rely on Tailwind.
*/

/* Remove the following block if you are solely relying on Tailwind for this component */
/*
.contact {
  padding: var(--spacing-xl) var(--container-padding);
  background: var(--color-background);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}
... (and all other SCSS blocks) ...
*/
</style>