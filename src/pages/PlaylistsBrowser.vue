<template>
  <slotted-table :maxRows="maxRows" :columns="columns" :items="playlists">
    <template #cell="data">
      <music-square
        :isPlaylist="true"
        :musicInfo="data.item"
      />
    </template>
  </slotted-table>
</template>

<style scoped></style>

<script>
import MusicSquare from "../components/MusicSquare";
import SlottedTable from "../components/SlottedTable";
import { mapGetters } from "vuex";
export default {
  name: "playlistBrowser",
  components: {
    "music-square": MusicSquare,
    "slotted-table": SlottedTable
  },
  computed: {
    ...mapGetters([
      'playlists'
    ])
  },
  data: () => ({
    columns: 4,
    maxRows: 2
  })
};
</script>
