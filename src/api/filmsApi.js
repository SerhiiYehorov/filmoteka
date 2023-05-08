import http from './api.js'

const key = process.env.VUE_APP_KEY

export async function getApiData(item) {
    const res = await http.get(item + key);
    return res.data.items
}

export async function getFilm(id) {
    const res = await http.get(`Title${key}/${id}`);
    return res.data
}

// export async function getSearch(search) {
//     const res = await http.get(`Search${key}/${search}`);
//     return res.data.items
// }