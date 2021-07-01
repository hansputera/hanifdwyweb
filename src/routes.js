import { lazy } from "solid-js";

const routes = [
    {
        path: "/",
        component: lazy(() => import("./pages/home"))
    }, {
        path: "/home",
        component: lazy(() => import("./pages/home"))
    }
]

export default routes;