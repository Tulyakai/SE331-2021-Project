import { createRouter, createWebHistory } from "vue-router";
import PatientList from "../views/PatientList.vue";
import AvailableVaccine from "@/views/AvailableVaccine.vue";

const routes = [
  {
    path: "/",
    name: "PatientList",
    component: PatientList,
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
});

export default router;
