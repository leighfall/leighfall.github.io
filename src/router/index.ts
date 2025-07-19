import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/JobsView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
  ],
});

export default router;
