<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="social-button group"
    :aria-label="label"
    style="outline: none !important; -webkit-tap-highlight-color: transparent !important;"
    @focus="removeOutline"
    @blur="removeOutline"
  >
    <i :class="icon" class="text-lg"></i>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string
  icon: string
  label: string
}

defineProps<Props>()

const removeOutline = (event: Event) => {
  const target = event.target as HTMLElement
  if (target) {
    target.style.outline = 'none'
    target.style.border = '1px solid rgba(255, 255, 255, 0.1)'
  }
}
</script>

<style scoped>
.social-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--surface-rgb), 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--secondary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  outline: none !important;
  text-decoration: none;
}

.social-button:focus,
.social-button:active,
.social-button:focus-visible {
  outline: none !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  -webkit-tap-highlight-color: transparent !important;
}

/* Force override any browser focus styles */
.social-button:focus {
  box-shadow: none !important;
  outline: none !important;
}

.social-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-button:hover::before {
  left: 100%;
}

.social-button:hover {
  background: linear-gradient(135deg, var(--accent), rgba(var(--accent-rgb), 0.8));
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 
    0 12px 30px rgba(var(--accent-rgb), 0.4),
    0 0 0 1px rgba(255, 107, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: var(--accent);
}

.social-button:active {
  transform: translateY(-1px) scale(1.05);
  transition: all 0.1s ease;
}

.social-button i {
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.social-button:hover i {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* Specific social media colors */
.social-button[href*="github"]:hover {
  background: linear-gradient(135deg, #333, #555);
}

.social-button[href*="linkedin"]:hover {
  background: linear-gradient(135deg, #0077B5, #005885);
}

.social-button[href*="twitter"]:hover {
  background: linear-gradient(135deg, #1DA1F2, #0d8bd9);
}

.social-button[href*="instagram"]:hover {
  background: linear-gradient(135deg, #E4405F, #C13584);
}

.social-button[href*="mailto"]:hover {
  background: linear-gradient(135deg, #EA4335, #D33B2C);
}
</style>
