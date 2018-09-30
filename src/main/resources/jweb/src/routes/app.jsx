import Stock from '../views/Stock/Stock';
import News from '../views/News/News';

const appRoutes = [
    { path: "/stock", name: "Stock", icon: "pe-7s-science", component: Stock },
    { path: "/news", name: "News", icon: "pe-7s-news-paper", component: News }
];

export default appRoutes;
