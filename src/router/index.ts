import { createRouter, createWebHashHistory } from "vue-router";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
      redirect: "/Login",
      children: [
        {
          path: "/Home",
          name: "Home",
          component: () => import("@/views/dataview/Home"),
        },
        {
          path: "/Login",
          name: "Login",
          component: () => import("@/views/dataview/Login"),
        },
        {
          path: "/VillageLevel",
          name: "VillageLevel",
          component: () => import("@/views/dataview/VillageLevel"),
        },
        {
          path: "/OperationalRegulation",
          name: "OperationalRegulation",
          component: () => import("@/views/dataview/OperationalRegulation"),
        },
        {
          path: "/AchievementAggregation",
          name: "AchievementAggregation",
          component: () => import("@/views/dataview/AchievementAggregation"),
        },
        {
          path: "/ArtificialIntelligence",
          name: "ArtificialIntelligence",
          component: () => import("@/views/dataview/ArtificialIntelligence"),
        },
        {
          path: "/BusinessIntegration",
          name: "BusinessIntegration",
          component: () => import("@/views/dataview/BusinessIntegration"),
        },
      ],
    },
  ],
});

export default router;
