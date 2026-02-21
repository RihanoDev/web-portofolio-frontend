import type { Experience } from '../types/experience'
import { fetchExperiences as fetchExperiencesFromAPI } from '../services/experiences'

// Dummy data - kept as fallback
export const experiencesData: Experience[] = [
  {
    id: 1,
    title: 'Backend Engineer',
    company: 'BRI API',
    location: 'Jakarta, Indonesia',
    startDate: '2023-01-01',
    endDate: null,
    current: true,
    description: 'Developed and maintained high-performance payment gateway systems processing $500K+ monthly transaction volume with 99.9% uptime.',
    responsibilities: [
      'Built payment gateway handling $500K+ monthly transactions',
      'Implemented fraud detection reducing false positives by 40%',
      'Achieved 99.9% system uptime with comprehensive monitoring',
      'Led PCI DSS compliance implementation',
      'Optimized database queries improving response time by 60%'
    ],
    technologies: [
      { id: 1, name: 'Go', slug: 'go' },
      { id: 2, name: 'PostgreSQL', slug: 'postgresql' },
      { id: 3, name: 'Redis', slug: 'redis' },
      { id: 4, name: 'REST API', slug: 'rest-api' },
      { id: 5, name: 'Docker', slug: 'docker' },
      { id: 6, name: 'Kubernetes', slug: 'kubernetes' }
    ],
    logoUrl: '/logos/bri.png',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Senior Backend Developer',
    company: 'SuriaTech',
    location: 'Bandung, Indonesia',
    startDate: '2022-01-01',
    endDate: '2023-01-01',
    current: false,
    description: 'Built scalable backend systems handling 50K+ requests per hour with advanced caching strategies and microservices architecture.',
    responsibilities: [
      'Designed systems handling 50K+ requests/hour',
      'Implemented Redis caching reducing latency by 70%',
      'Built microservices architecture with gRPC',
      'Established monitoring with Prometheus and Grafana',
      'Mentored 3 junior developers'
    ],
    technologies: [
      { id: 1, name: 'Go', slug: 'go' },
      { id: 2, name: 'PostgreSQL', slug: 'postgresql' },
      { id: 3, name: 'Redis', slug: 'redis' },
      { id: 7, name: 'gRPC', slug: 'grpc' },
      { id: 5, name: 'Docker', slug: 'docker' },
      { id: 8, name: 'Prometheus', slug: 'prometheus' }
    ],
    logoUrl: '/logos/suriatech.png',
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Tualang',
    location: 'Bandung, Indonesia',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    current: false,
    description: 'Developed comprehensive digital platform with modern web technologies, focusing on user experience and responsive design.',
    responsibilities: [
      'Built full-stack digital platform from scratch',
      'Implemented user authentication and authorization',
      'Created responsive mobile-first design',
      'Developed real-time analytics dashboard',
      'Integrated third-party APIs for enhanced functionality'
    ],
    technologies: [
      { id: 9, name: 'Vue.js', slug: 'vuejs' },
      { id: 10, name: 'Node.js', slug: 'nodejs' },
      { id: 2, name: 'PostgreSQL', slug: 'postgresql' },
      { id: 3, name: 'Redis', slug: 'redis' },
      { id: 5, name: 'Docker', slug: 'docker' }
    ],
    logoUrl: '/logos/tualang.png',
    createdAt: '2021-01-01T00:00:00Z',
    updatedAt: '2022-01-01T00:00:00Z'
  },
  {
    id: 4,
    title: 'Junior Backend Developer',
    company: 'StartupXYZ',
    location: 'Bandung, Indonesia',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    current: false,
    description: 'Started career building REST APIs and learning backend development fundamentals with Go and PostgreSQL.',
    responsibilities: [
      'Built RESTful APIs with Go and Gin framework',
      'Implemented database designs with PostgreSQL',
      'Created automated testing suites',
      'Contributed to CI/CD pipeline setup',
      'Learned Docker containerization'
    ],
    technologies: [
      { id: 1, name: 'Go', slug: 'go' },
      { id: 2, name: 'PostgreSQL', slug: 'postgresql' },
      { id: 11, name: 'Gin', slug: 'gin' },
      { id: 5, name: 'Docker', slug: 'docker' },
      { id: 12, name: 'Git', slug: 'git' }
    ],
    logoUrl: '/logos/startup.png',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2021-01-01T00:00:00Z'
  }
]

// Function to get experiences - now uses API with fallback to dummy data
export const getExperiences = async (): Promise<Experience[]> => {
  try {
    // Try to fetch from API first
    const apiExperiences = await fetchExperiencesFromAPI()
    
    // If API returns data, use it; otherwise fallback to dummy data
    if (apiExperiences && apiExperiences.length > 0) {
      console.log('Using experiences from API:', apiExperiences)
      return apiExperiences
    } else {
      console.log('No API data, using fallback experiences')
      return experiencesData
    }
  } catch (error) {
    console.error('API failed, using fallback experiences:', error)
    return experiencesData
  }
}
