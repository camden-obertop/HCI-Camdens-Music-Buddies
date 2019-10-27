<template>
  <div class="layoutGrid">
    <navigation-bar class="gridNavigation" />
    <queue-drawer :drawer-open="open" class="gridQueue" />
    <v-content class="gridContent">
      <router-view></router-view>
    </v-content>
    <div class="gridPlayer" style="background-color:#11171C;">
      Player
    </div>
  </div>
</template>

<style scoped src="./layout.css"/>

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