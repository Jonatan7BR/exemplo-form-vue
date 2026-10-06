<script setup lang="ts">
import { useMessageStore } from "@/store/message-store";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const messageStore = useMessageStore();
const { message, messageType, messageVisible } = storeToRefs(messageStore);

watch(messageVisible, () => {
  setTimeout(() => {
    messageStore.hideMessage();
  }, 5000);
});
</script>

<template>
  <div v-if="messageVisible" class="snack-bar-container">
    <div class="snack-bar" :class="[{ show: messageVisible }, messageType]">
      {{ message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.snack-bar-container {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  align-items: flex-end;
  justify-content: center;
  z-index: -10;

  .snack-bar {
    visibility: hidden;
    min-width: 250px;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 10;
    bottom: 30px;

    &.show {
      visibility: visible;
      animation:
        fadein 500ms,
        fadeout 500ms 4.5s;
    }

    &.success {
      background-color: darkgreen;
    }

    &.error {
      background-color: maroon;
    }
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
