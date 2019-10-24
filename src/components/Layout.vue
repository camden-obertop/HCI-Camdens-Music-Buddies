<template>
  <div class="layoutGrid">
    <navigation-bar class="gridNavigation" />
    <queue-drawer :drawer-open="open" class="gridQueue" />
    <v-content class="gridContent">
      <router-view></router-view>
    </v-content>
    <div class="gridPlayer" style="border-style: solid;">
      Player
    </div>
  </div>
</template>

<script>
  import NavigationBar from './NavigationBar';
  import QueueDrawer from './QueueDrawer';
export default {
  name: "layout",
  components: {
    'navigation-bar': NavigationBar,
    'queue-drawer': QueueDrawer
  },
  data: function () {
    return {
      open: true
    }
  }
};
</script>
<style scoped>
  /* https://www.w3schools.com/css/css_grid.asp */
  .layoutGrid {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
      "navigation navigation navigation"
      "queue content content "
      "player player player";
    grid-template-columns: max-content auto minmax(max-content, 64px);
    grid-template-rows: max-content auto minmax(max-content, 64px);
  }
  .gridNavigation {
    grid-area: navigation;
  }
  .gridQueue {
    grid-area: queue;
  }
  .gridContent {
    grid-area: content;
  }
  .gridPlayer {
    grid-area: player
  }
</style>