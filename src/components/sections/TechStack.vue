<template>
  <section class="tech-stack" data-aos="fade-up">
    <h2 class="section-title">Tech Stack</h2>
    <div class="tech-grid">
      <div v-for="tech in techStack" :key="tech.name" class="tech-card" data-aos="zoom-in" data-aos-delay="150">
        <div class="tech-card__inner">
          <div class="tech-card__front">
            <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
            <h3 class="tech-name">{{ tech.name }}</h3>
          </div>
          <div class="tech-card__back">
            <p class="tech-description">{{ tech.description }}</p>
            <div class="tech-level">
              <div class="level-bar" :style="{ width: tech.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TechItem {
  name: string
  icon: string
  description: string
  level: number
}

const techStack: TechItem[] = [
  {
    name: 'Vue.js',
    icon: '/icons/vue.svg',
    description: 'Frontend framework for building user interfaces',
    level: 90
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    description: 'Typed superset of JavaScript',
    level: 85
  },
  {
    name: 'React',
    icon: '/icons/react.svg',
    description: 'Library for building user interfaces',
    level: 80
  },
  // Add more tech stack items here
]
</script>

<style lang="scss" scoped>
.tech-stack {
  padding: var(--spacing-xl) var(--container-padding);
  background: var(--color-background);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    border-radius: var(--radius-sm);
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.tech-card {
  perspective: 1000px;
  height: 200px;

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
      transform: rotateY(180deg);
    }
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  &__back {
    transform: rotateY(180deg);
    background: var(--color-primary);
    color: var(--color-background);
  }
}

.tech-icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.tech-name {
  font-size: 1.25rem;
  margin: 0;
  color: var(--color-primary);
}

.tech-description {
  margin: 0 0 var(--spacing-md);
  font-size: 0.9rem;
  line-height: 1.4;
}

.tech-level {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-sm);
  overflow: hidden;

  .level-bar {
    height: 100%;
    background: var(--color-background);
    border-radius: var(--radius-sm);
    transition: width 1s ease-in-out;
  }
}
</style>
