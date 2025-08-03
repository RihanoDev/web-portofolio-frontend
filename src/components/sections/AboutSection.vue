<template>
  <section id="about" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-text-primary">About Me</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate backend engineer with expertise in building scalable, high-performance systems
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-text-primary">Hi, I'm Rizky Haffiyan Roseno</h3>
              
              <div class="space-y-4 text-text-secondary leading-relaxed">
                <p class="text-text-primary">
                  A dedicated backend engineer with a passion for building robust, scalable systems. 
                  I specialize in <span class="text-primary-400 font-semibold">Golang</span> development and have extensive experience 
                  in designing microservices architectures, transactional systems, and high-throughput APIs.
                </p>
                
                <p class="text-text-primary">
                  My expertise spans across distributed systems, database optimization, and cloud-native technologies. 
                  I believe in writing <span class="text-primary-400 font-semibold">clean, maintainable code</span> and following best practices in software engineering.
                </p>
                
                <p class="text-text-primary">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="glass-subtle p-6 rounded-lg text-center border border-border-subtle/20 hover:glass-card transition-all duration-300">
                <div class="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div class="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div class="glass-subtle p-6 rounded-lg text-center border border-border-subtle/20 hover:glass-card transition-all duration-300">
                <div class="text-3xl font-bold text-primary-400 mb-2">50+</div>
                <div class="text-sm text-text-secondary">Projects Completed</div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-secondary">
                <MapPin class="w-5 h-5 text-accent" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Mail class="w-5 h-5 text-accent" />
                <span>rihanodev@gmail.com</span>
              </div>
              <div class="flex items-center space-x-3 text-secondary">
                <Phone class="w-5 h-5 text-accent" />
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          <!-- Right: Skills & Expertise -->
          <div class="space-y-8">
            <div class="glass-card p-8 rounded-xl">
              <h4 class="text-xl font-bold text-primary mb-6">Core Expertise</h4>
              
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Backend Development</span>
                    <span class="text-accent font-semibold">95%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Golang</span>
                    <span class="text-accent font-semibold">90%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 90%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">Database Design</span>
                    <span class="text-accent font-semibold">85%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 85%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-secondary">System Architecture</span>
                    <span class="text-accent font-semibold">80%</span>
                  </div>
                  <div class="w-full bg-surface rounded-full h-2">
                    <div class="bg-gradient h-2 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Services -->
            <div class="space-y-4">
              <h4 class="text-xl font-bold text-primary">What I Do</h4>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3 p-4 glass-card rounded-lg">
                  <Code class="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 class="font-semibold text-primary">Backend Development</h5>
                    <p class="text-sm text-secondary">Building scalable APIs and microservices</p>
                  </div>
                </div>

                <div class="flex items-start space-x-3 p-4 glass-card rounded-lg">
                  <Database class="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 class="font-semibold text-primary">Database Architecture</h5>
                    <p class="text-sm text-secondary">Designing optimal database solutions</p>
                  </div>
                </div>

                <div class="flex items-start space-x-3 p-4 glass-card rounded-lg">
                  <Cloud class="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 class="font-semibold text-primary">Cloud Solutions</h5>
                    <p class="text-sm text-secondary">Deploying and managing cloud infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone, Code, Database, Cloud } from 'lucide-vue-next'
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
