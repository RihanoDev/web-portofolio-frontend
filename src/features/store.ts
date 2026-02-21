import { defineStore } from 'pinia'

export interface ViewCountsState {
  total: number
  today: number
  week: number
  month: number
  unique: number
  page?: string
}

export interface GlobalState {
  currentPage: string
  viewCounts: ViewCountsState
  isLoading: boolean
  darkMode: boolean
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    currentPage: '/',
    viewCounts: {
      total: 0,
      today: 0,
      week: 0,
      month: 0,
      unique: 0
    },
    isLoading: false,
    darkMode: false
  }),
  
  actions: {
    setCurrentPage(page: string) {
      this.$state.currentPage = page
    },
    
    setViewCounts(counts: ViewCountsState) {
      this.$state.viewCounts = counts
    },
    
    setLoading(loading: boolean) {
      this.$state.isLoading = loading
    },
    
    toggleDarkMode() {
      this.$state.darkMode = !this.$state.darkMode
    }
  },
  
  getters: {
    getViewsFormatted: (state: GlobalState) => {
      return {
        total: state.viewCounts.total.toLocaleString(),
        today: state.viewCounts.today.toLocaleString(),
        week: state.viewCounts.week.toLocaleString(),
        month: state.viewCounts.month.toLocaleString(),
        unique: state.viewCounts.unique.toLocaleString()
      }
    }
  }
})
