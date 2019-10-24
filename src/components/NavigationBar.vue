<template>
	<v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-tabs>
        <v-tab v-for="header in headers" :key="header">
        	{{ header }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
</template>

<script>
export default {
  name: "navigationBar",
  data: function () {
    return {
    	headers: ['Home', 'Albums', 'Playlists', 'Songs', 'Friends']
    }
  }
};
</script>
