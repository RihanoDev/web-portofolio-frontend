import type { Experience, CreateExperienceRequest, UpdateExperienceRequest } from '../types/experience'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1'

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch experiences')
    }
    
    const data = await response.json()
    
    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data
    const apiExperiences = Array.isArray(responseData?.data) ? responseData.data : 
                          Array.isArray(responseData) ? responseData : []
    
    // Map API response to frontend Experience type
    return apiExperiences.map((exp: any) => ({
      id: exp.id,
      title: exp.title,
      company: exp.company,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate,
      current: exp.current,
      description: exp.description,
      responsibilities: exp.responsibilities || [],
      technologies: exp.technologies || [], // Already TagResponse objects
      companyUrl: exp.companyUrl,
      logoUrl: exp.logoUrl,
      metadata: exp.metadata,
      createdAt: exp.createdAt,
      updatedAt: exp.updatedAt
    }))
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return []
  }
}

export async function fetchExperienceById(id: number): Promise<Experience | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch experience with ID: ${id}`)
    }
    
    const data = await response.json()
    const exp = data.data
    
    if (!exp) return null
    
    // Map API response to frontend Experience type
    return {
      id: exp.id,
      title: exp.title,
      company: exp.company,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate,
      current: exp.current,
      description: exp.description,
      responsibilities: exp.responsibilities || [],
      technologies: exp.technologies || [], // Already TagResponse objects
      companyUrl: exp.companyUrl,
      logoUrl: exp.logoUrl,
      metadata: exp.metadata,
      createdAt: exp.createdAt,
      updatedAt: exp.updatedAt
    }
  } catch (error) {
    console.error(`Error fetching experience with ID ${id}:`, error)
    return null
  }
}

export async function createExperience(request: CreateExperienceRequest): Promise<Experience> {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    
    if (!response.ok) {
      throw new Error('Failed to create experience')
    }
    
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error creating experience:', error)
    throw error
  }
}

export async function updateExperience(id: number, request: UpdateExperienceRequest): Promise<Experience> {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    
    if (!response.ok) {
      throw new Error(`Failed to update experience with ID: ${id}`)
    }
    
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error updating experience with ID ${id}:`, error)
    throw error
  }
}

export async function deleteExperience(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
      method: 'DELETE',
    })
    
    if (!response.ok) {
      throw new Error(`Failed to delete experience with ID: ${id}`)
    }
  } catch (error) {
    console.error(`Error deleting experience with ID ${id}:`, error)
    throw error
  }
}
