<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <iframe width="1120" height="630" :src="sourceUrl + videos.join(',')" title="Lofi player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Lofi",
  data: () => ({
    videos: ["GA9GigGuf24", "-5KAN9_CzSA", "c0_ejQQcrwI", "wSEWdmmk_1o", "-9gEgshJUuY", "AqgtsfqnoTI", "twM7ulKpPjI"],
    sourceUrl: "https://www.youtube-nocookie.com/embed/?controls=0&playlist="
  })
};
</script>
