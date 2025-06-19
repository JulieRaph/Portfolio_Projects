import ContactPage from "./pages/ContactPage.vue";
import PortfolioMain from "./pages/PortfolioMain.vue";

export const routes = [
    {path: "/", component: PortfolioMain},
    {path: "/contact", component: ContactPage},
    {path: "/contact/:id", component: ContactPage},
]