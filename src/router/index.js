import Vue from 'vue'
import VueRouter from 'vue-router'
import Red from '../views/Red.vue'
import Yellow from "../views/Yellow.vue";
import Green from "../views/Green.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Red',
        redirect: '/red',
        component: Red
    },
    {
        path: '/red',
        name: 'Red',
        component: Red
    },
    {
        path: '/yellow',
        name: 'Yellow',
        component: Yellow
    },
    {
        path: '/green',
        name: 'Green',
        component: Green
    },
]

const router = new VueRouter({
    routes
})

export default router
