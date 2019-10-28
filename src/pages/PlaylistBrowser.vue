<template>
  <!-- TODO Change play button for playing song to playing song from clicking on row -->
  <v-data-table :headers="headers" :items="playlist(this.$route.params.playlistID).songs">
    <template v-slot:body="{ items }">
      <tbody>
        <tr @click="play(item)" v-for="(item, index) in items" :key="'playlist' + index">
          <td>{{ item.title }}</td>
          <td>{{ item.artist }}</td>
          <td>{{ item.album }}</td>
          <td>{{ item.platform }}</td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: "playlist",
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  methods: {
    ...mapActions([
      'play'
    ])
  },
  data: () => ({
    headers: [
      { text: "Song", value: "title" },
      { text: "Artist", value: "artist" },
      { text: "Album", value: "album" },
      { text: "Platform", value: "platform" }
    ]
  })
};
</script>

<style scoped></style>
