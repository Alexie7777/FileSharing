import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "HomeView", component: () => import("@/views/Home.vue") },
  {
    path: "/upload",
    name: "UploadView",
    component: () => import("@/views/Upload.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
