<template>
  <div id="toolbar">
    <md-toolbar md-theme="default">
      <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Vue Material</h2>
      <md-button class="md-icon-button">
      <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!!!"
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
