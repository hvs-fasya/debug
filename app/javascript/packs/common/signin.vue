<template>

  <md-dialog md-open-from="#login-button" md-close-to="#login-button" ref="login-form">
    <md-dialog-title>Create new note</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Note</label>
          <md-textarea></md-textarea>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('login-form')">Cancel</md-button>
      <md-button class="md-primary" @click="loginSend()">Log In</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    loginSend() {
      console.log('LogIn sent');
      closeDialog('login-form');
    }
    }
}
</script>

<style scoped>

</style>