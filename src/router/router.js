import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";
import Images from "../views/Images.vue";

Vue.use(VueRouter);

const routes = [
  {
    default: true,
    path: "/",
    name: "home",
    exact: true,
    component: Home
  },
  {
    path: "/service",
    name: "service",
    component: Service
  },
  {
    path: "/images",
    name: "images",
    component: Images
  },
  {
    path: "/about",
    name: "about",
    component: About
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active'
});

export default router;
