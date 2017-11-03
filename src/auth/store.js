import {logIn} from "./api";

const JWT_TOKEN_KEY = 'rebilly-code-kata-token';
const EXPIRE_INTERVAL = 48;

const state = {
  email: '',
  password: '',
  errors: [],
  token: localStorage.getItem(JWT_TOKEN_KEY),
  isLogged: !!localStorage.getItem(JWT_TOKEN_KEY),
};

const actions = {
  UPDATE_EMAIL: ({commit}, value) => {
    commit('UPDATE_EMAIL', value);
  },
  UPDATE_PASSWORD: ({commit}, value) => {
    commit('UPDATE_PASSWORD', value);
  },
  LOG_IN: ({commit, state}, data) => {
    let expiredTime = new Date();
    expiredTime.setHours(expiredTime.getHours() + EXPIRE_INTERVAL);

    return logIn({
      email: state.email,
      password: state.password,
      expiredTime: expiredTime.toISOString().slice(0, 19).replace('T', ' '),
    })
      .then(response => {
        commit('CLEAR_ERRORS');
        commit('CLEAR_ATTRIBUTES');
        commit('SET_TOKEN', response.token);

        return Promise.resolve(response);
      })
      .catch(response => {
        commit('CLEAR_ERRORS');
        commit('FAIL', response.error);

        return Promise.reject(response);
      });
  },
  LOG_OUT: ({commit}) => {
    commit('CLEAR_TOKEN');
  },
};

const mutations = {
  UPDATE_EMAIL: (state, value) => {
    state.email = value;
  },
  UPDATE_PASSWORD: (state, value) => {
    state.password = value;
  },
  SET_TOKEN: (state, token) => {
    localStorage.setItem(JWT_TOKEN_KEY, token);

    state.token = token;
    state.isLogged = true;
  },
  CLEAR_TOKEN: (state) => {
    localStorage.removeItem(JWT_TOKEN_KEY);

    state.token = null;
    state.isLogged = false;
  },
  FAIL: (state, message) => {
    state.errors.push(message);
  },
  CLEAR_ATTRIBUTES: state => {
    state.email = '';
    state.password = '';
  },
  CLEAR_ERRORS: state => {
    state.errors.splice(0, state.errors.length);
  },
};

const getters = {
  email: state => state.email,
  password: state => state.password,
  errors: state => state.errors,
  hasErrors: state => state.errors.length > 0,
  isLogged: state => state.isLogged,
  token: state => state.token,
};

const store = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default store;
