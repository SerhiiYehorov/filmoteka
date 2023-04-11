<template>
  <v-navigation-drawer>
    <v-card color="indigo darken-2" flat>
      <v-card :elevation="0">
        <v-list-item v-for="item in items" :key="item.title" link flat>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      items: [
        { title: "Top 250 Movies", icon: "mdi-forum" },
        { title: "Most Popular Movies", icon: "mdi-forum" },
        { title: "Coming Soon", icon: "mdi-forum" },
        { title: "In Theaters", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

