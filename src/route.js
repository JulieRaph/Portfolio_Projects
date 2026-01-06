import CertificationsPage from "./pages/CertificationsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import CVPage from "./pages/CVPage.vue";
import PortfolioMain from "./pages/PortfolioMain.vue";

export const routes = [
    {path: "/", component: PortfolioMain},
    {path: "/contact", component: ContactPage},
    {path: "/certifications", component: CertificationsPage},
    {path: "/cv", component: CVPage},
]