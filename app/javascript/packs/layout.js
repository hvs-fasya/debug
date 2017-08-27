/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'

import Toolbar from './common/toolbar.vue'
import Flash from './common/flash.vue'
// import Signin from './common/signin.vue'

import VueMaterial from 'vue-material'
import VueNoty from 'vuejs-noty'
import 'vue-material/dist/vue-material.css'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.use(VueMaterial)
Vue.use(VueNoty,{
  timeout: 4000,
  layout: 'centerRight'
})

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'red',
  warn: 'red',
  background: 'white',
  textColor: 'black'
})

document.addEventListener('DOMContentLoaded', () => {

  // document.body.appendChild(document.createElement('toolbar'));
  const toolbar = new Vue(Toolbar).$mount('#toolbar');
  //flash messages
  const props = JSON.parse(document.getElementById('flash').getAttribute('data'));
  const flash = new Vue(Flash, props).$mount('#flash')
  if(props.alert){
  	flash.$noty.error(props.alert)
  }
  if(props.notice){
  	flash.$noty.success(props.notice)
  }
  //signin dialog
  // document.body.appendChild(document.createElement('signin'));
  // const signin = new Vue(Signin).$mount('signin')
})
