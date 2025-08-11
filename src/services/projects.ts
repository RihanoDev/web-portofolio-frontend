// Re-export from data layer for backward compatibility
export * from '../data/projects'

// Legacy function names for existing components
export { getProjects as getAllProjects } from '../data/projects'
export { getProjectsByCategory as filterProjectsByCategory } from '../data/projects'


