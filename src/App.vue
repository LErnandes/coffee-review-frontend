<template>
  <v-app>
    <v-app-bar
      app
      v-if="haveBar"
    >
    </v-app-bar>

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

  computed: {
    haveBar() {
      return !["Home"].includes(this.$route.name);
    }
  }
};
</script>
