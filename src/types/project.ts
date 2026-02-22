export type ProjectStatus = 'draft' | 'published' | 'private'

export interface ProjectImage {
  id: string
  url: string
  caption?: string
  sortOrder?: number
}

export interface ProjectVideo {
  id: string
  url: string
  caption?: string
  sortOrder?: number
}

export interface ProjectCategory {
  id: number
  name: string
  slug: string
}

export interface ProjectTag {
  id: number
  name: string
  slug: string
}

export interface ProjectAuthor {
  id: number
  name: string
  username: string
  avatarUrl?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnailUrl?: string
  status: ProjectStatus
  category?: ProjectCategory
  categories?: ProjectCategory[]
  author: ProjectAuthor
  githubUrl?: string
  liveDemoUrl?: string
  images?: ProjectImage[]
  videos?: ProjectVideo[]
  technologies: ProjectTag[]
  tags?: ProjectTag[]
  metadata?: Record<string, any>
  createdAt: string
  updatedAt: string
  features?: string[] // Extracted from metadata or content for UI
}

// Simplified version for list views
export interface ProjectListItem {
  id: string
  title: string
  slug: string
  description: string
  thumbnailUrl?: string
  status: ProjectStatus
  category?: string
  categories?: string[]
  categoryModels?: ProjectCategory[]
  authorName: string
  technologies: (string | ProjectTag)[]
  tags?: (string | ProjectTag)[]
  tagStrs?: string[]
  technologyStrs?: string[]
  githubUrl?: string
  liveDemoUrl?: string
  createdAt: string
}

