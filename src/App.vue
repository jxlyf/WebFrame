<template>
  <div id="app">
    <!--<router-link to="/test">test</router-link>-->
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
  @import 'styles/common.css';
#app {
  /*border: red 1px solid;*/
  height: 100%;
}
</style>
