import Vue from "vue";
import VueRouter from "vue-router";
import TheLinearStructureProgram from "../views/TheLinearStructureProgram.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheLinearStructureProgram",
    component: TheLinearStructureProgram
  },
  {
    path: "/control-operator-loop",
    name: "ControlOperatorLoop",
    component: function() {
      return import("../views/TheControlOperatorLoop.vue");
    }
  },
  {
    path: "/arrays",
    name: "TheArrays",
    component: function() {
      return import("../views/TheArrays.vue");
    }
  },
  {
    path: "/functions",
    name: "TheFunctions",
    component: function() {
      return import("../views/TheFunctions.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
