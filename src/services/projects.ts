import type { 
  Project, 
  ProjectListItem, 
  ProjectTag,
  ProjectCategory
} from '../types/project'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1'

export async function fetchProjects(): Promise<ProjectListItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const projects = Array.isArray(responseData?.data) ? responseData.data : 
                    Array.isArray(responseData) ? responseData : []
    
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function fetchPublishedProjects(): Promise<ProjectListItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/published`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch published projects')
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const projects = Array.isArray(responseData?.data) ? responseData.data : 
                    Array.isArray(responseData) ? responseData : []
    
    return projects
  } catch (error) {
    console.error('Error fetching published projects:', error)
    return []
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/slug/${slug}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch project with slug: ${slug}`)
    }
    
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error)
    return null
  }
}

export async function fetchProjectsByCategory(slug: string): Promise<ProjectListItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/category/${slug}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects for category: ${slug}`)
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const projects = Array.isArray(responseData?.data) ? responseData.data : 
                    Array.isArray(responseData) ? responseData : []
    
    return projects
  } catch (error) {
    console.error(`Error fetching projects for category ${slug}:`, error)
    return []
  }
}

export async function fetchProjectsByTechnology(name: string): Promise<ProjectListItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/technology/${name}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects for technology: ${name}`)
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const projects = Array.isArray(responseData?.data) ? responseData.data : 
                    Array.isArray(responseData) ? responseData : []
    
    return projects
  } catch (error) {
    console.error(`Error fetching projects for technology ${name}:`, error)
    return []
  }
}

export async function fetchProjectCategories(): Promise<ProjectCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch project categories')
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const categories = Array.isArray(responseData?.data) ? responseData.data : 
                      Array.isArray(responseData) ? responseData : []
    
    return categories
  } catch (error) {
    console.error('Error fetching project categories:', error)
    return []
  }
}

export async function fetchTechnologies(): Promise<ProjectTag[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/tags`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch technologies')
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const technologies = Array.isArray(responseData?.data) ? responseData.data : 
                        Array.isArray(responseData) ? responseData : []
    
    return technologies
  } catch (error) {
    console.error('Error fetching technologies:', error)
    return []
  }
}

// Track project view
export async function trackProjectView(projectId: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'project_view',
        entityId: projectId,
      }),
    })
    
    if (!response.ok) {
      throw new Error(`Failed to track project view for ID: ${projectId}`)
    }
  } catch (error) {
    console.error(`Error tracking project view for ID ${projectId}:`, error)
  }
}
