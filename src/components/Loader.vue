<script setup lang="ts">
import { useLoaderStore } from "@/store/loader-store";
import { storeToRefs } from "pinia";

const loaderStore = useLoaderStore();
const { loading } = storeToRefs(loaderStore);
</script>

<template>
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
.loader-container {
  background-color: #000d;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    border: 16px solid transparent;
    border-top: 16px solid #fff;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
