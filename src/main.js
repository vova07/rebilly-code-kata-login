import Vue from "vue";
import App from "./App.vue";
import store from "./shared/store";
import router from "./shared/router";
import {sync} from "vuex-router-sync";

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
