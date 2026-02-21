export type ExperienceType = 'full-time' | 'freelance' | 'contract'

export interface Tag {
  id: number
  name: string
  slug: string
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  startDate: string // Format: "YYYY-MM-DD"
  endDate?: string | null // Format: "YYYY-MM-DD", nullable
  current: boolean
  description: string
  responsibilities: string[] // Keep as array for flexibility
  technologies: Tag[] // Return as tag objects
  companyUrl?: string
  logoUrl?: string
  metadata?: Record<string, any>
  createdAt: string
  updatedAt: string
}

export interface CreateExperienceRequest {
  title: string
  company: string
  location: string
  startDate: string // Format: "YYYY-MM-DD"
  endDate?: string // Format: "YYYY-MM-DD"
  current: boolean
  description: string
  responsibilities: string[] // Keep as array for flexibility
  technologyIds?: number[] // Tag IDs (preferred)
  technologyNames?: string[] // Alternative: Tag names
  companyUrl?: string
  logoUrl?: string
  metadata?: Record<string, any>
}

export interface UpdateExperienceRequest {
  title?: string
  company?: string
  location?: string
  startDate?: string // Format: "YYYY-MM-DD"
  endDate?: string // Format: "YYYY-MM-DD"
  current?: boolean
  description?: string
  responsibilities?: string[] // Keep as array for flexibility
  technologyIds?: number[] // Tag IDs (preferred)
  technologyNames?: string[] // Alternative: Tag names
  companyUrl?: string
  logoUrl?: string
  metadata?: Record<string, any>
}


