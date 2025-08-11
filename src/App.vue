<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import './styles/variables.css'
import './styles/global-background.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { useTheme } from './hooks/useTheme'

// Initialize theme system
const { currentTheme } = useTheme()

onMounted(() => {
  // Theme is automatically applied by the useTheme composable
  console.log('Current theme:', currentTheme.value.name)
})
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap');

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0F1419;
  color: #F8FAFC;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  line-height: 1.6;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Enhanced gradient background */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 0, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 40%),
    linear-gradient(135deg, #0F1419 0%, #1A1E2E 50%, #252A3F 100%);
  pointer-events: none;
  z-index: -3;
}

/* Subtle noise texture overlay */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: -2;
  opacity: 0.1;
}

/* Global utility classes */
.glass {
  background: rgba(26, 30, 46, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-strong {
  background: rgba(26, 30, 46, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-subtle {
  background: rgba(26, 30, 46, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Enhanced animations */
@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 107, 0, 0.5);
  }
}

/* Enhanced tech stack floating background pattern */
.tech-bg-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.04;
}

.tech-bg-logo {
  position: absolute;
  font-size: 2.5rem;
  animation: gentle-float 10s ease-in-out infinite;
  user-select: none;
  color: rgba(255, 107, 0, 0.6);
  filter: blur(0.5px);
}

.tech-bg-logo.go { top: 8%; left: 12%; animation-delay: 0s; }
.tech-bg-logo.postgres { top: 18%; right: 18%; animation-delay: -2.5s; }
.tech-bg-logo.redis { top: 28%; left: 8%; animation-delay: -4.2s; }
.tech-bg-logo.docker { top: 12%; left: 65%; animation-delay: -1.3s; }
.tech-bg-logo.k8s { top: 42%; right: 12%; animation-delay: -3.7s; }
.tech-bg-logo.git { top: 58%; left: 18%; animation-delay: -5.1s; }
.tech-bg-logo.linux { top: 68%; right: 22%; animation-delay: -1.8s; }
.tech-bg-logo.api { top: 78%; left: 48%; animation-delay: -3.9s; }
.tech-bg-logo.grpc { top: 22%; left: 82%; animation-delay: -2.7s; }
.tech-bg-logo.kafka { top: 52%; right: 8%; animation-delay: -4.6s; }
.tech-bg-logo.js { top: 32%; left: 38%; animation-delay: -6.2s; }
.tech-bg-logo.vue { top: 62%; left: 72%; animation-delay: -0.8s; }
.tech-bg-logo.react { top: 48%; right: 38%; animation-delay: -5.8s; }
.tech-bg-logo.ts { top: 72%; right: 48%; animation-delay: -7.1s; }
.tech-bg-logo.node { top: 82%; left: 28%; animation-delay: -2.9s; }
.tech-bg-logo.mongo { top: 38%; left: 88%; animation-delay: -4.4s; }

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(26, 30, 46, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 107, 0, 0.6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 107, 0, 0.8);
}

/* Text selection */
::selection {
  background: rgba(255, 107, 0, 0.3);
  color: #F8FAFC;
}

/* Focus styles */
*:focus {
  outline: 2px solid rgba(255, 107, 0, 0.5);
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tech-bg-logo {
    font-size: 1.8rem;
  }
  
  html {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .tech-bg-logo {
    font-size: 1.5rem;
  }
}

/* Print styles */
@media print {
  body::before,
  body::after,
  .tech-bg-pattern {
    display: none;
  }
}
</style>
