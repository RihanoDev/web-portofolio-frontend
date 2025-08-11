// Data exports for easy importing
export * from './projects'
export * from './experiences'
export * from './articles'
export * from './techStack'

// Configuration for API endpoints (for future use)
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  endpoints: {
    projects: '/projects',
    experiences: '/experiences',
    articles: '/articles',
    techStack: '/tech-stack'
  }
}

// Common API helper functions (for future use)
export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`)
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    return response.json()
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    return response.json()
  }
}
