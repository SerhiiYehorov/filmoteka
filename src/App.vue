<template>
  <v-app class="app">
    <Header />
    <div class="main">
      <Nav />
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  height: 100%;
}
</style>
