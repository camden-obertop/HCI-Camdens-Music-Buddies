<template>
  <div class="layoutGrid">
    <navigation-bar class="gridNavigation" />
    <queue-drawer :drawer-open="$store.state.drawer" class="gridQueue" />
    <v-content class="gridContent">
      <router-view></router-view>
    </v-content>
    <player-controls class="gridPlayer" style="border-style: solid;" />
  </div>
</template>

<style scoped src="./layout.css"/>

<script>
  import NavigationBar from './NavigationBar';
  import QueueDrawer from './QueueDrawer';
  import PlayerControls from './PlayerControls';
export default {
  name: "layout",
  components: {
    'navigation-bar': NavigationBar,
    'queue-drawer': QueueDrawer,
    'player-controls': PlayerControls
  }
};
</script>