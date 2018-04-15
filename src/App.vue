<template>
  <div id="app">
    <router-view></router-view>
    <ToolBar></ToolBar>
  </div>
</template>

<script>
import ToolBar from '@/components/commons/ToolBar'
export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
@import 'reset-css/reset.css';
#app {
    position: absolute;
    top:0;
    bottom:64px;
    right:0;
    left:0;
    display:flex;
    flex-direction: column;
    overflow: scroll;
}
</style>
