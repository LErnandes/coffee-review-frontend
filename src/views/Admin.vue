<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col cols="8" sm="6" lg="4">
        <v-card transition="fade-transition" class="mx-auto">
          <v-card-title>
            <span class="display-1 font-weight-bold">Login</span>
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Email"
              v-model="email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large class="mr-2 mb-2" color="secondary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Admin",
  data: () => ({
    email: "",
    password: "",
    statusAlert: "",
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
};
</script>
