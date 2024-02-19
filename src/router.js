import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectList,
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: ProjectDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ]
});

export { router };