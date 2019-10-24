<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      height="300px"
      width="200px"
      :class="{ 'on-hover': hover }"
      elevation="0"
    >
      <v-img
        height="200px"
        width="200px"
        :class="{ 'on-hover': hover }"
        :src="musicInfo.albumCover"
      >
        <v-container class="fill-height">
          <v-row justify="space-between">
            <v-col>
              <v-btn
                :class="{ 'show-btns': hover }"
                :color="hover && starSelected ? 'yellow' : transparent"
                @click="onAddFavorite()"
                icon
              >
                <v-icon
                  :class="{ 'show-btns': hover }"
                  :color="hover && starSelected ? 'yellow' : transparent"
                >
                  mdi-star
                </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn :class="{ 'show-btns': hover }" :color="transparent" icon>
                <v-icon
                  :class="{ 'show-btns': hover }"
                  :color="transparent"
                  @click="onPlay()"
                  size="65"
                >
                  mdi-play
                </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-menu offset-x>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :class="{ 'show-btns': hover }"
                    :color="transparent"
                    v-on="on"
                    icon
                  >
                    <v-icon
                      :class="{ 'show-btns': hover }"
                      :color="transparent"
                    >
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in playlists"
                    :key="index"
                    @click="onAddPlaylist(index)"
                    ><v-list-item-title>{{
                      item.title
                    }}</v-list-item-title></v-list-item
                  >
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <v-card-text class="ma-0 pa-0 text-center title">{{
        musicInfo.title
      }}</v-card-text>
      <v-card-text class="ml-5 pa-0 text-center subtitle-2"
        >{{ musicInfo.artist }}
        <v-img
          style="display:inline-block; float:right; margin-right:25px"
          width="20px"
          height="20px"
          :src="musicSource"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style scoped>
.v-img {
  transition: opacity 0.2s ease-in-out;
  opacity: 0.9;
}

.v-img:not(.on-hover) {
  opacity: 1;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
export default {
  props: {
    musicInfo: {
      type: Object
    }
  },
  computed: {
    musicSource: function() {
      if (this.musicInfo.source === "Spotify") {
        return "./assets/spotify-logo.png";
      } else if (this.musicInfo.source === "Youtube") {
        return "./assets/youtube-logo.png";
      }
      return "";
    }
  },
  methods: {
      onAddFavorite() {
          this.starSelected = !this.starSelected;
          if (this.starSelected === true) {
            console.log("Favorited!");
          } else {
            console.log("Unfavorited.")
          }
      },
      onPlay() {
          console.log("Played");
      },
      onAddPlaylist(index) {
          this.selectedPlaylist = index + 1;
          console.log(`Added to playlist ${this.selectedPlaylist}`);
      }
  },
  data: () => ({
    link: "../assets/chills-album-cover.jpeg",
    starSelected: false,
    selectedPlaylist: 0,
    transparent: "rgba(255, 255, 255, 0)",
    playlists: [
      { title: "Playlist 1" },
      { title: "Playlist 2" },
      { title: "Playlist 3" }
    ]
  })
};
</script>
