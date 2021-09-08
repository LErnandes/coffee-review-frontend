<template>
  <v-app>
    <v-app-bar app v-if="haveBar">
      <v-btn fab href="/reviews" text><v-icon>mdi-home</v-icon></v-btn>

      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2 white--text" v-bind="attrs" v-on="on">
            DONATE
            <v-icon right dark> mdi-hand-heart </v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="display-1 font-weight-black">Donation methods</span>
          </v-card-title>

          <v-card-text class="mt-3">
            <div class="mt-7" v-for="(method, i) of donateMethods" :key="i">
              <h1>{{ method.name }}</h1>
              <span>{{ method.code }}</span>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="dialog = false"> DONE <v-icon>mdi-party-popper</v-icon> </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  title: "Coffee Blog",
  name: "App",

  data: () => ({
    dialog: false,
    donateMethods: [
      {
        id: "123213312",
        name: "Pix",
        code: "66a5c991417c863018de5ad31",
      },
      {
        id: "123213312",
        name: "Pix",
        code: "66a5c991417c863018de5ad31",
      },
    ],
  }),

  computed: {
    haveBar() {
      return !["Home"].includes(this.$route.name);
    },
  },
};
</script>
