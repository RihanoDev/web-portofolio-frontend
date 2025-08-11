<template>
  <section class="experience" id="experience">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">
        Experience
        <div class="w-20 h-1 bg-[#FF6B00] mx-auto mt-4 rounded-full"></div>
      </h2>
      
      <div class="timeline">
        <div 
          v-for="(item, index) in experiences" 
          :key="index"
          class="timeline__item"
          :class="{ 'timeline__item--right': index % 2 !== 0 }"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div 
            class="timeline__content"
            @mouseenter="startAnimation(index)"
            @mouseleave="stopAnimation(index)"
            ref="timelineContent"
          >
            <div class="timeline__date">{{ item.date }}</div>
            <h3 class="timeline__title">{{ item.title }}</h3>
            <div class="timeline__company">{{ item.company }}</div>
            <p class="timeline__description">{{ item.description }}</p>
            <div class="timeline__skills">
              <span v-for="skill in item.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const timelineItems = ref<HTMLElement[]>([])

onMounted(() => {
  // Get all timeline items after component is mounted
  timelineItems.value = Array.from(document.querySelectorAll('.timeline__content'))
})

const experiences = [
  {
    date: '2023 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    description: 'Lead frontend development for multiple projects using Vue.js and TypeScript.',
    skills: ['Vue.js', 'TypeScript', 'GSAP']
  },
  {
    date: '2021 - 2023',
    title: 'Frontend Developer',
    company: 'Startup XYZ',
    description: 'Developed responsive UI and animations for various web apps.',
    skills: ['JavaScript', 'Vue.js', 'Sass']
  },
  {
    date: '2019 - 2021',
    title: 'Junior Web Developer',
    company: 'Creative Studio',
    description: 'Worked with a team to build landing pages and UI components.',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
  // Tambah pengalaman lain sesuai kebutuhan
]

const startAnimation = (index: number) => {
  const element = timelineItems.value[index]
  if (element) {
    gsap.to(element, {
      rotateY: 10,
      rotateX: 5,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const stopAnimation = (index: number) => {
  const element = timelineItems.value[index]
  if (element) {
    gsap.to(element, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}
</script>

<style lang="scss" scoped>
.experience {
  padding: var(--spacing-xxl) 0;
  background: linear-gradient(to bottom, #151823, #1D2133);
  position: relative;
  overflow: hidden;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: var(--spacing-xxl) auto;
  padding: 2rem;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--color-primary);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__item {
    position: relative;
    width: 50%;
    padding: 0 var(--spacing-lg);
    margin-bottom: var(--spacing-xl);

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: var(--color-primary);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      right: -10px;
    }

    &--right {
      margin-left: 50%;
      padding: 0 var(--spacing-lg);

      &::after {
        left: -10px;
      }
    }
  }

  &__content {
    padding: var(--spacing-lg);
    background: var(--color-light);
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
  }

  &__date {
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }

  &__title {
    font-size: 1.25rem;
    margin: 0 0 var(--spacing-xs);
  }

  &__company {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-sm);
  }

  &__description {
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
}

.skill-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--color-primary);
  color: var(--color-background);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  margin: 0.25rem;
}

@media (max-width: 768px) {
  .timeline {
    &::after {
      left: 31px;
    }

    &__item {
      width: 100%;
      padding-left: calc(var(--spacing-xxl) + var(--spacing-lg));
      padding-right: var(--spacing-md);

      &::after {
        left: 21px;
      }

      &--right {
        margin-left: 0;
        padding-left: calc(var(--spacing-xxl) + var(--spacing-lg));

        &::after {
          left: 21px;
        }
      }
    }
  }
}
</style>