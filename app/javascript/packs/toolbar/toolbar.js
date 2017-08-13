import Vue from 'vue'
import Toolbar from './toolbar.vue.erb'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('toolbar'))
  const toolbar = new Vue(Toolbar).$mount('toolbar')

  console.log(toolbar)
})