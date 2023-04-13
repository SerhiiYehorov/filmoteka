<template>
  <v-main class="main">
    <div class="cards">
      <v-card class="card" v-for="(film, id) in paginatedData" :key="id">
        <v-img height="200px" :src="film.image" />

        <v-card-title> {{ film.title }} </v-card-title>

        <v-card-subtitle> {{ film.fullTitle }} </v-card-subtitle>
        <v-card-subtitle>
          <b>imDbRating : </b>
          {{ film.imDbRating }}
        </v-card-subtitle>
        <v-card-text>
          <b>Actors:</b>
          {{ film.crew }}
        </v-card-text>
        <v-btn color="orange lighten-2" x-large text> More </v-btn>
      </v-card>
    </div>

    <div class="pagination text-center">
      <v-pagination v-model="page" :length="pageCount" :total-visible="5" />
    </div>
  </v-main>
</template>

<script>
import { getPopularFilm } from "../api/api.js";

export default {
  name: "Main",
  data: () => ({
    show: false,
    films: [],
    size: 14,
    page: 1,
  }),

  created() {
    this.getPopularFilm();
  },

  methods: {
    async getPopularFilm() {
      this.films = await getPopularFilm();
    },
  },

  computed: {
    pageCount() {
      let l = this.films.length;
      let s = this.size;
      return Math.floor(l / s);
    },
    paginatedData() {
      let start = this.page * this.size;
      let end = start + this.size;
      return this.films.slice(start, end);
    },
  },
};
</script>

<style scoped>
.main {
  width: 70%;
}
.cards {
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>
