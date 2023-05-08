import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        search: '',
    },

    getters: {
        search(state) {
            return state.search;
        }
    },

    mutations: {
        setSearch(state, search){
            return state.search = search;
        }
    },

    actions: {
        async getSearch() {

        }
    }

})

export default store;