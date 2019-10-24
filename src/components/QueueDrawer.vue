<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer permanent style="top: 64px; position: relative; height: 100%;">
    <v-list style="background-color: #A4A4A4; overflow: scroll;" dense>
      <h3 style="text-align: center;"> {{ queueTitle }} </h3>
      <v-list-item style="background-color: #D1D1D1" v-for="song in songs" :key="song.id" color="purple" selectable>
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
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        },
        {
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        },
        {
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        },
        {
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        },
        {
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        },
        {
          id: 0,
          title: 'Red Eyes',
          artist: 'Chills',
          album: 'unknown'
        }
      ];
    }
  }
};
</script>
