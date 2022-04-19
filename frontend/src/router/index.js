import { createApp } from 'vue'
//import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

//Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Wall',
    component: () => import('../views/Wall.vue')
  },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    },
   
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('../views/User.vue')
    }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;