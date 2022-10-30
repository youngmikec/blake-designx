import { ReactNode } from "react";
import Home from "../pages";
import About from "../pages/about";
import BookNow from "../pages/booknow";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Services from "../pages/services";
import Updates from "../pages/updates";

//pages



export type RouteType = {
    path: string;
    component: ReactNode
}

const authRoutes: RouteType[] = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/about',
        component: <About />
    },
    {
        path: '/booknow',
        component: <BookNow />
    },
    {
        path: '/contact',
        component: <Contact />
    },
    {
        path: '/portfolio',
        component: <Portfolio />
    },
    {
        path: '/services',
        component: <Services />
    },
    {
        path: '/updates',
        component: <Updates />
    },
    
]

export default authRoutes;