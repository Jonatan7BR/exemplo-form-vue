<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "./store/theme-store";
import { onMounted, watch } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Loader from "./components/Loader.vue";
import SnackBar from "./components/SnackBar.vue";

const themeStore = useThemeStore();
const { isDarkMode } = storeToRefs(themeStore);

onMounted(() => {
  let userPrefersDarkMode = false;
  const themePreference = localStorage.getItem("darkMode");

  if (themePreference !== null) {
    userPrefersDarkMode = themePreference === "1";
  } else {
    userPrefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
  }

  themeStore.setTheme(userPrefersDarkMode);
});

watch(isDarkMode, () => {
  if (isDarkMode.value) {
    document.body.classList.remove("lightmode");
    document.body.classList.add("darkmode");
    document.documentElement.style.setProperty("color-scheme", "dark");
    localStorage.setItem("darkMode", "1");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
    document.documentElement.style.setProperty("color-scheme", "light");
    localStorage.setItem("darkMode", "0");
  }
});
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
  <Loader />
  <SnackBar />
</template>
