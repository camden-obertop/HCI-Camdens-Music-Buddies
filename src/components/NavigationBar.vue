<template>
	<v-app-bar color="#11171C" dark app>
    <v-app-bar-nav-icon @click="toggleDrawer()" />
    <v-tabs :value="activeTab" dark slider-color="#D50059" background-color="transparent">
      <v-tab
        v-for="header in headers" 
        :key="header"
        @click="navigateToPage(header)"
      >
        {{ header }}
      </v-tab>
    </v-tabs>
    <!-- TODO Make this look nicer and to be properly lined up -->
    <!-- TODO Make the results use dark mode -->
    <v-autocomplete label="Search:" :items="['Number 15']" id="searchBar" class="pt-4" @click="navigateToPage('Search')" dark />
    <v-btn @click="navigateToPage('Settings')" icon>
      <v-icon x-large>mdi-settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapActions } from 'vuex';
export default {
  name: "navigationBar",
  data: function() {
    return {
      headers: ["Home", "Albums", "Playlists", "Songs", "Friends"]
    };
  },
  methods: {
    ...mapActions([
      'navigateToPage'
    ]),
    toggleDrawer() {
      this.$store.commit('toggleDrawer');
    }
  },
  computed: {
    activeTab: function() {
      const splitPath = this.$route.path.split("/")
      if (splitPath.length == 3) {
        return this.headers.indexOf("Playlists");
      }
      return this.headers.indexOf(this.$route.name);
    }
  }
};
</script>
