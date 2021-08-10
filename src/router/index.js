import { createRouter, createWebHistory } from "vue-router";
import PatientList from "../views/PatientList.vue";
import AvailableVaccine from "@/views/AvailableVaccine.vue";

const routes = [
  {
    path: "/",
    name: "PatientList",
    component: PatientList,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      limit: parseInt(route.query.limit) || 9,
    }),
  },
  {
    path: "/availableVaccine",
    name: "AvailableVaccine",
    component: AvailableVaccine,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
