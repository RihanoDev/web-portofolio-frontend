import { ref, computed, watch } from 'vue'

export interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    tertiary: string
    accent: string
    text: {
      primary: string
      secondary: string
    }
    gradient: {
      primary: string
      secondary: string
    }
  }
}

export const themes: Theme[] = [
  {
    id: 'dark-orange',
    name: 'Dark Orange',
    colors: {
      primary: '#1A1E2E',
      secondary: '#252A3F',
      tertiary: '#2A3041',
      accent: '#FF6B00',
      text: {
        primary: '#E2E8F0',
        secondary: '#B0B3C7'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #FF6B00, #FF8E3C)',
        secondary: 'linear-gradient(135deg, #1A1E2E, #252A3F)'
      }
    }
  },
  {
    id: 'dark-blue',
    name: 'Dark Blue',
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      tertiary: '#334155',
      accent: '#3B82F6',
      text: {
        primary: '#F1F5F9',
        secondary: '#CBD5E1'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
        secondary: 'linear-gradient(135deg, #0F172A, #1E293B)'
      }
    }
  }
]

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark-orange'
const currentThemeId = ref<string>(savedTheme)

export const useTheme = () => {
  const currentTheme = computed(() => 
    themes.find(theme => theme.id === currentThemeId.value) || themes[0]
  )

  const setTheme = (themeId: string) => {
    currentThemeId.value = themeId
    localStorage.setItem('portfolio-theme', themeId)
    applyTheme(currentTheme.value)
  }

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', theme.colors.primary)
    root.style.setProperty('--color-secondary', theme.colors.secondary)
    root.style.setProperty('--color-tertiary', theme.colors.tertiary)
    root.style.setProperty('--color-accent', theme.colors.accent)
    root.style.setProperty('--color-text-primary', theme.colors.text.primary)
    root.style.setProperty('--color-text-secondary', theme.colors.text.secondary)
    root.style.setProperty('--gradient-primary', theme.colors.gradient.primary)
    root.style.setProperty('--gradient-secondary', theme.colors.gradient.secondary)
    document.body.style.backgroundColor = theme.colors.primary
    document.body.style.color = theme.colors.text.primary
  }

  applyTheme(currentTheme.value)

  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  }, { immediate: true })

  return {
    themes,
    currentTheme,
    currentThemeId,
    setTheme
  }
}
