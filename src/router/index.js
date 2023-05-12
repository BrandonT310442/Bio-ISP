import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Taxanomic from '../views/Taxanomic.vue'
import Genetics from '../views/Genetics.vue'
import GasExchange from '../views/GasExchange.vue'
import Circulation from '../views/Circulation.vue'
import Digestion from '../views/Digestion.vue'
import Adaptation from '../views/Adaptation.vue'
import Evolution from '../views/Evolution.vue'
import Citations from '../views/Citations.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name:'home', component: Home },
        { path: '/taxanomic', name:'taxanomic', component: Taxanomic },
        { path: '/genetics', name:'genetics', component: Genetics },
        { path: '/GasExchange', name:'gasexchange', component: GasExchange },
        { path: '/Circulation', name:'circulation', component: Circulation },
        { path: '/Digestion', name:'digestion', component: Digestion },
        { path: '/Adaptation', name:'adaptation', component: Adaptation },
        { path: '/Evolution', name:'evolution', component: Evolution },
        { path: '/Citations', name:'citation', component: Citations },


    ]
})

export default router