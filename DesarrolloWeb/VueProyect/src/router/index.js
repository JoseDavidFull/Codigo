/*añade ahora user con home, about, contact  */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue")
  },
  {
    path : "/about",
    name : "about",
    component : () => import("../views/AboutView.vue")
  },
  {
    path : "/contact",
    name : "contact",
    component : () => import("../views/ContactView.vue")
  },
  {
    path:  "/user",
    name : "user",
    component : () => import("../views/UserView.vue")
  },
  { 
    path : "/history",
    name : "history",
    component : () => import("../views/HistoryView.vue")
  },
  {
    path : "/police",
    name : "police",
    component : () => import("../views/PoliceView.vue")
  },
  {
    path : "/pikachú",
    name : "pikachú",
    component : () => import("../views/PikachúView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
