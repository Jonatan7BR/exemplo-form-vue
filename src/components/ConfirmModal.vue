<script setup lang="ts">
defineProps<{
  visible: boolean;
  dialogText: string;
}>();

defineEmits<{
  (e: "confirm", confirmed: boolean): void;
}>();
</script>

<template>
  <div v-if="visible" class="modal-container">
    <div class="modal">
      <p>{{ dialogText }}</p>
      <div class="button-row">
        <button type="button" @click="$emit('confirm', true)">Sim</button>
        <button type="button" @click="$emit('confirm', false)">Não</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-container {
  background-color: #000d;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    border-radius: 5px;
    background-color: var(--page-background);
    border: 1px solid var(--table-border);
    font-size: 14pt;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .button-row {
      display: flex;
      gap: 5px;

      button {
        font-size: 14pt;
      }
    }
  }
}
</style>
