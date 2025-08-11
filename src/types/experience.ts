export type ExperienceType = 'full-time' | 'freelance' | 'contract'

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: ExperienceType
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}


