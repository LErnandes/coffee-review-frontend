<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  title: 'Coffee Blog',
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: url('./assets/image.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>
