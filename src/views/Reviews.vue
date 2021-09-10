<template>
  <v-container fluid fill-height>
    <v-row class="my-10" justify="center">
      <v-col cols="11" sm="10" lg="8">
        <carousel :items="reviews"></carousel>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col
        v-for="review of reviews"
        :key="review.id"
        cols="8"
        sm="4"
        lg="4"
        class="text-center"
      >
        <v-card transition="fade-transition" class="mx-auto">
          <v-img :src="review.image"></v-img>

          <v-card-title>
            <span class="text-h6 font-weight-light">{{ review.title }}</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            "{{ review.text }}"
          </v-card-text>

          <v-card-actions>
            <v-list-item>
              <v-row align="center">
                <v-col class="text-start" cols="6" lg="8">
                  <h4>Luis Ernandes</h4>
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
    isActive: false,
    reviews: [
      {
        id: "1234567890",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Santa Monica Café Gourmet",
        company: "Santa Monica",
        rating: 4.2,
        ratingCount: 567,
        priceRating: "$",
        composition: {
          body: 4,
          sweetness: 4,
          bitterness: 1,
          acidity: 1,
          aroma: 4,
          aftertaste: 4,
        },
        text: "Café muito bom",
        author: "Luis Ernandes",
      },
      {
        id: "1234567891",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Santa Monica Café Gourmet",
        company: "Santa Monica",
        rating: 4.2,
        ratingCount: 567,
        priceRating: "$",
        composition: {
          body: 4,
          sweetness: 4,
          bitterness: 1,
          acidity: 1,
          aroma: 4,
          aftertaste: 4,
        },
        text: "Café muito bom",
        author: "Luis Ernandes",
      },
    ],
  }),
};
</script>
