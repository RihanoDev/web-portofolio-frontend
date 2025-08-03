<template>
  <div>
    <!-- Trigger Button -->
    <button 
      @click="openModal"
      class="btn-primary btn-with-icon"
    >
      <FileText class="icon" />
      <span>Resume</span>
    </button>

    <!-- Modal Backdrop -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Modal Content -->
        <div 
          class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          @click.stop
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <FileText class="w-6 h-6 text-blue-600" />
              <h3 class="text-lg font-semibold text-gray-900">Resume - Rizky Haffiyan Roseno</h3>
            </div>
            <div class="flex items-center space-x-2">
              <!-- Download Button -->
              <button 
                @click="downloadPDF"
                class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                title="Download PDF"
              >
                <Download class="w-5 h-5" />
              </button>
              <!-- Close Button -->
              <button 
                @click="closeModal"
                class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                title="Close"
              >
                <X class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- PDF Viewer -->
          <div class="relative overflow-auto max-h-[calc(90vh-80px)]">
            <div v-if="isLoading" class="flex items-center justify-center h-96">
              <div class="flex flex-col items-center space-y-4">
                <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p class="text-gray-600">Loading PDF...</p>
              </div>
            </div>

            <!-- PDF Content -->
            <div v-if="!isLoading" class="p-6 bg-gray-50">
              <!-- Resume Content - Styled as a professional CV -->
              <div class="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-8 border-b-2 border-blue-600 pb-6">
                  <h1 class="text-3xl font-bold text-gray-900 mb-2">Rizky Haffiyan Roseno</h1>
                  <p class="text-xl text-blue-600 font-semibold mb-4">Backend Engineer & System Architect</p>
                  <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <div class="flex items-center space-x-1">
                      <Mail class="w-4 h-4" />
                      <span>rihanodev@gmail.com</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <Phone class="w-4 h-4" />
                      <span>+62 123 456 7890</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <MapPin class="w-4 h-4" />
                      <span>Jakarta, Indonesia</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <Github class="w-4 h-4" />
                      <span>github.com/rihanoDev</span>
                    </div>
                  </div>
                </div>

                <!-- Professional Summary -->
                <section class="mb-8">
                  <h2 class="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Professional Summary</h2>
                  <p class="text-gray-700 leading-relaxed">
                    Experienced Backend Engineer with 3+ years of expertise in building scalable, high-performance systems using Golang, 
                    microservices architecture, and cloud technologies. Proven track record in designing distributed systems, 
                    optimizing database performance, and implementing DevOps best practices.
                  </p>
                </section>

                <!-- Technical Skills -->
                <section class="mb-8">
                  <h2 class="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Technical Skills</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 class="font-semibold text-gray-800 mb-2">Programming Languages</h3>
                      <p class="text-gray-700">Golang, JavaScript, TypeScript, Python</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800 mb-2">Databases</h3>
                      <p class="text-gray-700">PostgreSQL, MongoDB, Redis, InfluxDB</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800 mb-2">Cloud & DevOps</h3>
                      <p class="text-gray-700">Docker, Kubernetes, AWS, GCP, Jenkins</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800 mb-2">Frameworks & Tools</h3>
                      <p class="text-gray-700">Gin, Echo, Node.js, Vue.js, gRPC</p>
                    </div>
                  </div>
                </section>

                <!-- Work Experience -->
                <section class="mb-8">
                  <h2 class="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Work Experience</h2>
                  
                  <div class="space-y-6">
                    <div>
                      <div class="flex justify-between items-start mb-2">
                        <div>
                          <h3 class="text-lg font-semibold text-gray-900">Backend Engineer</h3>
                          <p class="text-blue-600 font-medium">TechCorp</p>
                        </div>
                        <span class="text-sm text-gray-600">2022 - Present</span>
                      </div>
                      <ul class="text-gray-700 space-y-1 ml-4">
                        <li>• Built and maintained microservices handling 1M+ daily requests</li>
                        <li>• Optimized database queries resulting in 40% performance improvement</li>
                        <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                        <li>• Led API design and documentation for 10+ internal services</li>
                      </ul>
                    </div>

                    <div>
                      <div class="flex justify-between items-start mb-2">
                        <div>
                          <h3 class="text-lg font-semibold text-gray-900">Software Engineer</h3>
                          <p class="text-blue-600 font-medium">StartupX</p>
                        </div>
                        <span class="text-sm text-gray-600">2020 - 2022</span>
                      </div>
                      <ul class="text-gray-700 space-y-1 ml-4">
                        <li>• Developed RESTful APIs using Golang and PostgreSQL</li>
                        <li>• Implemented real-time features using WebSocket technology</li>
                        <li>• Collaborated with frontend team on API integration</li>
                        <li>• Maintained 99.9% uptime through monitoring and alerting</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <!-- Education -->
                <section class="mb-8">
                  <h2 class="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Education</h2>
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h3>
                      <p class="text-blue-600 font-medium">University of Technology</p>
                    </div>
                    <span class="text-sm text-gray-600">2016 - 2020</span>
                  </div>
                </section>

                <!-- Projects -->
                <section>
                  <h2 class="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Key Projects</h2>
                  <div class="space-y-4">
                    <div>
                      <h3 class="font-semibold text-gray-900">SaaS Platform</h3>
                      <p class="text-gray-700 text-sm">Multi-tenant platform with Golang, PostgreSQL, and Kubernetes</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Real-time Chat Application</h3>
                      <p class="text-gray-700 text-sm">WebSocket-based chat with Node.js and Vue.js</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">E-commerce API</h3>
                      <p class="text-gray-700 text-sm">RESTful API with payment integration and inventory management</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FileText, Download, X, Mail, Phone, MapPin, Github } from 'lucide-vue-next'

const isOpen = ref(false)
const isLoading = ref(false)

const openModal = () => {
  isOpen.value = true
  isLoading.value = true
  
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
}

const closeModal = () => {
  isOpen.value = false
}

const downloadPDF = () => {
  // In a real application, you would have an actual PDF file
  // For demo purposes, we'll create a simple download
  const link = document.createElement('a')
  link.href = '#' // Replace with actual PDF URL
  link.download = 'Rizky_Haffiyan_Roseno_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeModal()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  return () => {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>
