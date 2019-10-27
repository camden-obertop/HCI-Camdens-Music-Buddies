<template>
  <v-data-table :headers="headers" :items="songs">
      <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td><v-btn icon @click="playSong(item)"><v-icon>mdi-play</v-icon></v-btn></td>
                <td>{{item.title}}</td>
                <td>{{item.artist}}</td>
                <td>{{item.album}}</td>
                <td>{{item.platform}}</td>
            </tr>
          </tbody>
      </template>
  </v-data-table>
</template>

<script>
export default {
  name: "playlist",
  computed: {
    songs: function() {
      return Array.from(
        this.$store.state.playlists.filter(
          playlist => playlist.ID === parseInt(this.$route.params.playlistID)
        )[0].songs
      );
    }
  },
  methods: {
      playSong(item) {
          console.log(item.title)
      }
  },
  data: () => ({
    headers: [
      { text: "Action", value: "action" },
      { text: "Song", value: "title" },
      { text: "Artist", value: "artist" },
      { text: "Album", value: "album" },
      { text: "Platform", value: "platform" }
    ]
  })
};
</script>

<style scoped></style>
