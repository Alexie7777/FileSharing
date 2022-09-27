<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div
    style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      max-width: 40rem;
    "
  >
    <router-view></router-view>
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
}
</style>
