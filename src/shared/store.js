import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "../auth/store";
import DashboardModule from "../dashboard/store";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth: AuthModule,
    dashboard: DashboardModule,
  }
});
