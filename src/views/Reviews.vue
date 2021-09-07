<template>
  <v-container fluid fill-height>
    <v-row class="my-4" justify="center">
      <h1 class="display-2 font-weight-black">Reviews</h1>
    </v-row>

    <v-row class="my-5" justify="center">
      <v-col lg="8">
        <carousel :items="reviews"></carousel>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col v-for="review of reviews" :key="review.id" cols="8" sm="4" lg="3">
        <v-card transition="fade-transition" class="my-2 mx-auto">
          <v-img :src="review.image"></v-img>

          <v-card-title>{{ review.name }}</v-card-title>

          <v-card-text>
            <v-row justify="center" align="center" class="mx-0">
              <v-col cols="12" lg="5">
                <v-rating
                  :value="review.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  {{ review.rating }} ({{ review.ratingCount }})
                </div>
              </v-col>
              <v-col class="text-center" cols="12" lg="6">
                <div class="my-4 text-subtitle-1">
                  {{ review.priceRating }} • {{ review.company }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              :href="'/review/'+review.id"
              text
            >
              Read review
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import carousel from '@/components/Carousel.vue';

export default {
  name: "Reviews",
  components: {
    carousel
  },
  data: () => ({
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
      },
    ],
  }),
};
</script>
