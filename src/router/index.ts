import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/edit/index.vue"),
    },
    {
      path: "/preview",
      name: "preview",
      component: () => import("../views/preview/index.vue"),
    },
    {
      path: "/edit-load",
      name: "edit-load",
      component: () => import("../views/edit-load/index.vue"),
    },
    {
      path: "/custom-toolbar",
      name: "custom-toolbar",
      component: () => import("../views/custom-toolbar/index.vue"),
    },
    {
      path: "/append-toolbar",
      name: "append-toolbar",
      component: () => import("../views/append-toolbar/index.vue"),
    },
    {
      path: "/preview-load",
      name: "preview-load",
      component: () => import("../views/preview-load/index.vue"),
    },
    {
      path: "/set-node-attr",
      name: "set-node-attr",
      component: () => import("../views/set-node-attr/index.vue"),
    },
    {
      path: "/device-bind",
      name: "device-bind",
      component: () => import("../views/device-bind/index.vue"),
    },
    {
      path: "/device-bind-custom",
      name: "device-bind-custom",
      component: () => import("../views/device-bind-custom/index.vue"),
    },
    {
      path: "/custom-event",
      name: "custom-event",
      component: () => import("../views/custom-event/index.vue"),
    },
    {
      name: "edit-v2",
      path: "/edit-v2",
      component: () => import("../views/edit-v2/index.vue"),
    },
    {
      name: "preview-v2",
      path: "/preview-v2",
      component: () => import("../views/preview-v2/index.vue"),
    },
    {
      name: "frame-animation",
      path: "/frame-animation",
      component: () => import("../views/frame-animation/index.vue"),
    },
  ],
});

export default router;
