import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const DetailsView = () => import("@/views/DetailsView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/novo",
      component: DetailsView,
    },
    {
      path: "/editar/:id",
      component: DetailsView,
    },
  ],
});

export default router;
