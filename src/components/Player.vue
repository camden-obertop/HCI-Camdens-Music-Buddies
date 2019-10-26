<template>
  <div class="player--row">
      <div class="song-info--column">
          <h1> Song  Title</h1>
          <h2> artist</h2>
      </div>
      <div class="playing-info--column">
          <div class ="icons--row">
                <v-icon
                  :class="{ 'show-btns': hover }"
                  :color="transparent"
                  @click="playAndPause()"
                  size="65">
                  {{playing==true?'mdi-pause':'mdi-play'}}
                </v-icon>
              </div>
    </div>
  </div>
</template>

<script>
 
export default {
  name: "player",
  data: function () {
    return {
      songName: 'Chillis',
      playing: true
    }
  },
  methods: {
      playAndPause() {
          this.playing = !this.playing;
      },
      next(){

      },
      last(){

      },
  }
};
</script>
<style scoped>
    .player--row{
        display:flex;
        flex-direction: row;
        justify-content: center;
    }
    .song-info--column{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

    }
    .song-info--column h1, h2{
            text-align: left;
    }
    .playing-info--column{
        display:flex;
        width: 100%;
    }
    .icons--row{
        display:flex;
        justify-content: left;
    }
</style>