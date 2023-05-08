<template>
  <div class="input">
    <input class="search" v-model="search" placeholder="Type film name" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Search",
  data: () => ({
    search: "",
  }),

  methods: {
    ...mapMutations(["setSearch"]),
  },
  watch: {
    search: {
      handler() {
        this.setSearch(this.search);
      },
    },
  },
};
</script>

<style scoped>
.search {
  width: 150px;
  margin: 10px;
  padding: 0 10px;
  color: orange;
  background-color: #000;
  border: 3px solid orange;
  border-radius: 5px;
}
.search::placeholder {
  color: orange;
}

.search:focus {
  outline: none;
}

@media screen and (min-width: 550px) {
  .search {
    width: 70vw;
  }
}

@media screen and (min-width: 900px) {
  .search {
    width: 40vw;
  }
}
</style>>
