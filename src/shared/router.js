import Vue from "vue";
import Router from "vue-router";
import AuthModule from "../auth/router";
import DashboardModule from "../dashboard/router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...AuthModule,
    ...DashboardModule
  ]
});
