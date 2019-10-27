<template>
  <v-container>
    <template v-for="i in Math.ceil(items.length/maxRows)">
      <v-row align="start" :key="i">
        <v-col v-for="item in items.slice((i-1)*columns, i*columns)" :key="item.toString()">
          <slot name="cell" :item="item"/>
        </v-col>
        <!-- These add empty columns so that we get our desired row width -->
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