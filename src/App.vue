<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import {store} from './store.js';
  import axios from 'axios';
  export default {
    components:{
      AppHeader,
      AppMain
    }
    
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>


<style lang="scss">
  @use './assets/style/general';
</style>