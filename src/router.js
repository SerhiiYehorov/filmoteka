import VueRouter from 'vue-router';

import Main from "./views/Main.vue";
import ChosenFilm from "./views/ChosenFilm.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: Main
    },
    {
        path:  '/film/:id',
        name: "film",
        component: ChosenFilm,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes, 
})

export default router;