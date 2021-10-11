<template>
  <v-container fluid fill-height>
    <v-row v-if="reviews.length > 0" class="my-10" justify="center">
      <v-col cols="11" sm="10" lg="8">
        <carousel :items="reviews"></carousel>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col
        v-for="review of reviews"
        :key="review.id"
        cols="12"
        sm="5"
        lg="4"
        class="text-center"
      >
        <v-card :id="review.id" transition="fade-transition" class="mx-auto">
          <v-img :src="review.image"></v-img>

          <v-card-title>
            <v-row justify="center">
              <v-col lg="12">
                <span class="text-h4 text-center font-weight-black">{{ review.name }}</span>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            "{{ review.text }}"
          </v-card-text>

          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col lg="5">
                <v-rating
                  :value="review.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                ></v-rating>
              </v-col>

              <v-col lg="4">
                <v-rating
                  background-color="grey darken-1"
                  :value="review.priceRating"
                  full-icon="$"
                  empty-icon="$"
                  color="green"
                  readonly
                  dense
                ></v-rating>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-list-item>
              <v-row align="center">
                <v-col class="text-start" cols="6" lg="8">
                  <span class="title">{{ review.author }}</span>
                </v-col>

                <v-col v-if="isAdmin" cols="2">
                  <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
                </v-col>
                <v-col v-if="isAdmin" cols="2">
                  <v-btn color="red" icon><v-icon>mdi-delete</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-if="isAdmin"
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          fixed
          right
          bottom
          v-on="on"
          v-bind="attrs"
          color="indigo"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Post</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-row class="mt-6" justify="center">
          <v-col cols="10" lg="6">
            <v-card color="#385F73">
              <v-card-title class="display-1 font-weight-black ml-3 py-6">
                {{ name }}
              </v-card-title>

              <v-card-text v-if="image" class="my-10">
                <v-row justify="center">
                  <v-col lg="8">
                    <v-img :src="image"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-row justify="center">
                <v-col lg="6">
                  <v-text-field
                    color="white"
                    filled
                    dense
                    label="Nome do café"
                    v-model="name"
                  ></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field
                    color="white"
                    filled
                    dense
                    label="Autor"
                    v-model="author"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row align="center" justify="space-around">
                <v-col lg="4" class="text-center">
                  <v-rating
                    background-color="grey darken-1"
                    :value="rating"
                    color="amber"
                    dense
                    half-increments
                  ></v-rating>
                </v-col>

                <v-col lg="4" class="text-center">
                  <v-rating
                    background-color="grey darken-1"
                    :value="rating"
                    full-icon="$"
                    empty-icon="$"
                    color="green"
                    dense
                  ></v-rating>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col lg="8">
                  <v-textarea
                    color="white"
                    filled
                    label="Review"
                    auto-grow
                    :value="text"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col lg="8">
                  <v-file-input
                    accept="image/png, image/jpeg, image/jpg"
                    placeholder="Choose an image"
                    prepend-icon="mdi-camera"
                    label="Image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import carousel from "@/components/Carousel.vue";

export default {
  name: "Reviews",
  components: {
    carousel,
  },
  data: () => ({
    isAdmin: true,
    dialog: false,

    id: "",
    image: "",
    name: "",
    text: "",
    author: "",
    priceRating: 1,
    rating: 0,

    reviews: [
      {
        id: "1234567890",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Santa Monica Café Gourmet",
        rating: 4.2,
        priceRating: 4,
        text: "Café muito bom",
        author: "Luis Ernandes",
      },
      {
        id: "1234567891",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Santa Monica Café Gourmet",
        rating: 4.2,
        priceRating: 1,
        text: "Café muito bom",
        author: "Luis Ernandes",
      },
    ],
  }),
};
</script>
