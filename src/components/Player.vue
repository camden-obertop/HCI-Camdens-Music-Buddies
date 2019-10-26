<template>
  <div class="player--row">
      <div class="song-info--column">
          <h1> Song  Title</h1>
          <h2> artist</h2>
      </div>
      <div class="playing-info--column">
    </div>
  </div>
</template>

<script>
 
export default {
  name: "player",
  data: function () {
    return {
      songName: 'Chillis'
      
    }
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
</style>