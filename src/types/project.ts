export type ProjectStatus = 'completed' | 'in-progress' | 'planned'

export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  category: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  features: string[]
  status: ProjectStatus
}


