<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      color="transparent"
      height="260px"
      width="200px"
      :class="{ 'on-hover': hover }"
      elevation="0"
    >
      <v-img height="200px" width="200px" :class="{ 'on-hover': hover }" :src="musicInfo.artURL">
        <v-container class="fill-height">
          <v-row justify="space-between">
            <v-col>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-if="!isPlaylist"
                    :class="{ 'show-btns': hover }"
                    :color="hover && isFavorited(musicInfo) ? 'yellow' : transparent"
                    v-on="on"
                    @click="toggleFavorite(musicInfo)"
                    icon
                  >
                    <v-icon
                      :class="{ 'show-btns': hover }"
                      :color="hover && isFavorited(musicInfo) ? 'yellow' : transparent"
                    >mdi-star</v-icon>
                  </v-btn>
                </template>
                <span>{{isFavorited(musicInfo) ?"Unfavorite":"Favorite"}}</span>
              </v-tooltip>
            </v-col>
            <v-col>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn :class="{ 'show-btns': hover }" :color="transparent" icon>
                    <v-icon
                      :class="{ 'show-btns': hover }"
                      :color="transparent"
                      @click="play(musicInfo)"
                      v-on="on"
                      size="65"
                    >mdi-play</v-icon>
                  </v-btn>
                </template>
                <span>Play</span>
              </v-tooltip>
            </v-col>
            <v-col>
              <v-menu offset-x fixed>
                <template v-slot:activator="{ on: menu }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on: tooltip }">
                      <v-btn
                        v-if="!isPlaylist"
                        :class="{ 'show-btns': hover }"
                        :color="transparent"
                        v-on="{...tooltip,...menu}"
                        icon
                      >
                        <v-icon :class="{ 'show-btns': hover }" :color="transparent">mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <span>Add to playlist</span>
                  </v-tooltip>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in playlists"
                    :key="index"
                    @click="toggleInPlaylist({playlist: item, addableItem: musicInfo})"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute :z-index="-1" color="black" />
        </v-fade-transition>
      </v-img>
      <v-card-text
        style="color: #FFFFFF; font: 22px 'Poetsen One', normal !important;"
        class="ma-0 pa-0 text-center"
      >
        <div v-if="!isPlaylist">{{ musicInfo.title }}</div>
        <v-btn 
          v-else-if="isPlaylist" 
          text 
          style="color: #FFFFFF; font: 18px 'Poetsen One', normal !important;"
          @click="navigateToPage()">{{ musicInfo.title }} 
        </v-btn>
      </v-card-text>
      <v-card-text
        v-if="!isPlaylist"
        style="color: #D3D3D3; font:18px 'Poetsen One', normal !important;"
        class="ml-5 pa-0 text-center subtitle-2"
      >
        {{ musicInfo.artist }}
        <v-img
          style="display:inline-block; float:right; margin-right:25px"
          width="20px"
          height="20px"
          :src="platformIconURL"
        />
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style scoped src="./music-square.css"/>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapGetters([
      "playlists",
      "favoriteSongs",
      "isFavorited"
    ]),
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
    ...mapActions([
      "play",
      "toggleInPlaylist",
      "toggleFavorite"
    ]),
    navigateToPage() {
      this.$router.push({
        name: "Playlist",
        params: { playlistID: this.musicInfo.ID }
      });
    }
  },
  data: () => ({
    transparent: "rgba(255, 255, 255, 0)"
  })
};
</script>
