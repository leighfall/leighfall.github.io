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
        {
          path: 'personal',
          name: 'personal',
          component: () => import('../views/PersonalLayout.vue'),
          children: [
            {
              path: '',
              name: 'personal-home',
              component: () => import('../views/PersonalView.vue'),
            },
            // {
            //   path: 'gaming',
            //   name: 'personal-gaming',
            //   component: () => import('../views/personal/GamingView.vue'),
            // },
            {
              path: 'fostering',
              name: 'personal-fostering',
              component: () => import('../views/personal/FosteringView.vue'),
            },
            // {
            //   path: 'reading',
            //   name: 'personal-reading',
            //   component: () => import('../views/personal/ReadingView.vue'),
            // },
            // {
            //   path: 'fitness',
            //   name: 'personal-fitness',
            //   component: () => import('../views/personal/FitnessView.vue'),
            // },
            // {
            //   path: 'crafting',
            //   name: 'personal-crafting',
            //   component: () => import('../views/personal/CraftingView.vue'),
            // },
          ],
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
