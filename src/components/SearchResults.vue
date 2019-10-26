<template>
  <v-container>
    <v-row v-for="m in 2" :key="m">
      <v-col v-for="n in 4" :key="n" align="center">
        <music-square
          :isPlaylist="false"
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
        title: "Number 15",
        artist: "Chills",
        albumCover: "./assets/chills-album-cover.jpeg",
        source: "Spotify"
      },
      {
        title: "Number 15",
        artist: "Chills",
        albumCover: "./assets/chills-album-cover.jpeg",
        source: "Youtube"
      },
      {
        title: "Hard in the Paint",
        artist: "Numero 15",
        albumCover: "./assets/hard-in-the-paint.jpg",
        source: "Spotify"
      },
      {
        title: "Swap Meet",
        artist: "Chills",
        albumCover: "./assets/chills-album-cover.jpeg",
        source: "Youtube"
      },
      {
        title: "Friday Night",
        artist: "Chills",
        albumCover: "./assets/a-friday-night.jpg",
        source: "Youtube"
      },
      {
        title: "Sidelined",
        artist: "Chills",
        albumCover: "./assets/sidelined.jpg",
        source: "Youtube"
      },
      {
        title: "Number 15 Lyrics",
        artist: "Chills",
        albumCover: "./assets/chills-album-cover.jpeg",
        source: "Youtube"
      },
      {
        title: "Dreamland",
        artist: "Chills",
        albumCover: "./assets/dreamland.jpg",
        source: "Youtube"
      }
    ]
  })
};
</script>
