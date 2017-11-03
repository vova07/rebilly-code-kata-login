import axios from "axios";
import store from "../shared/store";

export const client = axios.create({
  baseURL: 'https://api-sandbox.rebilly.com',
  transformRequest: (data, headers) => {
    if (store.getters['auth/isLogged']) {
      headers.common['Authorization'] = `Bearer ${store.getters['auth/token']}`;
    }

    return data;
  }
});
