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
<style scoped src="./layout.css"/>