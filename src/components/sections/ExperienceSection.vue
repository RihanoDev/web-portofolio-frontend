<template>
  <section id="experience" class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Experience</h2>
          <div class="w-24 h-1 bg-gradient mx-auto mb-6"></div>
          <p class="text-xl text-secondary max-w-3xl mx-auto">
            My professional journey in backend development and software engineering
          </p>
        </div>

        <!-- Experience Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent transform md:-translate-x-0.5"></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <ExperienceCard
              v-for="(experience, index) in experiences"
              :key="experience.id"
              :experience="experience"
              :index="index"
              :isLeft="index % 2 === 0"
            />
          </div>
        </div>

        <!-- Skills Summary -->
        <div class="mt-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-primary mb-4">Key Skills & Expertise</h3>
            <p class="text-secondary">Technologies and methodologies I've mastered throughout my career</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="skill in skillCategories" 
              :key="skill.category"
              class="glass p-6 rounded-xl text-center hover:border-accent/30 transition-all duration-300"
            >
              <div class="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient flex items-center justify-center">
                <component :is="skill.icon" class="w-8 h-8 text-white" />
              </div>
              <h4 class="font-bold text-primary mb-2">{{ skill.category }}</h4>
              <div class="flex flex-wrap gap-1 justify-center">
                <span 
                  v-for="tech in skill.technologies.slice(0, 3)" 
                  :key="tech"
                  class="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Database, Cloud, Code } from 'lucide-vue-next'
import ExperienceCard from '../ui/ExperienceCard.vue'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: 'full-time' | 'freelance' | 'contract'
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    company: 'TechCorp Indonesia',
    location: 'Jakarta, Indonesia',
    period: '2022 - Present',
    type: 'full-time',
    description: 'Leading backend development for high-traffic e-commerce platform serving millions of users. Responsible for system architecture, database optimization, and team mentoring.',
    achievements: [
      'Reduced API response time by 60% through database optimization and caching strategies',
      'Led migration from monolithic to microservices architecture',
      'Mentored 5 junior developers and established coding standards',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ],
    technologies: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Kafka'],
    logo: '/companies/techcorp.png'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'StartupXYZ',
    location: 'Jakarta, Indonesia',
    period: '2021 - 2022',
    type: 'full-time',
    description: 'Developed scalable backend systems for fintech application handling financial transactions and user management with high security standards.',
    achievements: [
      'Built secure payment processing system handling $1M+ monthly transactions',
      'Implemented real-time fraud detection reducing fraudulent activities by 40%',
      'Developed RESTful APIs serving 100K+ daily active users',
      'Achieved 99.9% system uptime through robust error handling'
    ],
    technologies: ['Go', 'MySQL', 'Redis', 'AWS', 'Docker'],
    logo: '/companies/startupxyz.png'
  },
  {
    id: 3,
    title: 'Freelance Backend Engineer',
    company: 'Various Clients',
    location: 'Remote',
    period: '2020 - 2021',
    type: 'freelance',
    description: 'Provided backend development services for multiple clients, ranging from small businesses to medium enterprises, focusing on API development and database design.',
    achievements: [
      'Delivered 15+ projects with 100% client satisfaction rate',
      'Reduced development time by 40% using modern development practices',
      'Helped clients migrate legacy systems to modern architectures',
      'Provided technical consultation for system architecture decisions'
    ],
    technologies: ['Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    logo: '/companies/freelance.png'
  },
  {
    id: 4,
    title: 'Junior Backend Engineer',
    company: 'Digital Agency Pro',
    location: 'Jakarta, Indonesia',
    period: '2019 - 2020',
    type: 'full-time',
    description: 'Started my professional journey developing web applications and learning industry best practices under senior developer mentorship.',
    achievements: [
      'Developed 10+ web applications using modern backend frameworks',
      'Learned industry best practices for code quality and testing',
      'Contributed to team knowledge sharing sessions',
      'Received "Most Improved Developer" award in 2020'
    ],
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Git'],
    logo: '/companies/digital-agency.png'
  }
]

const skillCategories = [
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Go', 'Node.js', 'Python', 'Java', 'C++']
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ElasticSearch']
  },
  {
    category: 'DevOps',
    icon: Cloud,
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform']
  },
  {
    category: 'Architecture',
    icon: Code,
    technologies: ['Microservices', 'REST API', 'gRPC', 'GraphQL', 'Event Sourcing']
  }
]
</script>

<style scoped>
.glass {
  background: rgba(var(--surface-rgb), 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
