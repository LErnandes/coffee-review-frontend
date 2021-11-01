<template>
  <v-container class="back" fluid fill-height>
    <v-row justify="center">
      <h1 class="text-center">
        <span class="font-weight-light display-1">WELCOME TO</span>
        <br />
        <span class="font-weight-black display-3">COFFEE EXPERIENCE</span>
      </h1>
    </v-row>
    <v-row justify="center">
      <h2 class="display-1 text-center">Contando as minhas experiências com café ☕️</h2>
    </v-row>
    <v-row justify="center">
      <v-btn href="/reviews" x-large color="error"> LER ARTIGOS! </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.back {
  background: url('../assets/image.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>
