import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Reviews from "../views/Reviews.vue";
import Admin from "../views/Admin.vue";
import Lofi from "../views/Lofi.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/lofi",
    name: "Lofi",
    component: Lofi,
  },
  {
    path: "*",
    name: "404",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
