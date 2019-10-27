<template>
  <v-container>
    <!-- TODO Make it so that each component correctly takes up it's space, and that we no longer require the invisible blocks that are causing errors -->
    <template v-for="i in Math.ceil(items.length/maxRows)">
      <v-row align="start" :key="i">
        <!-- TODO Check if this fix works on multiple screen sizes -->
        <v-col v-for="item in items.slice((i-1)*columns, i*columns)" :key="item.toString()">
          <slot name="cell" :item="item"/>
        </v-col>
        <v-col v-for="pad in columns - items.slice((i-1)*columns, i*columns).length" :key="pad">
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "slottedTable",
  props: {
    items: {
      type: Array
    },
    columns: {
      type: Number,
      default: 4
    },
    maxRows: {
      type: Number,
      default: 2
    }
  }
};
</script>

<style scoped></style>