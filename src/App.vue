<template>
  <v-app>
    <v-app-bar app v-if="notLading">
      <v-tabs>
        <v-tab to="/reviews">Review</v-tab>
        <v-tab to="/lofi">Lofi Coffee</v-tab>
      </v-tabs>

      <v-btn href="/admin" class="ma-2">
        ADMIN
        <v-icon right dark> mdi-account </v-icon>
      </v-btn>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="error" class="ma-2" v-bind="attrs" v-on="on">
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
            <v-btn color="success" text @click="dialog = false">
              DONE <v-icon>mdi-party-popper</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="mt-15" v-if="notLading">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Luis Ernandes</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  title: "Coffee Experience",
  name: "App",

  data: () => ({
    dialog: false,
    donateMethods: [
      {
        name: "Nano",
        code: "nano_1bxo4uox6wjn8kg7jd73q46d6nencx5fowrmx8xytp141ouy8iqyasr8wbj6",
      },
    ],
  }),

  computed: {
    notLading() {
      return !["Home"].includes(this.$route.name);
    },
  },
};
</script>