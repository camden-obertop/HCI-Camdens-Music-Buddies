<template>
  <slotted-table :maxRows="maxRows" :columns="columns" :items="favoriteSongs">
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
import { mapGetters } from "vuex";
import SlottedTable from "../components/SlottedTable";
export default {
  name: "songsBrowser",
  components: {
    "music-square": MusicSquare,
    "slotted-table": SlottedTable
  },
  computed: {
    ...mapGetters([
      'favoriteSongs'
    ])
  },
  data: () => ({
    maxRows: 2,
    columns: 4
  })
};
</script>