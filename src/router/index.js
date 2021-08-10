import { createRouter, createWebHistory } from "vue-router";
import PatientList from "../views/PatientList.vue";

const routes = [
  {
    path: "/",
    name: "PatientList",
    component: PatientList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
