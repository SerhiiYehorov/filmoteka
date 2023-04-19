<template>
  <div class="footer">
    <v-footer app dark padless full-width>
      <v-card class="flex gray darken-4" flat tile>
        <v-card-title class="black text-center title">
          <div class="title__text subheading orange--text">
            Get connected with us on social networks!
          </div>

          <v-spacer />

          <div class="icons">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text class="py-2 orange--text text-center font-weight-bold">
          {{ new Date().getFullYear() }} —
          <a
            class="text-decoration-none orange--text"
            href="https://github.com/SerhiiYehorov/filmoteka"
          >
            Kicum&#174;
          </a>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.footer {
  max-width: 100%;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title__text {
  word-break: break-word;
}

@media screen and (min-width: 900px) {
  .title {
    flex-direction: row;
  }
}
</style>