import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/folder/Home",
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },
  {
    path: "/gipfel",
    component: () => import("../views/Gipfel.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
