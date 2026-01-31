import { createRouter, createWebHistory } from 'vue-router'

const PortfolioMain = () => import('./pages/PortfolioMain.vue')
const CVPage = () => import('./pages/CVPage.vue')
const ContactPage = () => import('./pages/ContactPage.vue')
const CertificationsPage = () => import('./pages/CertificationsPage.vue')

export const routes = [
    { path: "/", name: 'home', component: PortfolioMain },
    { path: "/contact", name: 'contact', component: ContactPage },
    { path: "/certifications", name: 'certifications', component: CertificationsPage },
    { path: "/cv", name: 'cv', component: CVPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router