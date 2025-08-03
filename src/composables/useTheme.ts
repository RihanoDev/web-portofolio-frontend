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
    id: 'dark-purple',
    name: 'Dark Purple',
    colors: {
      primary: '#1A1625',
      secondary: '#2D2438',
      tertiary: '#3A2F4A',
      accent: '#8B5CF6',
      text: {
        primary: '#F3F4F6',
        secondary: '#D1D5DB'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        secondary: 'linear-gradient(135deg, #1A1625, #2D2438)'
      }
    }
  },
  {
    id: 'dark-emerald',
    name: 'Dark Emerald',
    colors: {
      primary: '#0F1B0F',
      secondary: '#1F2F1F',
      tertiary: '#2A3F2A',
      accent: '#10B981',
      text: {
        primary: '#F0FDF4',
        secondary: '#D1FAE5'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #10B981, #34D399)',
        secondary: 'linear-gradient(135deg, #0F1B0F, #1F2F1F)'
      }
    }
  },
  {
    id: 'dark-rose',
    name: 'Dark Rose',
    colors: {
      primary: '#1F1419',
      secondary: '#2F1F28',
      tertiary: '#3F2A35',
      accent: '#F43F5E',
      text: {
        primary: '#FDF2F8',
        secondary: '#FECDD3'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #F43F5E, #FB7185)',
        secondary: 'linear-gradient(135deg, #1F1419, #2F1F28)'
      }
    }
  },
  {
    id: 'dark-cyan',
    name: 'Dark Cyan',
    colors: {
      primary: '#0F1419',
      secondary: '#1F2937',
      tertiary: '#374151',
      accent: '#06B6D4',
      text: {
        primary: '#F0F9FF',
        secondary: '#BAE6FD'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
        secondary: 'linear-gradient(135deg, #0F1419, #1F2937)'
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
      accent: '#3B82F6',
      text: {
        primary: '#1E293B',
        secondary: '#64748B'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
        secondary: 'linear-gradient(135deg, #FFFFFF, #F8FAFC)'
      }
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      tertiary: '#334155',
      accent: '#3B82F6',
      text: {
        primary: '#F1F5F9',
        secondary: '#94A3B8'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
        secondary: 'linear-gradient(135deg, #0F172A, #1E293B)'
      }
    }
  },
  {
    id: 'dark-purple',
    name: 'Dark Purple',
    colors: {
      primary: '#1E1B3A',
      secondary: '#2D2B4B',
      tertiary: '#3D3B5B',
      accent: '#8B5CF6',
      text: {
        primary: '#F3F4F6',
        secondary: '#D1D5DB'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        secondary: 'linear-gradient(135deg, #1E1B3A, #2D2B4B)'
      }
    }
  },
  {
    id: 'dark-green',
    name: 'Dark Green',
    colors: {
      primary: '#0C1E1A',
      secondary: '#1A2F2A',
      tertiary: '#284039',
      accent: '#10B981',
      text: {
        primary: '#F0FDF4',
        secondary: '#BBF7D0'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #10B981, #34D399)',
        secondary: 'linear-gradient(135deg, #0C1E1A, #1A2F2A)'
      }
    }
  },
  {
    id: 'light',
    name: 'Light',
    colors: {
      primary: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#E2E8F0',
      accent: '#FF6B00',
      text: {
        primary: '#0F172A',
        secondary: '#475569'
      },
      gradient: {
        primary: 'linear-gradient(135deg, #FF6B00, #FF8E3C)',
        secondary: 'linear-gradient(135deg, #FFFFFF, #F8FAFC)'
      }
    }
  }
]

// Get saved theme from localStorage or default to 'dark-orange'
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
    
    // Apply CSS custom properties
    root.style.setProperty('--color-primary', theme.colors.primary)
    root.style.setProperty('--color-secondary', theme.colors.secondary)
    root.style.setProperty('--color-tertiary', theme.colors.tertiary)
    root.style.setProperty('--color-accent', theme.colors.accent)
    root.style.setProperty('--color-text-primary', theme.colors.text.primary)
    root.style.setProperty('--color-text-secondary', theme.colors.text.secondary)
    root.style.setProperty('--gradient-primary', theme.colors.gradient.primary)
    root.style.setProperty('--gradient-secondary', theme.colors.gradient.secondary)
    
    // Update body background
    document.body.style.backgroundColor = theme.colors.primary
    document.body.style.color = theme.colors.text.primary
  }

  // Apply theme on initialization
  applyTheme(currentTheme.value)

  // Watch for theme changes
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
