import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'experience',
          name: 'experience',
          component: () => import('../views/ExperienceView.vue'),
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/Services.vue'),
        },
        // Add more child routes as needed
      ],
    },
    // Optionally, add a catch-all 404 route here
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
