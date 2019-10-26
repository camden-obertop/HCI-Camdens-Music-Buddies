<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer permanent style="top: 64px; position: relative; overflow-y: scroll">
    <v-list style="background-color: #A4A4A4; height: 100%" dense>
      <h3 style="text-align: center;"> {{ queueTitle }} </h3>
      <v-list-item style="background-color: #D1D1D1" v-for="song in songs" :key="song.title + song.platform" color="purple" selectable>
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
  data: function () {
    return {
    	headers: ['Home', 'Albums', 'Playlists', 'Songs', 'Friends']
    }
  },
  computed: {
    // TODO Retrieve this value from the Vuex
    queueTitle: function () {
      return 'Cool Songs'
    },
    // TODO Retrieve this value from the Vuex
    songs: function () {
      return [
        {
          title: 'Red Eyes',
          artist: 'Chills',
          platform: 'Spotify'
        },
        {
          title: 'Red Eyes',
          artist: 'Chills',
          platform: 'Spotify'
        }
      ];
    }
  }
};
</script>
