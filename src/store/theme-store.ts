import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDarkMode = ref(false);

  const setTheme = (darkMode: boolean) => {
    isDarkMode.value = darkMode;
  };

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return { isDarkMode, setTheme, toggleTheme };
});
