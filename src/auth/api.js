import {client} from "./../shared/client";

const API_LOG_IN_ENDPOINT = '/v2.1/signin';

function logIn(data) {
  return new Promise((resolve, reject) => {
    client
      .post(API_LOG_IN_ENDPOINT, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response.data));
  });
}

export {
  logIn,
}
