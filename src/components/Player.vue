<template>
  <div class="player--row">
    <div class="song-info--column">
      <h1>{{songName}}</h1>
      <h2>{{songArtist}}</h2>
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
      <v-slider :max="songLengthSecondsTimeTen" :value="tenthSecondPlaying" @change="slidTime()"></v-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  props: {
    songInfo: {
      type: Object
    }
  },
  data: function() {
    return {
      songName: "Chillis",
      songArtist: "peppers",
      playing: false,
      soundOn: true,
      songLengthSecondsTimeTen: 3760,
      tenthSecondPlaying: 0,
      songUrl:"http://k007.kiwi6.com/hotlink/3s5pi9as7v/A_Bit_Of_Armless_Fun.mp3",
      audio: null,
    };
  },
  methods: {
      recieveSong(){
          this.tenthSecondPlaying = 0;
          this.songName = this.songInfo.songName;
          this.songArtist = this.songInfo.songArtist;
          this.playing=false;
          this.songUrl = this.songInfo.songUrl;
          this.playAndPause();

      },
      slidTime(){
        this.audio.currentTime = this.tenthSecondPlaying*10; 
      },
    playAndPause() {
      this.playing = !this.playing;
      if (this.playing) {
        this.playSong();
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
        this.stopSong();
      }
    },
    playSong(){
        // Need to specify time in song
        this.audio = new Audio(this.songUrl);
        this.audio.currentTime = this.tenthSecondPlaying / 10;
        this.audio.play();
        // Why add an unnescary if
        this.audio.muted =!this.soundOn;

    },
    stopSong(){
        this.audio.pause();
    },

    muteAndUnmute() {
      this.soundOn = !this.soundOn;
      this.audio.muted = !this.soundOn;
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