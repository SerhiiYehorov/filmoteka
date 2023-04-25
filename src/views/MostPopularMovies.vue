<template>
  <Main :request="request" />
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  name: "MostPopularMovies",
  components: {
    Main,
  },
  data: () => ({
    request: "MostPopularMovies",
  }),
};
</script>

<style>
</style>