import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Taxanomic from '../views/Taxanomic.vue'
import Genetics from '../views/Genetics.vue'
import GasExchange from '../views/GasExchange.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name:'home', component: Home },
        { path: '/taxanomic', name:'taxanomic', component: Taxanomic },
        { path: '/genetics', name:'genetics', component: Genetics },
        { path: '/GasExchange', name:'gasexchange', component: GasExchange },
        

    ]
})

export default router