<template>
  <div class="main">
    <div class="main__item">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        flat
        @click="$router.push({ name: item.route })"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      items: [
        {
          title: "Most Popular Movies",
          icon: "mdi-forum",
          route: "MostPopularMovies",
        },
        {
          title: "Top 250 Movies",
          icon: "mdi-forum",
          route: "TopMovies",
        },
        { title: "Coming Soon", icon: "mdi-forum", route: "ComingSoon" },
        { title: "In Theaters", icon: "mdi-forum", route: "InTheatres" },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: orange;
  display: none !important;
}

@media screen and (min-width: 900px) {
  .main {
    display: block !important;
  }
}
</style>