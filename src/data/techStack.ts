// Tech stack data type
export interface TechStack {
  id: number
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
  icon: string
  level: number // 1-5 proficiency level
  color?: string
  description?: string
}

// Dummy data - will be replaced with API calls in the future
export const techStackData: TechStack[] = [
  // Backend
  {
    id: 1,
    name: 'Go',
    category: 'backend',
    icon: 'devicon-go-original-wordmark',
    level: 5,
    color: '#00ADD8',
    description: 'Primary backend language for high-performance APIs'
  },
  {
    id: 2,
    name: 'Node.js',
    category: 'backend',
    icon: 'devicon-nodejs-plain',
    level: 4,
    color: '#339933',
    description: 'JavaScript runtime for scalable applications'
  },
  {
    id: 3,
    name: 'Python',
    category: 'backend',
    icon: 'devicon-python-plain',
    level: 3,
    color: '#3776AB',
    description: 'Used for scripts and data processing'
  },

  // Frontend
  {
    id: 4,
    name: 'Vue.js',
    category: 'frontend',
    icon: 'devicon-vuejs-plain',
    level: 4,
    color: '#4FC08D',
    description: 'Progressive framework for building user interfaces'
  },
  {
    id: 5,
    name: 'TypeScript',
    category: 'frontend',
    icon: 'devicon-typescript-plain',
    level: 4,
    color: '#3178C6',
    description: 'Typed JavaScript for better development experience'
  },
  {
    id: 6,
    name: 'React',
    category: 'frontend',
    icon: 'devicon-react-original',
    level: 3,
    color: '#61DAFB',
    description: 'Library for building component-based UIs'
  },

  // Database
  {
    id: 7,
    name: 'PostgreSQL',
    category: 'database',
    icon: 'devicon-postgresql-plain',
    level: 5,
    color: '#336791',
    description: 'Advanced open-source relational database'
  },
  {
    id: 8,
    name: 'Redis',
    category: 'database',
    icon: 'devicon-redis-plain',
    level: 4,
    color: '#DC382D',
    description: 'In-memory data structure store for caching'
  },
  {
    id: 9,
    name: 'MongoDB',
    category: 'database',
    icon: 'devicon-mongodb-plain',
    level: 3,
    color: '#47A248',
    description: 'NoSQL database for flexible data storage'
  },

  // DevOps
  {
    id: 10,
    name: 'Docker',
    category: 'devops',
    icon: 'devicon-docker-plain',
    level: 4,
    color: '#2496ED',
    description: 'Containerization platform for deployment'
  },
  {
    id: 11,
    name: 'Kubernetes',
    category: 'devops',
    icon: 'devicon-kubernetes-plain',
    level: 3,
    color: '#326CE5',
    description: 'Container orchestration platform'
  },
  {
    id: 12,
    name: 'GitHub Actions',
    category: 'devops',
    icon: 'devicon-github-original',
    level: 4,
    color: '#181717',
    description: 'CI/CD automation platform'
  },

  // Tools
  {
    id: 13,
    name: 'Git',
    category: 'tools',
    icon: 'devicon-git-plain',
    level: 5,
    color: '#F05032',
    description: 'Version control system'
  },
  {
    id: 14,
    name: 'VS Code',
    category: 'tools',
    icon: 'devicon-vscode-plain',
    level: 5,
    color: '#007ACC',
    description: 'Primary code editor'
  },
  {
    id: 15,
    name: 'Postman',
    category: 'tools',
    icon: 'devicon-postman-plain',
    level: 4,
    color: '#FF6C37',
    description: 'API development and testing tool'
  }
]

// Function to get tech stack - ready for API integration
export const getTechStack = async (): Promise<TechStack[]> => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/tech-stack')
  // return response.json()
  
  // Simulate API delay for development
  await new Promise(resolve => setTimeout(resolve, 100))
  return techStackData
}

// Function to get tech stack by category
export const getTechStackByCategory = async (category: string): Promise<TechStack[]> => {
  const techStack = await getTechStack()
  if (category === 'all') return techStack
  return techStack.filter(tech => tech.category === category)
}

// Function to get featured tech stack (high proficiency)
export const getFeaturedTechStack = async (): Promise<TechStack[]> => {
  const techStack = await getTechStack()
  return techStack.filter(tech => tech.level >= 4)
}

// Function to get tech stack by proficiency level
export const getTechStackByLevel = async (minLevel: number): Promise<TechStack[]> => {
  const techStack = await getTechStack()
  return techStack.filter(tech => tech.level >= minLevel)
}
