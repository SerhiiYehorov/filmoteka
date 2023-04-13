<template>
  <div class="main">
    <div class="aside">
      <img
        class="main__img"
        src="https://m.media-amazon.com/images/M/MV5BMjQ1NDU1NDMxM15BMl5BanBnXkFtZTgwMDEyMTY3MTI@._V1_Ratio1.2400_AL_.jpg"
        alt=""
      />
    </div>
    <div class="main__info">
      <div class="main__info--title"><b>Film Title:</b> Lorem, ipsum.</div>
      <div class="main__info--actors">
        <b>Actors in film:</b>
        Lorem ipsum dolor sit amet.
      </div>
      <div class="main__info--raiting">
        <b>Imdb raiting:</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        itaque!
      </div>
    </div>
    <v-btn elevation="8" class="orange--text" rounded x-large>Get back</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding: 10px;
  width: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(45, 44, 44);
  justify-content: center;
}

.aside {
  max-height: 500px;
}

.main__img {
  width: 600px;
}

.main__info {
  color: orange;
  min-width: 70%;
  max-height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>