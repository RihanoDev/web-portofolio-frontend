import type { ViewCountData, TrackViewRequest, AnalyticsResponse, AnalyticsFilter } from '../types/analytics'

// Configuration from environment variables
const config = {
  apiUrl: import.meta.env.VITE_ANALYTICS_API_URL || 'http://localhost:3001/api/v1',
  apiKey: import.meta.env.VITE_ANALYTICS_API_KEY || '',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false',
  debugMode: import.meta.env.VITE_DEBUG_ANALYTICS === 'true'
}

class AnalyticsService {
  private readonly baseUrl: string
  private readonly apiKey: string
  private readonly enabled: boolean

  constructor() {
    this.baseUrl = config.apiUrl
    this.apiKey = config.apiKey
    this.enabled = config.enableAnalytics

    if (config.debugMode) {
      console.log('Analytics Service initialized:', {
        baseUrl: this.baseUrl,
        hasApiKey: !!this.apiKey,
        enabled: this.enabled
      })
    }
  }

  /**
   * Track a page view
   */
  async trackView(data: TrackViewRequest): Promise<AnalyticsResponse> {
    if (!this.enabled) {
      if (config.debugMode) {
        console.log('Analytics tracking disabled, using fallback data')
      }
      return await this.getFallbackResponse()
    }

    let requestTimeout: number | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      requestTimeout = window.setTimeout(() => {
        reject(new Error('Request timed out after 5 seconds'));
      }, 5000); // 5 second timeout
    });

    try {
      // Race between the actual request and a timeout
      const responsePromise = fetch(`${this.baseUrl}/analytics/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
          ...(this.apiKey && { 'X-API-Key': this.apiKey })
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || undefined
        })
      });
      
      // Use Promise.race to implement timeout
      const response = await Promise.race([responsePromise, timeoutPromise]);
      
      // Clear timeout since we got a response
      clearTimeout(requestTimeout);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error tracking view:', error)
      
      // Clear timeout if it's an error other than timeout
      if (requestTimeout) clearTimeout(requestTimeout);
      
      // Fallback to local storage if API fails
      return this.fallbackTrackView(data)
    }
  }

  /**
   * Get view count for a specific page or overall
   */
  async getViewCount(page?: string): Promise<ViewCountData> {
    let requestTimeout: number | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      requestTimeout = window.setTimeout(() => {
        reject(new Error('Request timed out after 3 seconds'));
      }, 3000); // 3 second timeout
    });

    try {
      const url = page 
        ? `${this.baseUrl}/analytics/views?page=${encodeURIComponent(page)}`
        : `${this.baseUrl}/analytics/views`

      const responsePromise = fetch(url, {
        headers: {
          ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
          ...(this.apiKey && { 'X-API-Key': this.apiKey })
        },
        // Use cache: 'no-store' to prevent caching of analytics data
        cache: 'no-store'
      });
      
      // Use Promise.race to implement timeout
      const response = await Promise.race([responsePromise, timeoutPromise]);
      
      // Clear timeout since we got a response
      clearTimeout(requestTimeout);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: AnalyticsResponse = await response.json()
      
      // Add debug logging
      if (config.debugMode) {
        console.log(`View count for ${page || 'all pages'}:`, result.data);
      }
      
      return result.data
    } catch (error) {
      console.error('Error fetching view count:', error)
      
      // Clear timeout if it's an error other than timeout
      if (requestTimeout) clearTimeout(requestTimeout);
      
      // Fallback to local storage if API fails
      return this.fallbackGetViewCount(page)
    }
  }

  /**
   * Get analytics data with filters
   */
  async getAnalytics(filters: AnalyticsFilter = {}): Promise<ViewCountData> {
    try {
      const params = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value)
      })

      const response = await fetch(`${this.baseUrl}/analytics?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'X-API-Key': this.apiKey
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: AnalyticsResponse = await response.json()
      return result.data
    } catch (error) {
      console.error('Error fetching analytics:', error)
      return this.fallbackGetViewCount()
    }
  }

  /**
   * Fallback method using localStorage when API is unavailable
   */
  private fallbackTrackView(data: TrackViewRequest): AnalyticsResponse {
    try {
      const viewData = {
        ...data,
        id: `view_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ip: 'unknown',
        country: 'unknown',
        city: 'unknown'
      }

      // Get existing views
      const existingViews = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]')
      existingViews.push(viewData)

      // Keep only last 2000 views to prevent localStorage bloat
      const recentViews = existingViews.slice(-2000)
      localStorage.setItem('portfolio_analytics', JSON.stringify(recentViews))

      // Calculate stats
      const stats = this.calculateStats(recentViews, data.page)

      return {
        success: true,
        data: stats,
        message: 'View tracked locally (API unavailable)'
      }
    } catch (error) {
      console.error('Fallback tracking failed:', error)
      return {
        success: false,
        data: { total: 0, today: 0, week: 0, month: 0, unique: 0 },
        message: 'Failed to track view'
      }
    }
  }

  /**
   * Fallback method for getting view count from localStorage
   */
  private fallbackGetViewCount(page?: string): ViewCountData {
    try {
      const views = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]')
      return this.calculateStats(views, page)
    } catch (error) {
      console.error('Fallback view count failed:', error)
      return { total: 0, today: 0, week: 0, month: 0, unique: 0 }
    }
  }

  /**
   * Calculate statistics from view data
   */
  private calculateStats(views: any[], page?: string): ViewCountData {
    // Filter by page if specified
    const filteredViews = page 
      ? views.filter(view => view.page === page)
      : views

    const now = new Date()
    const today = now.toDateString()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    // Calculate counts
    const total = filteredViews.length
    const todayViews = filteredViews.filter(view => {
      const viewDate = new Date(view.timestamp).toDateString()
      return viewDate === today
    }).length

    const weekViews = filteredViews.filter(view => {
      const viewDate = new Date(view.timestamp)
      return viewDate >= weekAgo
    }).length

    const monthViews = filteredViews.filter(view => {
      const viewDate = new Date(view.timestamp)
      return viewDate >= monthAgo
    }).length

    // Count unique visitors
    const uniqueVisitorIds = new Set(filteredViews.map(view => view.visitorId))
    const unique = uniqueVisitorIds.size

    return {
      total,
      today: todayViews,
      week: weekViews,
      month: monthViews,
      unique
    }
  }

  /**
   * Get fallback response when API is unavailable
   */
  private async getFallbackResponse(): Promise<AnalyticsResponse> {
    const fallbackData = await this.getViewCount()
    return {
      success: true,
      message: 'Using offline data',
      data: {
        total: fallbackData.total,
        today: fallbackData.today,
        week: fallbackData.week,
        month: fallbackData.month,
        unique: fallbackData.unique
      }
    }
  }

  /**
   * Initialize with demo data if no existing data
   */
  initializeDemoData(): void {
    const existingData = localStorage.getItem('portfolio_analytics')
    if (!existingData) {
      const demoViews = this.generateDemoData()
      localStorage.setItem('portfolio_analytics', JSON.stringify(demoViews))
    }
  }

  /**
   * Generate realistic demo data for portfolio
   */
  private generateDemoData(): any[] {
    const views = []
    const now = new Date()
    const pages = ['/', '/about', '/projects', '/articles', '/contact', '/resume']
    
    // Generate data for the past 90 days
    for (let i = 90; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      
      // More views on weekdays, fewer on weekends
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const baseViews = isWeekend ? 15 : 35
      const dailyViews = Math.floor(Math.random() * 20) + baseViews
      
      for (let j = 0; j < dailyViews; j++) {
        const randomHour = Math.floor(Math.random() * 24)
        const randomMinute = Math.floor(Math.random() * 60)
        const viewTime = new Date(date)
        viewTime.setHours(randomHour, randomMinute, 0, 0)
        
        views.push({
          id: `demo_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
          visitorId: `visitor_${Math.floor(Math.random() * 1000)}_${Math.random().toString(36).substring(2, 7)}`,
          page: pages[Math.floor(Math.random() * pages.length)],
          timestamp: viewTime.toISOString(),
          userAgent: 'Demo User Agent',
          ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
          country: ['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Philippines'][Math.floor(Math.random() * 5)],
          city: ['Jakarta', 'Singapore', 'Kuala Lumpur', 'Bangkok', 'Manila'][Math.floor(Math.random() * 5)]
        })
      }
    }
    
    return views
  }
}

// Create singleton instance
export const analyticsService = new AnalyticsService()

// Export the class for testing or custom instances
export { AnalyticsService }
