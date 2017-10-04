import axios from 'axios'
import { EventBus } from './../event-bus.js';

var token = document.getElementsByName('csrf-token')[0].getAttribute('content')


const HTTP = axios.create({
  data: {
  	authenticity_token: token
  }
})

function setNewToken(token) {
  HTTP.defaults.data.authenticity_token = token
}

HTTP.interceptors.response.use(function (response) {
    token = response.headers['x-csrf-token']
    setNewToken(token)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export { HTTP }