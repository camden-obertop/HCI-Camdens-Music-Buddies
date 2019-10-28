<template>
  <v-row>
    <v-col>
      <h1>{{ currentQueueSong.title }}</h1>
      <h2>{{ currentQueueSong.artist }}</h2>
      <!-- TODO Add the art image here -->
    </v-col>
    <!-- TODO properly center these buttons later so we don't need the cols -->
    <v-col>
      <v-row>
        <v-col />
        <v-col />
        <v-col>
          <v-icon
            :class="{ 'show-btns': playButtonHover }"
            @click="skipQueueBackwards()"
            size="65"
          >
            {{ 'mdi-skip-backward' }}
          </v-icon>
        </v-col>
        <v-col>
          <v-hover v-slot:default="{ playButtonHover }">
            <v-icon
              :class="{ 'show-btns': playButtonHover }"
              @click="togglePlaying()"
              size="65"
            >
              {{currentQueueSong.isPlaying() ?'mdi-pause':'mdi-play'}}
            </v-icon>
          </v-hover>
        </v-col>
        <v-col>
          <v-icon 
            :class="{ 'show-btns': playButtonHover }"
            @click="skipQueueForwards()"
            size="65"
          >
            {{ 'mdi-skip-forward' }}
          </v-icon>
          <!-- TODO Place the forward jump button here -->
        </v-col>
        <v-col>
          <v-hover v-slot:default="{ muteButtonHover }">
            <v-icon
              :class="{ 'show-btns': muteButtonHover }"
              @click="toggleMute()"
              size="65"
            >
              {{ currentQueueSong.isMuted() ? 'mdi-volume-mute': 'mdi-volume-high'}}
            </v-icon>
          </v-hover>
        </v-col>
        <v-col />
        <!-- </v-layout> -->
      </v-row>
      <v-row>
        <!-- TODO Reimplement the value to bind the seeking -->
        <v-slider thumb-label="always" :max="100" :min="0" />
      </v-row>
    </v-col>
    <v-col />
  </v-row>
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
      'toggleMute',
      'skipQueueBackwards',
      'skipQueueForwards'
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