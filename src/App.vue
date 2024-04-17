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
  <div class="app">
    <AppHeader/>
    <AppMain/>
  </div>
</template>


<style lang="scss">
  @use './assets/style/general';
  
  .app{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>