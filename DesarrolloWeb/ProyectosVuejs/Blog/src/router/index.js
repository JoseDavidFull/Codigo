import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/theblog",
      name: "theblog",
      component: () => import('../views/TheblogPage/theblog.vue'),
      children: [
        {
          path: "allposts",
          name: "allposts",
          component: () => import('../views/TheblogPage/allposts.vue'),
        },
        {
          path: "fashion",
          name: "fashion",
          component: () => import('../views/TheblogPage/fashion.vue'),
        },
        {
          path: "lifestyle",
          name: "lifestyle",
          component: () => import('../views/TheblogPage/lifestyle.vue'),
        },
        {
          path: "food",
          name: "food",
          component: () => import('../views/TheblogPage/food.vue'),
        },
        {
          path: "holiday",
          name: "holiday",
          component: () => import('../views/TheblogPage/holiday.vue'),
        },
        {
          path: "summer",
          name: "summer",
          component: () => import('../views/TheblogPage/summer.vue'),
        },
        {
          path: "travel",
          name: "travel",
          component: () => import('../views/TheblogPage/travel.vue'),
        },
      ],
    },
  ],
});

export default router;
