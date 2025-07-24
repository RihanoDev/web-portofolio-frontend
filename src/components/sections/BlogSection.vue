<template>
  <section class="blog" data-aos="fade-up">
    <h2 class="section-title">Latest Articles</h2>
    <div class="blog-grid">
      <article v-for="post in blogPosts" 
               :key="post.id" 
               class="blog-card"
               data-aos="fade-up"
               :data-aos-delay="post.id * 100">
        <div class="blog-card__image">
          <img :src="post.image" :alt="post.title" />
          <div class="blog-card__category">{{ post.category }}</div>
        </div>
        <div class="blog-card__content">
          <div class="blog-card__meta">
            <span class="date">{{ formatDate(post.date) }}</span>
            <span class="read-time">{{ post.readTime }} min read</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <router-link :to="'/blog/' + post.slug" class="read-more">
            Read More
            <span class="arrow">→</span>
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: number
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Modern Web Development with Vue 3",
    excerpt: "Learn about the latest features in Vue 3 and how to use them effectively",
    content: "Full article content here...",
    image: "/blog1.jpg",
    category: "Vue.js",
    date: "2025-07-24",
    readTime: 5,
    slug: "modern-web-development-vue3"
  },
  // Add more blog posts here
]

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" scoped>
.blog {
  padding: var(--spacing-xl) var(--container-padding);
  background: var(--color-light);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.blog-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &__image {
    position: relative;
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

  &__category {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    padding: 0.25rem 0.75rem;
    background: var(--color-primary);
    color: white;
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
  }

  &__content {
    padding: var(--spacing-lg);
  }

  &__meta {
    display: flex;
    gap: var(--spacing-md);
    color: var(--color-secondary);
    font-size: 0.875rem;
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    line-height: 1.4;
  }

  p {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: gap 0.3s ease;

  &:hover {
    gap: var(--spacing-md);
    
    .arrow {
      transform: translateX(4px);
    }
  }

  .arrow {
    transition: transform 0.3s ease;
  }
}
</style>
