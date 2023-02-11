import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contract",
      name: "contract",
      component: () => import("../views/ContractView.vue"),
    },
    {
      path: "/sendeth",
      name: "sendeth",
      component: () => import("../views/SendEther.vue"),
    },
  ],
});

export default router;
