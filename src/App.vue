<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
  export default {
    components:{
      AppHeader,
      AppMain
    }
    
  }
</script>

<template>
  <div></div>
  <AppHeader/>
  <AppMain/>
</template>


<style lang="scss">
  @use './assets/style/general';
</style>