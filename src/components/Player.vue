<template>
  <div class="player--row">
    <div class="song-info--column">
      <h1>Song Title</h1>
      <h2>artist</h2>
    </div>
    <div class="playing-info--column">
      <div class="icons--row">
        <v-icon
          :class="{ 'show-btns': hover }"
          :color="transparent"
          @click="playAndPause()"
          size="65"
        >{{playing==true?'mdi-pause':'mdi-play'}}</v-icon>
        <v-icon
          :class="{ 'show-btns': hover }"
          :color="transparent"
          @click="muteAndUnmute()"
          size="65"
        >{{soundOn==true?'mdi-volume-high':'mdi-volume-mute'}}</v-icon>
      </div>
      <v-slider :max="songLengthSecondsTimeTen" :value="tenthSecondPlaying"></v-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  data: function() {
    return {
      songName: "Chillis",
      playing: false,
      soundOn: true,
      songLengthSecondsTimeTen: 3760,
      tenthSecondPlaying: 0
    };
  },
  methods: {
    playAndPause() {
      this.playing = !this.playing;
      if (this.playing) {
        this.playingFunc = setInterval(() => {
          if (this.tenthSecondPlaying < this.songLengthSecondsTimeTen) {
            this.tenthSecondPlaying += 1;
          } else {
            this.playAndPause();
          }
        }, 100);
      }
      if (!this.playing) {
        clearInterval(this.playingFunc);
      }
    },
    muteAndUnmute() {
      this.soundOn = !this.soundOn;
    },

    next() {},
    last() {},
    oncreate() {
      this.playAndPause();
    }
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