import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/User/User.vue')
    },
    {
        path: '/gudang',
        name: 'gudang',
        component: () =>
            import ('../views/Gudang/Gudang.vue')
    },
    {
        path: '/barang',
        name: 'Barang',
        component: () =>
            import ('../views/Produk/Barang.vue')
    },
    {
        path: '/kategori',
        name: 'Kategori',
        component: () =>
            import ('../views/Produk/Kategori.vue')
    },
    {
        path: '/tipe',
        name: 'Tipe',
        component: () =>
            import ('../views/Produk/Tipe.vue')
    },
    {
        path: '/status',
        name: 'Status',
        component: () =>
            import ('../views/Produk/Status.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router