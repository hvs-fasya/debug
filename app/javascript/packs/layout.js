/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import Toolbar from './common/toolbar.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'red',
  warn: 'red',
  background: 'white',
  textColor: 'black'
})

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('toolbar'))
  const toolbar = new Vue(Toolbar).$mount('toolbar')
})
