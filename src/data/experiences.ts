import type { Experience } from '../types/experience'

// Dummy data - will be replaced with API calls in the future
export const experiencesData: Experience[] = [
  {
    id: 1,
    title: 'Backend Engineer',
    company: 'BRI API',
    location: 'Jakarta, Indonesia',
    period: '2023 - Present',
    type: 'full-time',
    description: 'Developed and maintained high-performance payment gateway systems processing $500K+ monthly transaction volume with 99.9% uptime.',
    achievements: [
      'Built payment gateway handling $500K+ monthly transactions',
      'Implemented fraud detection reducing false positives by 40%',
      'Achieved 99.9% system uptime with comprehensive monitoring',
      'Led PCI DSS compliance implementation',
      'Optimized database queries improving response time by 60%'
    ],
    technologies: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'Docker', 'Kubernetes'],
    logo: '/logos/bri.png'
  },
  {
    id: 2,
    title: 'Senior Backend Developer',
    company: 'SuriaTech',
    location: 'Bandung, Indonesia',
    period: '2022 - 2023',
    type: 'full-time',
    description: 'Built scalable backend systems handling 50K+ requests per hour with advanced caching strategies and microservices architecture.',
    achievements: [
      'Designed systems handling 50K+ requests/hour',
      'Implemented Redis caching reducing latency by 70%',
      'Built microservices architecture with gRPC',
      'Established monitoring with Prometheus and Grafana',
      'Mentored 3 junior developers'
    ],
    technologies: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'Docker', 'Prometheus'],
    logo: '/logos/suriatech.png'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Tualang',
    location: 'Bandung, Indonesia', 
    period: '2021 - 2022',
    type: 'full-time',
    description: 'Developed comprehensive digital platform with modern web technologies, focusing on user experience and responsive design.',
    achievements: [
      'Built full-stack digital platform from scratch',
      'Implemented user authentication and authorization',
      'Created responsive mobile-first design',
      'Developed real-time analytics dashboard',
      'Integrated third-party APIs for enhanced functionality'
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    logo: '/logos/tualang.png'
  },
  {
    id: 4,
    title: 'Junior Backend Developer',
    company: 'StartupXYZ',
    location: 'Bandung, Indonesia',
    period: '2020 - 2021', 
    type: 'full-time',
    description: 'Started career building REST APIs and learning backend development fundamentals with Go and PostgreSQL.',
    achievements: [
      'Built RESTful APIs with Go and Gin framework',
      'Implemented database designs with PostgreSQL',
      'Created automated testing suites',
      'Contributed to CI/CD pipeline setup',
      'Learned Docker containerization'
    ],
    technologies: ['Go', 'PostgreSQL', 'Gin', 'Docker', 'Git'],
    logo: '/logos/startup.png'
  }
]

// Function to get experiences - ready for API integration
export const getExperiences = async (): Promise<Experience[]> => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/experiences')
  // return response.json()
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return experiencesData
}
