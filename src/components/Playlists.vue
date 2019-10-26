<template>
  <v-container>
    <v-row v-for="m in 2" :key="m">
      <v-col v-for="n in 4" :key="n" align="center">
        <music-square
          :isPlaylist="true"
          :musicInfo="musicInfo[4 * (m - 1) + (n - 1)]"
        ></music-square>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
import MusicSquare from "./MusicSquare";
export default {
  name: "Home",
  components: {
    "music-square": MusicSquare
  },
  data: () => ({
    musicInfo: [
      {
        title: "Cool Songs",
        albumCover: "./assets/foot-lettuce.png",
        source: "Spotify"
      }
    ]
  })
};
</script>
