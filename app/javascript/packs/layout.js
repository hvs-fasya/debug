/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'

import Toolbar from './common/toolbar.vue'
import Flash from './common/flash.vue'
import MainContent from './main-content.vue'

import VueMaterial from 'vue-material'
import VueNoty from 'vuejs-noty'
import VueTouch from 'vue-touch'
import 'vue-material/dist/vue-material.css'
import 'vuejs-noty/dist/vuejs-noty.css'

import { EventBus } from './event-bus.js';
import Store from './store.vue'

Vue.use(VueMaterial)
Vue.use(VueNoty,{
  timeout: 3000,
  layout: 'centerRight'
})
Vue.use(VueTouch, {name: 'v-touch'})

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'pink',
  warn: 'red',
  background: 'white',
  textColor: 'black'
})

document.addEventListener('DOMContentLoaded', () => {
  //state store
  var store = new Vue(Store)
  //toolbar
  const toolbar = new Vue(Toolbar).$mount('#toolbar');
  var auth = JSON.parse(document.getElementById('auth').getAttribute('data'));
  if(auth.current_user !== null){
    store.current_user = auth.current_user
  }
  var pageProps = JSON.parse(document.getElementById('page-data').getAttribute('data')).data;
  console.log(pageProps);
  if(pageProps){
    var main_content = new Vue(MainContent).$mount('#page-content');
  }
  if(pageProps.app_type){
    main_content.app_type = pageProps.app_type
  }
  if(pageProps.page_data){
    main_content.page_data = pageProps.page_data
  }
  //flash messages
  const flashProps = JSON.parse(document.getElementById('flash').getAttribute('data'));
  const flash = new Vue(Flash, flashProps).$mount('#flash');
  if(flashProps.alert){
  	flash.$noty.error(flashProps.alert)
  }
  if(flashProps.notice){
  	flash.$noty.success(flashProps.notice)
  }
  //events
  EventBus.$on('noty-error', error => {
	 flash.$noty.error(error)
  });
  EventBus.$on('noty-success', success => {
	 flash.$noty.success(success)
  });
  EventBus.$on('user-changed', user => {
   toolbar.current_user = user;
  });
  EventBus.$on('loggedIn', user => {
    store.current_user = user;
    EventBus.$emit('noty-success', "You've successfuly logged In.");
  });
  EventBus.$on('loggedOut', user => {
    store.current_user = user;
    EventBus.$emit('noty-success', "You've successfuly logged Out.");
  });
})
