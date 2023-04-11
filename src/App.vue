<template>
  <v-app>
    <Header />
    <div class="main">
      <Nav />
      <Main />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
    Main,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 146px);
}
</style>
