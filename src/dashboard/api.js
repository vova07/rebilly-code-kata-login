import {client} from "./../shared/client";

const API_CUSTOMERS_ENDPOINT = '/v2.1/customers?limit=10&offset=0&sort=-createdTime';

function fetchCustomers() {
  return new Promise((resolve, reject) => {
    client
      .get(API_CUSTOMERS_ENDPOINT)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response.data));
  });
}

export {
  fetchCustomers,
}
