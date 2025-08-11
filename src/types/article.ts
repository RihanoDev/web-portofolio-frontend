export interface Article {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  tags: string[]
  thumbnail: string
  publishDate: string
  readTime: number
  slug: string
  author: {
    name: string
    avatar: string
  }
}


