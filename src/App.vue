<template>
  <div id="app">
    <!-- Header -->
    <header-component></header-component>
    <!--/ Header -->

    <!-- Content -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!--/ Content -->

  </div>
</template>

<script>
  import HeaderComponent from "./shared/components/header.vue";

  export default {
    name: 'app',
    components: {
      HeaderComponent,
    }
  }
</script>

<style lang="less">
  @import "./../node_modules/normalize.css/normalize.css";

  body {
    background-color: #eceff0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    display: block;
    overflow: hidden;
    width: 980px;
    margin: 0 auto;
  }
</style>
