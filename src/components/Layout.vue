<template>
  <div style="min-width: 64px; overflow: visible; position: relative;">
    <navigation-bar />
    <queue-drawer :drawer-open="open"></queue-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
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
