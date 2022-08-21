import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/User.vue')
    },
    {
        path: '/add-user',
        name: 'add-user',
        component: () => import('../views/AddUser.vue')
    },
    {
        path: '/update-user',
        name: 'update-user',
        component: () => import('../views/UpdateUser.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
