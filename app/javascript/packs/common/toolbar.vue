<template>
  <md-layout md-column md-gutter>
  <div id="toolbar">
<!-- Toolbar -->
    <md-toolbar md-theme="default">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ logo }}</h2>
      <md-button id="login-button" @click="openSigninDialog()" v-if="!this.signedIn">Login</md-button>
      <span v-else>You logged in as {{ this.current_user.email }}</span>
      <md-button id="sign-out-button" @click="logout()" v-if="this.signedIn">Log Out</md-button>
      <md-button id="register-button" v-else @click="openRegisterDialog()">Register</md-button>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" md-theme="default">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">{{ logo }}</h3>
        </div>
      </md-toolbar>
      <md-toolbar>
      <md-list>
        <md-list-item href="/">Home</md-list-item>
        <md-menu>
          <md-list-item href="#" md-menu-trigger>Lektionen</md-list-item>
            <md-menu-content>
              <md-menu-item href="#">My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        </md-menu>
        <md-list-item>
          <md-divider></md-divider>
        </md-list-item>
      </md-list>
      </md-toolbar>
    </md-sidenav>

    <signin ref="signin"></signin>
    <register ref="register"></register>

  </div>
  </md-layout>
</template>

<script>

import { HTTP } from './http-common.js'
import Signin from './devise/signin.vue.erb'
import Register from './devise/register.vue.erb'
import { EventBus } from './../event-bus.js';

export default {
  props:[],
  data: function () {
    return {
      message: "Hello DeBug!!!",
      logo: "DeBug",
      current_user: null
    }
  },
  computed:{
    signedIn: function(){
      if(this.current_user !== null){
        return true
      }
      return false
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    openSigninDialog() {
      this.$refs.signin.openDialog();
    },
    openRegisterDialog() {
      this.$refs.register.openDialog();
    },
    logout(){
      HTTP.delete('/users/sign_out.json')
      .then(function(response) {
        EventBus.$emit('loggedOut', null);
      })
      .catch(function(response) {
        try{
          EventBus.$emit('noty-error', response.response.data.error);
        } catch (e){
          console.log(e)
        }
      })
    }
  },
  components: {
    Signin, Register
  }
}

</script>

<style scoped>
.md-toolbar {
  height: 100px;
}
p {
  font-size: 2em;
  text-align: center;
}

[v-cloak] {
  display: none;
}
</style>
