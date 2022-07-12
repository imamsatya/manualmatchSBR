import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginPage.vue'
import store from '../store/index.js'
const routes = [
  {
    path: '/',
    name: 'login',
    //karena inisiasi awal maka tidak perlu lazy load
    // component: () => import('../views/LoginPage.vue'),
    component: Login
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MyLayout.vue')
  },
  {
    path: '/assessment',
   
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      name: 'assessment',
      component: () => import(/* webpackChunkName: "Assessment"*/'../views/Assessment.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MyLayout.vue')
  },
  {
    path: '/matching',

    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      name: 'matching',
      component: () => import(/* webpackChunkName: "Matching"*/'../views/Matching.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/dashboard/admin',
 
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '/dashboard/admin',
      name: 'dashboardAdmin',
      component: () => import(/* webpackChunkName: "DashboardAdmin"*/'../views/DashboardAdmin.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/dashboard',
 
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '/dashboard',
      name: 'dashboardUser',
      component: () => import(/* webpackChunkName: "DashboardAdmin"*/'../views/DashboardUser.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/kegiatan',
    
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      name: 'kegiatan',
      component: () => import(/* webpackChunkName: "Kegiatan"*/'../views/Kegiatan.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      component: () => import('../views/History.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/alokasi/matching',
   
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      name: 'alokasiMatching',
      component: () => import(/* webpackChunkName: "AlokasiMatching"*/'../views/AlokasiMatching.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/alokasi/assessment',
    
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      name: 'alokasiAssessment',
      component: () => import(/* webpackChunkName: "AlokasiAssessment"*/'../views/AlokasiAssessment.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/MyLayout2.vue'),
    children: [{
      path: '',
      component: () => import('../views/About.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "NotFound"*/'../views/NotFound.vue')
  }
  
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

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn && store.getters.user) {
      next()
      return
    }
    next('/')
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
      return
    }
    next('/dashboard')
  }

  next()
})

export default router
