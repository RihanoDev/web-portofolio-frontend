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
  },
  {
    id: 'light',
    name: 'Light',
    colors: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#F1F5F9',
      accent: '#FF6B00',
      text: {
        primary: '#1E293B',
        secondary: '#64748B'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #FF6B00, #FF8E3C)',
        secondary: 'linear-gradient(135deg, #F8FAFC, #F1F5F9)'
      }
    }
  },
  {
    id: 'light-blue',
    name: 'Light Blue',
    colors: {
      primary: '#F8FAFC',
      secondary: '#F1F5F9',
      tertiary: '#E2E8F0',
      accent: '#3B82F6',
      text: {
        primary: '#0F172A',
        secondary: '#475569'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
        secondary: 'linear-gradient(135deg, #F8FAFC, #E2E8F0)'
      }
    }
  },
  {
    id: 'dark-purple',
    name: 'Dark Purple',
    colors: {
      primary: '#1E1B4B',
      secondary: '#312E81',
      tertiary: '#3730A3',
      accent: '#8B5CF6',
      text: {
        primary: '#F3F4F6',
        secondary: '#D1D5DB'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        secondary: 'linear-gradient(135deg, #1E1B4B, #312E81)'
      }
    }
  },
  {
    id: 'dark-green',
    name: 'Dark Green',
    colors: {
      primary: '#064E3B',
      secondary: '#065F46',
      tertiary: '#047857',
      accent: '#10B981',
      text: {
        primary: '#F0FDF4',
        secondary: '#D1FAE5'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #10B981, #34D399)',
        secondary: 'linear-gradient(135deg, #064E3B, #065F46)'
      }
    }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      primary: '#0A0A0A',
      secondary: '#1A0A1A',
      tertiary: '#2A0A2A',
      accent: '#FF00FF',
      text: {
        primary: '#00FFFF',
        secondary: '#FF00AA'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #FF00FF, #00FFFF)',
        secondary: 'linear-gradient(135deg, #0A0A0A, #2A0A2A)'
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
    
    // Extract RGB values from accent color for CSS custom properties
    const accentRgb = theme.colors.accent.replace('#', '')
    const r = parseInt(accentRgb.substring(0, 2), 16)
    const g = parseInt(accentRgb.substring(2, 4), 16)
    const b = parseInt(accentRgb.substring(4, 6), 16)
    root.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`)
    
    // Set theme data attribute for CSS targeting
    document.body.setAttribute('data-theme', theme.id)
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
