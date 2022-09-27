<template>
  <n-card
    ><n-h2>文件已上传</n-h2>
    <n-a
      :download="query.fileName"
      :href="`https://file-sharing-app-7777.herokuapp.com/file/${query.fileLink}`"
      >{{
        `https://file-sharing-app-7777.herokuapp.com/file/${query.fileLink}`
      }}</n-a
    >
  </n-card>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

const Route = useRoute();

const { query } = Route;
</script>

<style scoped></style>
