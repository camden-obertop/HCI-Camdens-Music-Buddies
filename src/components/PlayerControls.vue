<template>
  <div class="player--row">
    <div class="song-info--column">
      <h1>{{ currentQueueSong.title }}</h1>
      <h2>{{ currentQueueSong.artist }}</h2>
      <!-- TODO Add the art image here -->
    </div>
    <div class="playing-info--column">
      <div class="icons--row">
        <v-hover v-slot:default="{ playButtonHover }">
          <v-icon
            :class="{ 'show-btns': playButtonHover }"
            @click="togglePlaying()"
            size="65"
          >
            {{currentQueueSong.isPlaying() ?'mdi-pause':'mdi-play'}}
          </v-icon>
        </v-hover>
        <v-hover v-slot:default="{ muteButtonHover }">
          <v-icon
            :class="{ 'show-btns': muteButtonHover }"
            @click="toggleMute()"
            size="65"
          >
            {{ currentQueueSong.isMuted() ? 'mdi-volume-mute': 'mdi-volume-high'}}
          </v-icon>
        </v-hover>
      </div>
      <!-- TODO Reimplement the value to bind the seeking -->
      <v-slider :max="100" :min="0" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: "playerControls",
  props: {
    songInfo: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      'currentQueueSong'
    ])
  },
  methods: {
    ...mapActions([
      'togglePlaying',
      'toggleMute'
    ]),
  }
};
</script>
<style scoped>
.player--row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.song-info--column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.song-info--column h1,
h2 {
  text-align: left;
}
.playing-info--column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.icons--row {
  display: flex;
  justify-content: center;
}
</style>