<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer permanent style="height:calc(100% - 64px); top: 64px; position: relative; overflow-y: scroll">
    <v-list style="background-color: #A4A4A4; height: 100%">
      <h3 style="text-align: center;"> {{ queue.title }} </h3>
      <v-list-item 
        style="background-color: #D1D1D1; margin: 7px" 
        v-for="(song, index) in queue.songs" 
        :key="index + 'song'" 
        @click="playQueueSong(song)"
        selectable
      >
        {{ song.title }} - {{ song.artist }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex';
export default {
  name: "queueDrawer",
  props: {
    drawerOpen: Boolean
  },
  methods: {
    playQueueSong(song) {
      console.log('play song');
      song;
      // this.$store.dispatch('playSong', song);
    }
  },
  computed: {
    ...mapGetters([
      'queue'
    ])
  }
};
</script>
