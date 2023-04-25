<template>
  <div class="main">
    <div class="aside">
      <v-img class="main__img" :src="film.image" alt="poster" />
    </div>

    <div class="main__info">
      <div class="main__info--title">
        <b>Film Title:</b> {{ film.fullTitle }}
      </div>

      <div class="main__info--actors">
        <b>Actors in film:</b>
        {{ film.stars }}
      </div>

      <div class="main__info--raiting">
        <b>Genre:</b>
        {{ film.genres }}
      </div>
    </div>

    <div class="button">
      <v-btn
        elevation="8"
        class="orange--text"
        rounded
        x-large
        @click="$router.go(-1)"
      >
        Get back
      </v-btn>
    </div>
  </div>
</template>

<script>
import { getFilm } from "@/api/filmsApi.js";
export default {
  name: "film",

  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },
  },

  data() {
    return {
      film: {},
    };
  },

  watch: {
    id: {
      handler() {
        this.getFilm();
      },
      immediate: true,
    },
  },

  methods: {
    async getFilm() {
      this.film = await getFilm(this.id);
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 50px;
  background-color: rgb(45, 44, 44);
}

.main__img {
  height: 300px;
  width: 200px;
}

.main__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: orange;
  max-width: 90%;
  max-height: 500px;
  padding: 20px;
}

.button {
  margin: 0 auto;
}

@media screen and (min-width: 850px) {
  .main {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0;
  }

  .main__img {
    width: 400px;
  }
  .main__info {
    width: calc(100% - 400px);
  }
}

@media screen and (min-width: 1500px) {
  .main__img {
    height: 900px;
    width: 800px;
  }
  .main__info {
    width: calc(100% - 800px);
  }
}
</style>