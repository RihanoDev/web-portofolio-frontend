<template>
  <section id="tech-stack" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Tech Stack</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            Technologies and tools I use to build robust, scalable applications
          </p>
        </div>

        <!-- Categories -->
        <div class="space-y-16">
          <!-- Backend & Languages -->
          <div class="text-center">
            <h3 class="text-2xl font-bold text-primary mb-8">Backend & Languages</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-visible" style="padding: 16px;">
              <TechCard 
                v-for="tech in backendTech" 
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
                :color="tech.color"
                :description="tech.description"
              />
            </div>
          </div>

          <!-- Frontend -->
          <div class="text-center">
            <h3 class="text-2xl font-bold text-primary mb-8">Frontend</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible" style="padding: 16px;">
              <TechCard 
                v-for="tech in frontendTech" 
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
                :color="tech.color"
                :description="tech.description"
              />
            </div>
          </div>

          <!-- Databases -->
          <div class="text-center">
            <h3 class="text-2xl font-bold text-primary mb-8">Databases</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-visible" style="padding: 16px;">
              <TechCard 
                v-for="tech in databaseTech" 
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
                :color="tech.color"
                :description="tech.description"
              />
            </div>
          </div>

          <!-- DevOps & Cloud -->
          <div class="text-center">
            <h3 class="text-2xl font-bold text-primary mb-8">DevOps & Cloud</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 overflow-visible" style="padding: 16px;">
              <TechCard 
                v-for="tech in devOpsTech" 
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
                :color="tech.color"
                :description="tech.description"
              />
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="text-center">
            <h3 class="text-2xl font-bold text-primary mb-8">Tools & Others</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-visible" style="padding: 16px;">
              <TechCard 
                v-for="tech in toolsTech" 
                :key="tech.name"
                :name="tech.name"
                :icon="tech.icon"
                :color="tech.color"
                :description="tech.description"
              />
            </div>
          </div>
        </div>

        <!-- Expertise Summary -->
        <div class="mt-20 text-center">
          <div class="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold text-primary mb-6">Core Expertise</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="space-y-3">
                <div class="w-16 h-16 mx-auto bg-gradient rounded-lg flex items-center justify-center">
                  <Server class="w-8 h-8 text-white" />
                </div>
                <h4 class="font-bold text-primary">Backend Systems</h4>
                <p class="text-sm text-secondary">Microservices, APIs, and distributed systems</p>
              </div>
              
              <div class="space-y-3">
                <div class="w-16 h-16 mx-auto bg-gradient rounded-lg flex items-center justify-center">
                  <Database class="w-8 h-8 text-white" />
                </div>
                <h4 class="font-bold text-primary">Data Management</h4>
                <p class="text-sm text-secondary">Database design, optimization, and scaling</p>
              </div>
              
              <div class="space-y-3">
                <div class="w-16 h-16 mx-auto bg-gradient rounded-lg flex items-center justify-center">
                  <Cloud class="w-8 h-8 text-white" />
                </div>
                <h4 class="font-bold text-primary">Cloud Infrastructure</h4>
                <p class="text-sm text-secondary">Container orchestration and cloud deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Database, Cloud } from 'lucide-vue-next'
import TechCard from '../molecules/TechCard.vue'

const backendTech = [
  { name: 'Go', icon: 'fab fa-golang', color: '#00ADD8', description: 'Primary backend language' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', description: 'JavaScript runtime' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB', description: 'Scripting & automation' },
  { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6', description: 'Type-safe JavaScript' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', description: 'Frontend & backend language' },
  { name: 'Java', icon: 'fab fa-java', color: '#007396', description: 'Enterprise applications' }
]

const frontendTech = [
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D', description: 'Progressive JavaScript framework' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB', description: 'UI library' },
  { name: 'TailwindCSS', icon: 'fab fa-css3-alt', color: '#06B6D4', description: 'Utility-first CSS framework' }
]

const databaseTech = [
  { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791', description: 'Primary relational DB' },
  { name: 'Redis', icon: 'fas fa-server', color: '#DC382D', description: 'Caching & sessions' },
  { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248', description: 'Document database' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', description: 'Relational database' }
]

const devOpsTech = [
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', description: 'Containerization' },
  { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5', description: 'Container orchestration' },
  { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900', description: 'Cloud services' },
  { name: 'Jenkins', icon: 'fas fa-cogs', color: '#D33833', description: 'CI/CD pipeline' },
  { name: 'Terraform', icon: 'fas fa-layer-group', color: '#623CE4', description: 'Infrastructure as code' },
  { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624', description: 'Server OS' },
  { name: 'Nginx', icon: 'fas fa-server', color: '#009639', description: 'Web server & reverse proxy' }
]

const toolsTech = [
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', description: 'Version control' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717', description: 'Code repository' },
  { name: 'GraphQL', icon: 'fas fa-project-diagram', color: '#E10098', description: 'Query language' },
  { name: 'FastAPI', icon: 'fas fa-bolt', color: '#009688', description: 'Modern Python API framework' },
  { name: 'Grafana', icon: 'fas fa-chart-line', color: '#F46800', description: 'Monitoring & observability' },
  { name: 'Microservices', icon: 'fas fa-sitemap', color: '#FF6B6B', description: 'Architecture pattern' }
]
</script>

<style scoped>
/* Using global glass effects - no local styles needed */
</style>
