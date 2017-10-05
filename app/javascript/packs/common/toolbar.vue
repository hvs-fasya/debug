<template>
  <div id="toolbar">
<!-- Toolbar -->
    <md-toolbar md-theme="default" class="md-large">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <md-layout md-hide-xsmall style="flex: 1">
          <h2 class="md-title" >{{ logo }}</h2>
      </md-layout>
      <md-layout md-align="end">
          <md-button id="login-button" @click="openSigninDialog()" v-if="!this.signedIn">Login</md-button>
          <md-button id="sign-out-button" @click="logout()" v-if="this.signedIn">Log Out</md-button>
          <md-button id="register-button" v-else @click="openRegisterDialog()">Register</md-button>
      </md-layout>
    </md-toolbar>
    <md-layout md-align="end" v-if="this.signedIn">
      <span id="email-container">You logged in as {{ this.current_user.email }}</span>
    </md-layout>

    <md-sidenav md-swipeable class="md-left" ref="leftSidenav" md-theme="default">
      <md-toolbar class="md-large">
          <h3 class="md-title"><md-icon class="md-accent md-size-2x">bug_report</md-icon><span>{{ logo }}</span></h3>
      </md-toolbar>
      <br>
      <md-toolbar>
      <md-list>
        <md-list-item href="/" class="md-inset"><span class="inset2">Home</span></md-list-item>
        <md-list-item href="/"><md-icon class="md-accent md-size-2x">swap_horiz</md-icon><span>Wörterbuch</span></md-list-item>
        <md-menu>
          <md-list-item href="#" md-menu-trigger><md-icon class="md-accent md-size-2x">book</md-icon><span>Lektionen</span></md-list-item>
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

#email-container {
  margin:20px;
}
.inset2 {
  margin-left: 28px;
}
p {
  font-size: 2em;
  text-align: center;
}

[v-cloak] {
  display: none;
}
</style>
