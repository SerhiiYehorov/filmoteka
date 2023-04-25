<template>
  <Main :request="request" />
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  name: "Top250Movies",
  components: {
    Main,
  },
  data: () => ({
    request: "Top250Movies",
  }),
};
</script>

<style>
</style>