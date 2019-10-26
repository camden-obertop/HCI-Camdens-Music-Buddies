import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
