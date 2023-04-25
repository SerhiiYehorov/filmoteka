<template>
  <Main :request="request" />
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  name: "InTheaters",
  components: {
    Main,
  },
  data: () => ({
    request: "InTheaters",
  }),
};
</script>

<style>
</style>