<template>
  <slotted-table :maxRows="maxRows" :columns="columns" :items="favoriteAlbums">
    <template #cell="data">
      <music-square
        :isPlaylist="false"
        :musicInfo="data.item"
      />
    </template>
  </slotted-table>
</template>

<script>
	import SlottedTable from '../components/SlottedTable';
	import MusicSquare from '../components/MusicSquare';
	import { mapGetters } from "vuex"
export default {
  name: "albumsBrowser",
  components: {
  	'slotted-table': SlottedTable,
  	'music-square': MusicSquare
  },
  computed: {
  	...mapGetters([
  		'favoriteAlbums'
	 ])
  },
  data: () => ({
  	columns: 4,
  	maxRows: 2
  })
};
</script>
