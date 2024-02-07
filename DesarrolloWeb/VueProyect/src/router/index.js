import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    props: {
      information: "Información estática para HomeView",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    props: {
      information: "Información estática para AboutView",
    },
  },
  {
    path: "/carrito",
    name: "carrito",
    component: () => import("../views/CarritoView.vue"),
    props: {
      information: "Información estática para CarritoView",
    },
  },
  {
    path: "/catalogo/:productoId",
    name: "catalogo",
    component: () => import("../views/CatalogoView.vue"),
    props: true,
  },
  {
    path: "/detalle/:productoId",
    name: "detalle",
    component: () => import("../views/DetalleView.vue"),
    props: true,
  },
  {
    path: "/producto",
    name: "producto",
    component: () => import("../views/ProductoView.vue"),
    props: {
      information: "Información estática para ProductoView",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
