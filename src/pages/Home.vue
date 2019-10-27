<template>
  <slotted-table :maxRows="maxRows" :columns="columns" :items="songs">
    <template #cell="data">
      <music-square
        :isPlaylist="false"
        :musicInfo="data.item"
      />
    </template>
  </slotted-table>
</template>

<style scoped></style>

<script>
import MusicSquare from "../components/MusicSquare";
import SlottedTable from "../components/SlottedTable";
export default {
  name: "Home",
  components: {
    "music-square": MusicSquare,
    "slotted-table": SlottedTable
  },
  computed: {
  	songs: function () {
  		return this.$store.state.songs;
  	}
  },
  data: () => ({
    columns: 4,
    maxRows: 2
  })
};
</script>
