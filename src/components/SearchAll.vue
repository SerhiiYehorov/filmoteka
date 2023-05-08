<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="orange" @click="getSearch" dark v-bind="attrs" v-on="on">
          Search All
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="orange">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>List of films</v-toolbar-title>
        </v-toolbar>

        <div class="cards">
          <v-card class="card" v-for="(result, id) in paginatedData" :key="id">
            <v-img height="180px" :src="result.image" />

            <v-card-title class="card__title">
              {{ result.title }}
            </v-card-title>

            <v-card-text>
              <b>Id:</b>
              {{ result.id }}
            </v-card-text>
            <v-btn
              color="orange lighten-2"
              x-large
              text
              @click="goToFilm(result)"
            >
              More
            </v-btn>
          </v-card>
        </div>

        <div class="pagination text-center">
          <v-pagination v-model="page" :length="pageCount" :total-visible="5" />
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import { getSearch } from "../api/filmsApi.js";
export default {
  name: "SearchAll",
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      results: [],
      size: 10,
      page: 1,
    };
  },
  computed: {
    ...mapGetters(["search"]),
    pageCount() {
      let l = this.results.length;
      let s = this.size;
      if (l <= s) {
        return 1;
      }
      return Math.floor(l / s);
    },
    paginatedData() {
      if (this.pageCount === 1) {
        return this.results;
      }
      let start = this.page * this.size;
      let end = start + this.size;
      return this.results.slice(start, end);
    },
  },

  methods: {
    async getSearch() {
      this.results = await getSearch(this.search);
      console.log(this.results.length);
    },
    goToFilm(item) {
      this.$router.push({ name: "film", params: { id: item.id } });
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
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

.card__title {
  word-break: break-word;
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