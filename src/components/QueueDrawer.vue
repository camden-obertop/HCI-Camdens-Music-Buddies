<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer permanent color="#1E2830" dark style="height:calc(100% - 64px); top: 64px; position: relative; overflow-y: scroll; max-height: 80vh">
    <v-list style="height: 100%">
      <h3 style="text-align: center;"> {{ queue.title }} </h3>
      <v-list-item 
        style="background-color: #D50059; margin: 7px 0px" 
        v-for="(song, index) in queue.songs" 
        :key="index + 'song'" 
        @click="play(song)"
        selectable
      >
        {{ song.title }} - {{ song.artist }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: "queueDrawer",
  props: {
    drawerOpen: Boolean
  },
  methods: {
    ...mapActions([
      'play'
    ])
  },
  computed: {
    ...mapGetters([
      'queue'
    ])
  }
};
</script>
