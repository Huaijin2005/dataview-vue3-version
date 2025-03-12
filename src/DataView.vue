<script setup lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div id="data-view">
    <RouterView />
  </div>
</template>

<style scoped>
#data-view {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000d20;
}
</style>
