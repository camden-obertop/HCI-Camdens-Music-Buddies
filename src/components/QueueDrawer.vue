<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer permanent style="top: 64px; position: relative; overflow-y: scroll">
    <v-list style="background-color: #A4A4A4; height: 100%">
      <h3 style="text-align: center;"> {{ queue.title }} </h3>
      <v-list-item 
        style="background-color: #D1D1D1; margin: 7px" 
        v-for="song in queue.songs" 
        :key="song.title + song.platform" 
        @click="playQueueSong(song)"
        selectable
      >
        {{ song.title }} - {{ song.artist }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "queueDrawer",
  props: {
    drawerOpen: Boolean
  },
  methods: {
    playQueueSong(song) {
      this.$store.dispatch('playSong', song);
    }
  },
  computed: {
    queue: function () {
      return this.$store.state.queue;
    }
  }
};
</script>
