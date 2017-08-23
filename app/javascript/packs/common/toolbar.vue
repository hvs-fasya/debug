<template>
  <div id="toolbar">
    <md-toolbar md-theme="default">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ logo }}</h2>
      <md-button>Login</md-button>
      <md-button>Register</md-button>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" md-theme="default">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">{{ logo }}</h3>
        </div>
      </md-toolbar>
      <md-toolbar>
      <md-list>
        <md-list-item href="#">Home</md-list-item>
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
        <md-list-item href="#">Login</md-list-item>
        <md-list-item href="#">Register</md-list-item>
      </md-list>
      </md-toolbar>
    </md-sidenav>

  </div>
</template>

<script>
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
    }
    }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
