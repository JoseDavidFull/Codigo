import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/ContactView.vue'),
    name: 'contact'
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: () => import('../views/Alumnos/AlumnoPage.vue'),
    children: [
      {
        path: 'alumnosa',
        name: 'alumnosa',
        component: () => import('../views/Alumnos/alumnosa.vue')
      },
      {
        path: 'alumnosb',
        name: 'alumnosb',
        component: () => import('../views/Alumnos/alumnosb.vue')
      }
    ]
  },
  {
    path: '/superheroe',
    name: 'superheroe',
    component: () => import('../views/SuperHeroe/SuperHeroe.vue'),
    children: [
      {
        path: 'batman',
        name: 'batman',
        component: () => import('../views/SuperHeroe/Batman.vue')
      },
      {
        path: 'spiderman',
        name: 'spiderman',
        component: () => import('../views/SuperHeroe/Spiderman.vue')
      }
    ]
  },
  {
    path: '/police',
    name: 'police',
    component: () => import('../views/PoliceView.vue')
  },
  {
    path: '/pikachú',
    name: 'pikachú',
    component: () => import('../views/PikachúView.vue')
  },
  {
    path: '/acount',
    name: 'acount',
    component: () => import('../views/AcountView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
