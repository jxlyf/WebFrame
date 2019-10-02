<template>
  <div id="app">
    <router-view ></router-view>
    <!-- 如果不同路由渲染同一组件，会导致数据不更新，这时候可以巧妙的加一个不同的Key -->
    <!-- <router-view :key="$route.fullpath"></router-view> -->
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
  @import 'resources/css/common.css';
#app {
  /*border: red 1px solid;*/
  height: 100%;
}
</style>
