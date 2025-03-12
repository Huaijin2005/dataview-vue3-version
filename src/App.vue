<script setup lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import DataView from "./DataView.vue";
</script>

<template>
  <div id="app" class="h-full">
    <data-view />
  </div>
</template>

<style scoped></style>
