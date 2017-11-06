<template>
  <div id='page-content'>
    <component v-bind:is="currentView" v-bind="{'pageData': pageData }">
      <!-- component changes when vm.currentView changes! -->
    </component>
    <p>"Current view: {{currentView}}"</p>
  </div>
</template>

<script>

export default {
  props: ['app_type', 'page_data'],
  computed: {
    currentView: function(){
      if(this.app_type !== null){
        return this.app_type
      }
      return  null
    },
    pageData: function(){
      if(this.page_data !== null){
        return this.page_data
      }
    }
  },
  data: function () {
    return {}
  },
  methods: {

  },
  components: {
    'german_words': () => import('./german_words/words')
    }
}
</script>

<style scoped>

</style>
