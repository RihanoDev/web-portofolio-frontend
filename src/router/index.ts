import { createRouter, createWebHistory } from 'vue-router'
import type { 
  RouteRecordRaw,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded 
} from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: () => import('../views/ProjectDetail.vue'),
    props: true
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article/:slug',
    name: 'article-detail',
    component: () => import('../views/ArticleDetail.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume.vue')
  },
  // Handle 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalizedLoaded,
    savedPosition: { left: number; top: number } | null
  ) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})
export default router
