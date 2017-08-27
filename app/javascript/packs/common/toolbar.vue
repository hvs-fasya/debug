<template>
  <div id="toolbar">
<!-- Toolbar -->
    <md-toolbar md-theme="default">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ logo }}</h2>
      <md-button id="login-button" @click="openSigninDialog('login-form')">Login</md-button>
      <md-button id="register-button">Register</md-button>
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
        <md-list-item href="/users/sign_in">Login</md-list-item>
        <md-list-item href="/users/sign_up">Register</md-list-item>
      </md-list>
      </md-toolbar>
    </md-sidenav>


  </div>
</template>

<script>

import Signin from './signin.vue'

export default {
  data: function () {
    return {
      message: "Hello DeBug!!!",
      logo: "DeBug"
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    openSigninDialog(ref) {
      Signin.$refs[ref].open();
    },
  },
  components: {
    Signin
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
