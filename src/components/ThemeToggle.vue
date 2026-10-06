<script setup lang="ts">
import { useThemeStore } from "@/store/theme-store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const themeStore = useThemeStore();
const { isDarkMode } = storeToRefs(themeStore);

const buttonTitle = computed(() =>
  isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro",
);

const changeTheme = () => {
  themeStore.toggleTheme();
};
</script>

<template>
  <button
    type="button"
    :title="buttonTitle"
    class="toggle-theme material-symbols-outlined"
    @click="changeTheme"
  >
    {{ isDarkMode ? "dark_mode" : "light_mode" }}
  </button>
</template>

<style scoped lang="scss">
.toggle-theme {
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
}
</style>
