import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/invitation',
      name: 'Invitation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Invitation.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (from.name === 'Invitation' && to.name !== 'Home') {
    next({ name: 'Home' }); // Redirige a HomeInvitation
  } else {
    next(); // Permite la navegación
  }
})
export default router
