import axios from 'axios'
import { EventBus } from './../event-bus.js';

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     config.data.authenticity_token = document.getElementsByName('csrf-token')[0].getAttribute('content')
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content')
// axios.defaults.headers.common['Accept'] = 'application/json'
var token = document.getElementsByName('csrf-token')[0].getAttribute('content')


const HTTP = axios.create({
	// `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  // xsrfCookieName: 'XSRF-TOKEN', // default
  data: {
  	authenticity_token: token
  },
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  // xsrfHeaderName: 'X-XSRF-TOKEN'
  // transformRequest: [function (data, headers) {
  //   // Do whatever you want to transform the data
  //   console.log("Token: " + token)
  //   data.authenticity_token = token
  //   console.log(data)
  //   return data;
  // }]

})

function setNewToken(token) {
  HTTP.defaults.data.authenticity_token = token
}

HTTP.interceptors.response.use(function (response) {
    token = response.headers['x-csrf-token']
    setNewToken(token)
    // self.headers['X-CSRF-TOKEN'] = token
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export { HTTP }