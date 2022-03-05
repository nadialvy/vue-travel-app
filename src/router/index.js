import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/Tentang.vue'
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Jamaica from '@/views/Jamaica.vue'
import Panama from '@/views/Panama.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/brazil', name: 'Brazil', component: Brazil},
    {path: '/hawaii', name: 'Hawaii', component: Hawaii},
    {path: '/panama', name: 'Panama', component: Panama},
    {path: '/jamaica', name: 'Jamaica', component: Jamaica},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router