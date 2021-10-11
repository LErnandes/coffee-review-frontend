<template>
  <v-container fluid fill-height>
    <v-carousel cycle show-arrows-on-hover hide-delimiters>
      <v-carousel-item
        v-for="item of items"
        :key="item.id"
        :src="item.image"
        :href="'#'+item.id"
        ripple
      >
        <v-container fluid fill-height>
          <v-row align="end" justify="center">
            <h1 class="text-center display-2 font-weight-black">{{ item.name }}</h1>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    items: Array
  },
};
</script>
