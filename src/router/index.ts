import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Vuex from "@/views/vuex.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/vuex",
    name: "vuex",
    component: Vuex,
  },
  {
    path: "/axios",
    name: "axios",
    component: () => import("@/views/axios.vue"), // lazy-load
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
