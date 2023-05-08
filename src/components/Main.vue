<template>
  <v-main class="main">
    <p v-if="paginatedData.length === 0">No info!</p>
    <div class="cards" v-else>
      <v-card class="card" v-for="(film, id) in paginatedData" :key="id">
        <v-img height="180px" :src="film.image" />

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
import { getApiData } from "../api/filmsApi.js";
import { mapGetters } from "vuex";
export default {
  name: "Main",
  props: ["request"],
  data: () => ({
    show: false,
    films: [],
    size: 14,
    page: 1,
  }),

  watch: {
    request: {
      handler() {
        if (this.request) {
          this.getData();
        }
      },
      immediate: true,
    },
  },

  methods: {
    async getData() {
      this.films = await getApiData(this.request);
    },
  },

  computed: {
    ...mapGetters(["search"]),
    pageCount() {
      let l = this.filteredData.length;
      console.log(this.filteredData.length);
      let s = this.size;
      if (l <= s) {
        return 1;
      }
      return Math.floor(l / s);
    },
    paginatedData() {
      if (this.pageCount === 1) {
        return this.filteredData;
      }
      let start = this.page * this.size;
      let end = start + this.size;
      return this.filteredData.slice(start, end);
    },
    filteredData() {
      if (this.search) {
        return this.films.filter((film) =>
          film.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.films;
      }
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
  height: 550px;
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
    justify-content: space-around;
    align-items: flex-start;
  }
  .card {
    width: 290px;
    height: 500px;
  }
}
</style>
