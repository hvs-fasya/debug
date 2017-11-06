<template>
<div v-on:click="translateWord">	
<md-layout md-align="center">
	<md-layout md-flex-xsmall="90" md-flex-small="85" md-flex-medium="60" md-flex-large="40">
    <md-whiteframe md-elevation="7">
    <md-ink-ripple />
      <v-touch v-on:swiperight="nextWord" class="h100">
      <v-touch v-on:swipeleft="previousWord" class="h100">
		<md-layout class="h100" md-vertical-align="center">
			<span v-on:click.stop="previousWord" class="icon-span-left"><md-icon class="md-accent">arrow_back</md-icon></span>
			<span class="span-center">{{germanContent}} <span v-if="translationVisible">- {{translation}}</span></span>
			<span v-on:click.stop="nextWord" class="icon-span-right"><md-icon class="md-accent">arrow_forward</md-icon></span>
		</md-layout>
	  </v-touch>
	  </v-touch>
    </md-whiteframe>
    </md-layout>
</md-layout>
</div>
</template>

<script>
export default {
  props: ['pageData'],
  data: function () {
    return {
    	currentIndex: 0,
    	currentLang: 'german',
    	translationVisible: false
    }
  },
  computed: {
    germanContent: function(){
        return this.pageData[this.currentIndex].text
    },
    translation: function(){
    	return this.pageData[this.currentIndex].translation
    }
  },
  methods: {
  	translateWord() {
  		this.translationVisible = !this.translationVisible
    },
    nextWord() {
    	if(this.currentIndex < this.pageData.length-1){
    		this.currentIndex++
    	} else {
    		this.currentIndex = 0
    	}
    	this.translationVisible = false
    },
    previousWord() {
    	if(this.currentIndex > 0){
    		this.currentIndex--
    	} else {
    		this.currentIndex = this.pageData.length-1
    	}
    	this.translationVisible = false
    }
  }
}
</script>

<style scoped>
.md-whiteframe{
	margin-top: 100px;
	width: 100%;
	padding: 20px;
	font-weight: bold;
	font-size: 28px;
	height: 180px;
}
.h100 {
	height: 100%;
}
.span-center {
	text-align: center;
	width:70%;
}
.icon-span-right {
	width:15%;
	text-align: right;
}
.icon-span-left {
	width:15%;
	text-align: left;
}
</style>
