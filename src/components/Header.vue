<template>
  <div class="header">
    <h1 class="orange--text font-weight-bold">BeeMoviessss</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    mainTitle: "Lists of films",
    collapseOnScroll: true,
  }),
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: black;
  color: aqua;
  padding: 10px 0 10px;
  text-align: center;
}
</style>