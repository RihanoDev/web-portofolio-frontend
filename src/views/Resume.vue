<template>
  <div class="min-h-screen bg-background-primary">
    <!-- Header -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-background-primary/95 backdrop-blur-md border-b border-border-subtle">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Back Button -->
          <button
            @click="goBack"
            class="flex items-center gap-2 px-4 py-2 glass-subtle rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:glass-strong"
          >
            <ArrowLeft class="w-4 h-4" />
            <span>Back</span>
          </button>

          <!-- Title -->
          <div class="flex items-center gap-3">
            <FileText class="w-6 h-6 text-primary-400" />
            <h1 class="text-xl font-bold text-text-primary">Resume</h1>
          </div>
          
          <!-- Download Button -->
          <button
            @click="downloadPDF"
            class="flex items-center gap-2 px-4 py-2 glass-btn rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105"
          >
            <Download class="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pt-20 pb-8 px-4">
      <div class="max-w-5xl mx-auto">
        <!-- PDF Viewer Container -->
        <div class="glass-card rounded-xl overflow-hidden shadow-2xl">
          <!-- Loading State -->
          <div v-if="isLoading" class="flex items-center justify-center h-96">
            <div class="flex flex-col items-center gap-4">
              <div class="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
              <p class="text-text-secondary">Loading PDF...</p>
            </div>
          </div>

          <!-- Mobile PDF Notice -->
          <div v-if="isMobile" class="p-6 text-center">
            <FileText class="w-16 h-16 text-primary-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-text-primary mb-2">Resume Available</h3>
            <p class="text-text-secondary mb-6">
              Mobile browsers have limited PDF support. Choose an option below:
            </p>
            <div class="space-y-3">
              <button
                @click="downloadPDF"
                class="w-full flex items-center justify-center gap-2 px-6 py-3 glass-btn rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Download class="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              <button
                @click="openInNewTab"
                class="w-full flex items-center justify-center gap-2 px-6 py-3 glass-subtle rounded-lg font-medium transition-all duration-300 hover:glass-card"
              >
                <ArrowLeft class="w-5 h-5 transform rotate-45" />
                <span>Open in Browser</span>
              </button>
            </div>
          </div>

          <!-- Desktop PDF Iframe -->
          <iframe
            v-if="!isLoading && !isMobile"
            :src="pdfUrl"
            class="w-full h-screen border-0"
            title="Resume PDF"
            @load="onPDFLoad"
            @error="onPDFError"
          />

          <!-- Error State -->
          <div v-if="hasError && !isMobile" class="flex flex-col items-center justify-center h-96 p-8">
            <AlertTriangle class="w-16 h-16 text-yellow-500 mb-4" />
            <h3 class="text-xl font-semibold text-text-primary mb-2">Cannot Display PDF</h3>
            <p class="text-text-secondary text-center mb-6">
              Your browser doesn't support PDF viewing. Please download the file to view it.
            </p>
            <button
              @click="downloadPDF"
              class="flex items-center gap-2 px-6 py-3 glass-btn rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Download class="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, FileText, Download, AlertTriangle } from 'lucide-vue-next'

// Import PDF
import resumePDF from '../assets/0654test-Rizky Haffiyan Roseno-CV.pdf'

const router = useRouter()
const isLoading = ref(true)
const hasError = ref(false)
const pdfUrl = ref('')

// Mobile detection
const isMobile = computed(() => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768
})

onMounted(() => {
  // Set PDF URL with viewer parameters for better display
  pdfUrl.value = resumePDF + '#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH&zoom=100'
  
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const downloadPDF = () => {
  try {
    const link = document.createElement('a')
    link.href = resumePDF
  link.download = 'Rizky_Roseno_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Download failed:', error)
    // Fallback: open in new tab
    window.open(resumePDF, '_blank')
  }
}

const openInNewTab = () => {
  window.open(resumePDF, '_blank')
}

const onPDFLoad = () => {
  console.log('PDF loaded successfully')
  isLoading.value = false
  hasError.value = false
}

const onPDFError = () => {
  console.error('PDF failed to load')
  isLoading.value = false
  hasError.value = true
}
</script>

<style scoped>
/* Ensure iframe takes full height */
iframe {
  min-height: calc(100vh - 200px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--color-background-secondary), 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--color-primary), 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--color-primary), 0.5);
}
</style>
