<template>
  <div class="header">
    <div class="logo">
      <h1 class="orange--text font-weight-bold">BeeMoviessss</h1>
    </div>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="header__menu" dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list class="list">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title class="list">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    items: [
      { title: "Most Popular Movies" },
      { title: "Top 250 Movies" },
      { title: "Coming Soon" },
      { title: "In Theaters" },
    ],
    mainTitle: "Lists of films",
    collapseOnScroll: true,
  }),
};
</script>

<style scoped>
.header {
  max-width: 100vw;
  background-color: black;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.list {
  background-color: orange;
  color: #000;
}

@media screen and (min-width: 900px) {
  .header__menu {
    display: none;
  }
  .header {
    justify-content: flex-start;
    padding-left: 20%;
  }
}
</style>