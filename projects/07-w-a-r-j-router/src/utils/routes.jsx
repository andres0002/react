// js
// react
import { lazy } from "react";
// third
// own
import { SearchPage } from "../pages/SearchPage";
const AboutPage = lazy(() => import('../pages/AboutPage'));

export const routes = [
    {
        path: '/:lang/about',
        Component: AboutPage
    },
    {
        path: '/search/:query',
        Component: SearchPage
    }
];