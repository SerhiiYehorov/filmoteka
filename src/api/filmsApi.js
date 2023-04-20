import http from './api.js'

const key = process.env.VUE_APP_KEY

export async function getPopularFilm() {
    const res = await http.get("MostPopularMovies" + key);
    return res.data.items
}

export async function getTopMovies() {
    const res = await http.get("Top250Movies" + key);
    return res.data.items
}

export async function getComingSoon() {
    const res = await http.get("ComingSoon" + key);
    return res.data.items
}

export async function getInTheaters() {
    const res = await http.get("InTheaters" + key);
    return res.data.items
}
