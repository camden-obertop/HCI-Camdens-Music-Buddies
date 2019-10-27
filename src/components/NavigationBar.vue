<template>
	<v-app-bar color="#11171C" dark app>
    <v-app-bar-nav-icon />
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
    <v-autocomplete label="Search:" id="searchBar" />
  </v-app-bar>
</template>

<style scoped src="./navigation-bar.css"/>

<script>
export default {
  name: "navigationBar",
  data: function () {
    return {
    	headers: ['Home', 'Albums', 'Playlists', 'Songs', 'Friends']
    }
  },
  methods: {
    navigateToPage(pageName) {
      this.$store.dispatch('navigateToPage', pageName);
    }
  },
  computed: {
    activeTab: function () {
      return this.headers.indexOf(this.$route.name);
    }
  }
};
</script>
