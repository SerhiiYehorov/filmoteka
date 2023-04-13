<template>
  <v-app>
    <Header />
    <div class="main">
      <Nav />
      <Main />
      <!-- <ChosenFilm /> -->
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
// import ChosenFilm from "./components/ChosenFilm.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
    Main,
    // ChosenFilm,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 166px);
}
</style>
