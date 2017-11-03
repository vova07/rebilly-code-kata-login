import Vue from "vue";
import {fetchCustomers} from "./api";

const state = {
  customers: [],
};

const actions = {
  FETCH_CUSTOMERS: ({commit}) => {
    return fetchCustomers()
      .then(customers => {
        commit('SET_CUSTOMERS', customers);
      });
  },
};

const mutations = {
  SET_CUSTOMERS: (state, customers) => {
    customers.forEach((customer, index) => {
      Vue.set(state.customers, index, customer);
    });
  },
};

const getters = {
  customers: state => state.customers,
};

const store = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default store;
