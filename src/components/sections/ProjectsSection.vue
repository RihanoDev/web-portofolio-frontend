<template>
  <section class="projects" data-aos="fade-up">
    <h2 class="section-title">Projects</h2>
    <div class="projects-gallery" ref="gallery">
      <div v-for="project in projects" 
           :key="project.id" 
           class="project-card"
           data-aos="fade-up"
           :data-aos-delay="project.id * 100">
        <div class="project-card__inner" 
             :style="getCardStyle(project.id)"
             @mousemove="handleMouseMove"
             @mouseleave="handleMouseLeave">
          <div class="project-card__image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-card__content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-card__tech">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-card__links">
              <a :href="project.demo" target="_blank" class="btn btn--primary">Live Demo</a>
              <a :href="project.github" target="_blank" class="btn btn--secondary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No need for ref import if we're not using it
import gsap from 'gsap'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demo: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web application with stunning UI/UX",
    image: "/project1.jpg",
    technologies: ["Vue.js", "TypeScript", "GSAP"],
    demo: "https://demo.com",
    github: "https://github.com"
  },
  // Add more projects here
]

const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10

  gsap.to(card, {
    rotateX,
    rotateY,
    duration: 0.5,
    ease: 'power2.out',
    transformPerspective: 1000
  })
}

const handleMouseLeave = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const getCardStyle = (id: number) => ({
  '--delay': `${id * 0.1}s`
})
</script>

<style lang="scss" scoped>
.projects {
  padding: var(--spacing-xl) var(--container-padding);
  background: var(--color-background);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.projects-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.project-card {
  perspective: 1000px;
  
  &__inner {
    position: relative;
    border-radius: var(--radius-lg);
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  &__content {
    padding: var(--spacing-lg);

    h3 {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }

    p {
      color: var(--color-secondary);
      margin-bottom: var(--spacing-md);
    }
  }

  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }

  &__links {
    display: flex;
    gap: var(--spacing-md);
  }
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-light);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &--primary {
    background: var(--color-primary);
    color: var(--color-background);
  }

  &--secondary {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
  }
}
</style>
