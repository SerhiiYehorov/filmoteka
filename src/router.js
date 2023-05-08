import VueRouter from 'vue-router';

import ChosenFilm from "./views/ChosenFilm.vue";
import MostPopularMovies from "./views/MostPopularMovies.vue";
import TopMovies from "./views/TopMovies.vue"
import ComingSoon from "./views/ComingSoon.vue"
import InTheatres from "./views/InTheatres.vue"

const routes = [
    {
        path: "/",
        name: "MostPopularMovies",
        component: MostPopularMovies
    },

    {
        path:  '/top-250-movies',
        name: "TopMovies",
        component: TopMovies,
    },

    {
        path:  '/coming-soon',
        name: "ComingSoon",
        component: ComingSoon,
    },
    
    {
        path:  '/in-theatres',
        name: "InTheatres",
        component: InTheatres,
    },

    // {
    //     path:  '/search-movies',
    //     name: "SearchMovies",
    //     component: SearchMovies,
    // },

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