<template>
  <section class="experience" data-aos="fade-up">
    <h2 class="section-title">Experience</h2>
    <div class="timeline">
      <div v-for="(item, index) in experiences" 
           :key="item.id" 
           class="timeline-item"
           :class="{ 'timeline-item--right': index % 2 !== 0 }"
           data-aos="fade-up"
           :data-aos-delay="index * 200">
        <div class="timeline-content" 
             ref="timelineItems"
             :style="getParallaxStyle(index)">
          <div class="timeline-date">{{ item.period }}</div>
          <div class="timeline-card">
            <h3>{{ item.role }}</h3>
            <h4>{{ item.company }}</h4>
            <p>{{ item.description }}</p>
            <div class="timeline-skills">
              <span v-for="skill in item.skills" 
                    :key="skill" 
                    class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Experience {
  id: number
  period: string
  role: string
  company: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "2024 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    description: "Leading the frontend development team and implementing modern web solutions",
    skills: ["Vue.js", "TypeScript", "AWS"]
  },
  // Add more experiences
]

const timelineItems = ref<HTMLElement[]>([])
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const getParallaxStyle = (index: number) => {
  const offset = scrollY.value * (index % 2 === 0 ? 0.1 : -0.1)
  return {
    transform: `translateY(${offset}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.experience {
  padding: var(--spacing-xl) var(--container-padding);
  background: var(--color-light);
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.timeline {
  position: relative;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-xl) 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--color-primary);
  }
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: var(--spacing-lg);

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--color-primary);
    border-radius: 50%;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
  }

  &--right {
    margin-left: 50%;

    &::before {
      left: -10px;
    }

    .timeline-date {
      left: auto;
      right: calc(100% + var(--spacing-xl));
    }
  }
}

.timeline-content {
  position: relative;
  transition: transform 0.3s ease;
}

.timeline-date {
  position: absolute;
  top: 50%;
  left: calc(100% + var(--spacing-xl));
  transform: translateY(-50%);
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.timeline-card {
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }

  h4 {
    color: var(--color-secondary);
    font-size: 1rem;
    margin-bottom: var(--spacing-md);
  }

  p {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-light);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }

  .timeline-item {
    width: 100%;
    padding-left: var(--spacing-xl);
    margin-left: 0;

    &::before {
      left: -10px;
      right: auto;
    }

    &--right {
      margin-left: 0;
    }
  }

  .timeline-date {
    position: relative;
    left: 0;
    right: auto;
    top: 0;
    transform: none;
    display: inline-block;
    margin-bottom: var(--spacing-md);
  }
}
</style>
