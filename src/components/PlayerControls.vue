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
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-hover v-slot:default="restartButtonHover">
                <v-icon
                  :class="{ 'show-btns': restartButtonHover }"
                  @click="restartQueueSong()"
                  size="65"
                  v-on="on"
                >
                  {{ 'mdi-restart' }}
                </v-icon>
              </v-hover>
            </template>
            <span> Restart </span>
          </v-tooltip>
        </v-col>
        <v-col>
         <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-hover v-slot:default="skipBackwardsButtonHover">
                <v-icon
                  :class="{ 'show-btns': skipBackwardsButtonHover }"
                  @click="skipQueueBackwards()"
                  size="65"
                  v-on="on"
                >
                  {{ 'mdi-skip-backward' }}
                </v-icon>
              </v-hover>
            </template>
            <span>Skip Backwards</span>
          </v-tooltip>
        </v-col>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-hover v-slot:default="playButtonHover">
                <v-icon
                  :class="{ 'show-btns': playButtonHover }"
                  @click="togglePlaying()"
                  size="65"
                  v-on="on"
                >{{currentQueueSong.isPlaying() ?'mdi-pause':'mdi-play'}}</v-icon>
              </v-hover>
            </template>
            <span>{{currentQueueSong.isPlaying() ?'Pause':'Play'}}</span>
          </v-tooltip>
        </v-col>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-hover v-slot:default="skipFowardsButtonHover">
                <v-icon
                  :class="{ 'show-btns': skipFowardsButtonHover }"
                  @click="skipQueueForwards()"
                  size="65"
                  v-on="on"
                >{{ 'mdi-skip-forward' }}</v-icon>
              </v-hover>
            </template>
            <span>Skip Forwards</span>
          </v-tooltip>
        </v-col>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-hover v-slot:default="{ muteButtonHover }">
                <v-icon
                  :class="{ 'show-btns': muteButtonHover }"
                  @click="toggleMute()"
                  size="65"
                >
                  {{ currentQueueSong.isMuted() ? 'mdi-volume-mute': 'mdi-volume-high'}}
                </v-icon>
            </v-hover>
            </template>
            <span>{{currentQueueSong.isMuted() ? 'Unmute': 'Mute'}}</span>
          </v-tooltip>
        </v-col>
        <v-col />
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
      "togglePlaying",
      "toggleMute",
      "skipQueueBackwards",
      "skipQueueForwards",
      "restartQueueSong"
    ])
  }
};
</script>
<style scoped>
</style>