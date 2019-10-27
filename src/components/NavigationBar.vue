<template>
	<v-app-bar color="#11171C" app>
    <v-app-bar-nav-icon />
    <v-tabs :value="activeTab" background-color="transparent">
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
