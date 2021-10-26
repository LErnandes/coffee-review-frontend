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
        :key="review._id"
        cols="10"
        sm="4"
        lg="3"
        class="text-center"
      >
        <v-card :id="review._id" transition="fade-transition" class="mx-auto">
          <v-img class="reviewimage h500" :src="review.image"></v-img>

          <v-card-title>
            <v-row justify="center">
              <v-col lg="12">
                <span class="headline text-no-wrap text-center font-weight-bold">{{ review.name }}</span>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="text-h6 font-weight-bold">
            "{{ review.text }}"
          </v-card-text>

          <v-card-text>
            <v-row align="center" justify="space-around">
              <v-col lg="5">
                <v-rating
                  v-model="review.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                ></v-rating>
              </v-col>

              <v-col lg="4">
                <v-rating
                  background-color="grey darken-1"
                  v-model="review.priceRating"
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
                  <span class="subtitle-1">{{ review.author }}</span>
                </v-col>

                <v-col v-if="isAdmin" cols="2">
                  <v-btn @click="editPost(review)" icon><v-icon>mdi-pencil</v-icon></v-btn>
                </v-col>
                <v-col v-if="isAdmin" cols="2">
                  <v-btn @click="deletePost(review._id)" color="red" icon><v-icon>mdi-delete</v-icon></v-btn>
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
          <v-btn icon dark @click="exitDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Post</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="savePost"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-row class="mt-15" justify="center">
          <v-col cols="10" lg="6">
            <v-card color="#385F73">
              <v-card-title class="display-1 font-weight-black ml-3 py-6">
                {{ name }}
              </v-card-title>

              <v-card-text v-if="image" class="my-10">
                <v-row justify="center">
                  <v-col lg="8">
                    <v-img class="reviewimage h500" :src="image"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-row justify="center">
                <v-col lg="6">
                  <v-text-field
                    autocomplete="off"
                    color="white"
                    filled
                    dense
                    label="Nome do café"
                    v-model="name"
                  ></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field
                    autocomplete="off"
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
                    v-model="rating"
                    color="amber"
                    dense
                    half-increments
                  ></v-rating>
                </v-col>

                <v-col lg="4" class="text-center">
                  <v-rating
                    background-color="grey darken-1"
                    v-model="priceRating"
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
                    v-model="text"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col lg="8">
                  <v-text-field
                    autocomplete="off"
                    color="white"
                    filled
                    dense
                    label="Imagem"
                    v-model="image"
                  ></v-text-field>
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
import PostService from "@/services/postService.js";

export default {
  name: "Reviews",
  components: {
    carousel,
  },
  data: () => ({
    token: "",
    isAdmin: false,
    dialog: false,

    id: "",
    image: "",
    name: "",
    text: "",
    author: "",
    priceRating: 1,
    rating: 0,

    reviews: [],
  }),
  async mounted() {
    await this.getReviews();
    await this.getAdmin();
  },
  methods: {
    async getReviews() {
      let reviews = await PostService.getposts();
      
      if (reviews.length > 0) {
        this.reviews = reviews;
      } else {
        this.reviews = [];
      }
    },
    getData() {
      return {
        id: this.id,
        image: this.image,
        name: this.name,
        text: this.text,
        author: this.author,
        priceRating: this.priceRating,
        rating: this.rating,
      };
    },
    async getToken() {
      return localStorage.getItem("token");
    },
    async getAdmin() {
      let token = await this.getToken();
      if (token) {
        this.token = token;
        this.isAdmin = true;
      }
    },

    setData(data) {
      this.id = data._id;
      this.image = data.image;
      this.name = data.name;
      this.text = data.text;
      this.author = data.author;
      this.priceRating = data.priceRating;
      this.rating = data.rating;
    },

    setDataEmpty() {
      this.id = "";
      this.image = "";
      this.name = "";
      this.text = "";
      this.author = "";
      this.priceRating = 0;
      this.rating = 0;
    },

    exitDialog() {
      this.dialog = false;
      this.setDataEmpty();
    },

    async savePost() {
      let data = this.getData();

      if (data.id) {
        await PostService.editposts(data.id, data, this.token);
        await this.getReviews();
      } else {
        await PostService.createposts(data, this.token);
        await this.getReviews();
      }

      this.exitDialog();
    },
    async deletePost(id) {
      await PostService.deleteposts(id, this.token);
      await this.getReviews();
    },
    async editPost(data) {
      this.setData(data);
      this.dialog = true;
    }
  }
};
</script>

<style>
.reviewimage {
  background-color: white;
}

.h500 {
  height: 500px;
}
</style>
