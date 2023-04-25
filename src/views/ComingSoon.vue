<template>
  <Main :request="request" />
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  name: "ComingSoon",
  components: {
    Main,
  },
  data: () => ({
    request: "ComingSoon",
  }),
};
</script>

<style>
</style>