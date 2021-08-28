import axios from 'axios';

const Network = {
  requesttimeout: 20000,

  get: (route, headers) => {
    const getPromise = new Promise((resolve, reject) => {
      Network.prepareConfig(route, null, 'get', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
    return getPromise;
  },

  post: (route, params, headers) => {
    const postPromise = new Promise((resolve, reject) => {
      Network.prepareConfig(route, params, 'post', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return postPromise;
  },

  prepareConfig: async (routeurl, params, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url: routeurl,
      data: params,
      headers: headers,
      timeout: Network.requesttimeout,
    };
    Network.call(config, callback);
  },

  call: (config, callback) => {
    axios(config)
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(error, null);
      });
  },
};
module.exports = Network;
