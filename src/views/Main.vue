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
        <v-btn
          color="orange lighten-2"
          x-large
          text
          @click="$router.push({ name: 'film', params: { id: film.id } })"
        >
          More
        </v-btn>
      </v-card>
    </div>

    <div class="pagination text-center">
      <v-pagination v-model="page" :length="pageCount" :total-visible="5" />
    </div>
  </v-main>
</template>

<script>
import { getPopularFilm } from "../api/filmsApi.js";

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
  padding-bottom: 176px !important;
}
.cards {
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  min-height: 1040px;
  justify-content: center;
  align-items: center;
}

.card {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 500px;
}

@media screen and (min-width: 420px) {
  .main {
    padding-bottom: 146px !important;
  }
}

@media screen and (min-width: 900px) {
  .main {
    width: calc(100% - 240px);
    padding-bottom: 116px !important;
  }
  .cards {
    display: flex;
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
    justify-content: space-around;
    align-items: flex-start;
  }
  .card {
    width: 290px;
  }
}
</style>
