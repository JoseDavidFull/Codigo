/*Tienda en Línea Simple:
Crea una tienda en línea con páginas como catálogo, detalles del producto y carrito de compras.
Utiliza Vue Router para manejar la navegación entre estas páginas. */

import {createRoouter, createWebHistory} from "vue-router"

const routes = [
    {
        path : "/",
        name : "home",
        component : () => import("../views/HomeView.vue")
    },
    {
        path : "/about",
        name : "about",
        component : () => import("../views/AboutView.vue")
    },
    {
        path : "/carrito",
        name : "carrito",
        component : () => import("../views/CarritoView.vue")
    },
    {
        path : "/catalogo",
        name : "catalogo",
        component : () => import("../views/CatalogoView.vue")
    },
    {
        path : "/detalle",
        name : "detalle",
        component : () => import("../views/DetalleView.vue")
    },
    {
        path : "/producto",
        name : "producto",
        component : () => import("../views/ProductoView.vue")
    },

]


const router = createRoouter({
    history : createWebHistory(),
    routes,
})

export default router