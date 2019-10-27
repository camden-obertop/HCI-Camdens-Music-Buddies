<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      height="275px"
      width="200px"
      :class="{ 'on-hover': hover }"
      elevation="0"
    >
      <v-img
        height="200px"
        width="200px"
        :class="{ 'on-hover': hover }"
        :src="musicInfo.artURL"
      >
        <v-container class="fill-height">
          <v-row justify="space-between">
            <v-col>
              <v-btn
                v-if="!isPlaylist"
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
                    v-if="!isPlaylist"
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
                    @click="onAddPlaylist(item)"
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
      <v-card-text class="ma-0 pa-0 text-center title">
        <div v-if="!isPlaylist">
          {{ musicInfo.title }}
        </div>
        <v-btn v-else-if="isPlaylist" text @click="navigateToPage()">
          {{ musicInfo.title }}
        </v-btn>
      </v-card-text>
      <v-card-text v-if="!isPlaylist" class="ml-5 pa-0 text-center subtitle-2"
        >{{ musicInfo.artist }}
        <v-img
          style="display:inline-block; float:right; margin-right:25px"
          width="20px"
          height="20px"
          :src="platformIconURL"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router";
export default {
  props: {
    musicInfo: {
      type: Object
    },
    isPlaylist: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters(["playlists"]),
    platformIconURL: function() {
      if (this.musicInfo.platform === "Spotify") {
        return "./assets/spotify-logo.png";
      } else if (this.musicInfo.platform === "Youtube") {
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
        console.log("Unfavorited.");
      }
    },
    onPlay() {
      console.log("Played");
    },
    onAddPlaylist(playlist) {
      console.log(`Added to playlist ${playlist.title}`);
    },
    navigateToPage() {
      console.log(this.musicInfo.ID);
      router.push({
        name: "Playlist",
        params: { playlistID: this.musicInfo.ID }
      });
    }
  },
  data: () => ({
    // TODO Auto detect this from looking at the favorite songs vuex
    starSelected: false,
    transparent: "rgba(255, 255, 255, 0)"
  })
};
</script>

<style scoped>
.v-img {
  transition: opacity 0.2s ease-in-out;
  opacity: 0.5;
}

.v-img:not(.on-hover) {
  opacity: 1;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
