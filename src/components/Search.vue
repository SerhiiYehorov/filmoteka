<template>
  <div class="search">
    <input class="input" v-model="search" placeholder="Type film name" />
    <SearchAll />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchAll from "./SearchAll.vue";
export default {
  name: "Search",
  components: {
    SearchAll,
  },
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
  display: flex;
  align-items: center;
  gap: 20px;
}
.input {
  width: 150px;
  margin: 10px;
  padding: 0 10px;
  color: orange;
  background-color: #000;
  border: 3px solid orange;
  border-radius: 5px;
}
.input::placeholder {
  color: orange;
}

.input:focus {
  outline: none;
}

@media screen and (min-width: 550px) {
  .input {
    width: 70vw;
  }
}

@media screen and (min-width: 900px) {
  .input {
    width: 40vw;
  }
}
</style>>
