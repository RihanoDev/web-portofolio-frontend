export type ArticleStatus = 'draft' | 'published' | 'private'

export interface ArticleImage {
  id: string
  url: string
  caption?: string
  altText?: string
  sortOrder?: number
}

export interface ArticleVideo {
  id: string
  url: string
  caption?: string
  sortOrder?: number
}

export interface ArticleCategory {
  id: number
  name: string
  slug: string
}

export interface ArticleTag {
  id: number
  name: string
  slug: string
}

export interface ArticleAuthor {
  id: number
  name: string
  username: string
  avatarUrl?: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  featuredImageUrl?: string
  status: ArticleStatus
  author: ArticleAuthor
  categories: ArticleCategory[]
  tags: ArticleTag[]
  publishedAt?: string
  readTime: number
  viewCount: number
  images?: ArticleImage[]
  videos?: ArticleVideo[]
  metadata?: Record<string, any>
  createdAt: string
  updatedAt: string
}

// Simplified version for list views
export interface ArticleListItem {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImageUrl?: string
  status: ArticleStatus
  authorName: string
  categories: string[]
  tags: ArticleTag[]
  publishedAt?: string
  readTime: number
  viewCount: number
  createdAt: string
}

