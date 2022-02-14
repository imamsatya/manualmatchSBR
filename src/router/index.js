import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MyLayout.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '/home',
      component: () => import('../views/Home.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MyLayout.vue')
  },
  {
    path: '/matching',
    name: 'Matching',
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      component: () => import('../views/Matching.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Home.vue'),
    children: [{
      path: '',
      component: () => import('../views/About.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  
  // {
  //   path: '/MyLayout',
  //   name: 'MyLayout',
  //   component: () => import('../views/MyLayout.vue'),
  //   children: [{
  //     path: '',
  //     component: () => import('../views/About.vue')
  //   }],
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
