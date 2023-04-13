<template>
  <div class="main">
    <div class="main__item">
      <v-list-item v-for="item in items" :key="item.title" link flat>
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
        { title: "Most Popular Movies", icon: "mdi-forum" },
        { title: "Top 250 Movies", icon: "mdi-forum" },
        { title: "Coming Soon", icon: "mdi-forum" },
        { title: "In Theaters", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  /* margin: auto; */
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: orange;
}
</style>