<template>
  <div class="layoutGrid">
    <navigation-bar class="gridNavigation" />
    <queue-drawer :drawer-open="open" class="gridQueue" />
    <v-content class="gridContent">
      <router-view></router-view>
    </v-content>
<<<<<<< HEAD
    <div class="gridPlayer" style="background-color:#11171C;">
      Player
    </div>
=======
    <player-controls class="gridPlayer" style="border-style: solid;" />
>>>>>>> 055440cb3dd02f0a65cab3c20baa18fb35ddc8b0
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
  },
  data: () => ({
    open: true
  })
};
</script>