export interface ViewCountData {
  total: number
  today: number
  week: number
  month: number
  unique: number
}

export interface PageView {
  id?: string
  visitorId: string
  page: string
  userAgent?: string
  ip?: string
  country?: string
  city?: string
  timestamp: string
  sessionId?: string
}

export interface AnalyticsResponse {
  success: boolean
  data: ViewCountData
  message?: string
}

export interface TrackViewRequest {
  page: string
  visitorId: string
  userAgent?: string
  sessionId?: string
  referrer?: string
}

export interface AnalyticsFilter {
  page?: string
  startDate?: string
  endDate?: string
  country?: string
}
