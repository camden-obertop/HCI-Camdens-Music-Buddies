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
        title: "Dreamland",
        artist: "Chills",
        albumCover: "./assets/chills-album-cover.jpeg",
        source: "Spotify"
      },
      {
        title: "Run",
        artist: "Awolnation",
        albumCover: "./assets/awolnation.jpg",
        source: "Youtube"
      },
      {
        title: "OK Computer",
        artist: "Radiohead",
        albumCover: "./assets/ok-computer.jpg",
        source: "Spotify"
      },
      {
        title: "In Rainbows",
        artist: "Radiohead",
        albumCover: "./assets/in-rainbows.jpg",
        source: "Spotify"
      },
      {
        title: "Face Stabber",
        artist: "Oh Sees",
        albumCover: "./assets/face-stabber.jpg",
        source: "Spotify"
      },
      {
        title: "Jinx",
        artist: "Crumb",
        albumCover: "./assets/jinx.png",
        source: "Spotify"
      },
      {
        title: "Oddments",
        artist: "King Gizzard",
        albumCover: "./assets/oddments.jpg",
        source: "Spotify"
      },
      {
        title: "Nonagon Infinity",
        artist: "King Gizzard",
        albumCover: "./assets/nonagon-infinity.jpg",
        source: "Spotify"
      }
    ]
  })
};
</script>
