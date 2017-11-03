import store from "../shared/store";
import LogInView from "./views/log-in.vue";

export default [
  {
    path: '/log-in',
    component: LogInView,
    name: 'auth.log.in',
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isLogged']) {
        // Redirect to home page if use is already authenticated.
        next({name: 'dashboard'});
      } else {
        next();
      }
    },
  },
];
