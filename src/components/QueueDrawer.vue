<template>
  <!-- TODO Make this top style be bound to the height of navigation bar, or find another way not to overlap -->
  <v-navigation-drawer v-model="drawerOpen" color="#1E2830" dark style="height:calc(100% - 64px); top: 64px; position: relative; overflow-y: scroll">
    <v-list style="height: 100%">
      <h3 style="text-align: center;"> {{ queue.title }} </h3>
      <v-list-item
        v-for="(song, index) in queue.songs" 
        :class="[index == queueIndex ? 'selected-item ': 'deselected-item']"
        :key="index + 'song'" 
        @click="setQueueIndex(index)"
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
      'setQueueIndex'
    ])
  },
  computed: {
    ...mapGetters([
      'queue',
      'queueIndex',
      'currentQueueSong'
    ])
  },
};
</script>

<style scoped>
  .selected-item {
    background-color: #D50059; 
    margin: 7px 0px;
  }
  .deselected-item {
      background-color: #1E2830; 
      margin: 7px 0px;
  }
</style>
