<template>

  <header>
    <div class="content">
      <router-link v-bind:to="{name: 'dashboard'}">
        <img src="https://app.rebilly.com/static/42dd43eb26d9459a28a6dc092704b5ef.svg" width="100"/>
      </router-link>
      <ul>
        <li v-if="isLogged">
          <a href="#" v-on:click.prevent="logOut">Log Out</a>
        </li>
        <li v-else>
          <router-link v-bind:to="{name: 'auth.log.in'}" exact>Log In</router-link>
        </li>
      </ul>
    </div>
  </header>

</template>

<script>
  export default {
    name: 'header-component',
    computed: {
      isLogged() {
        return this.$store.getters['auth/isLogged'];
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/LOG_OUT').then(() => {
          this.$router.push({name: 'dashboard'});
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  header {
    display: block;
    clear: both;
    overflow: hidden;
    background-color: #0033a0;
    width: 100%;
    padding: 1em 0;
    margin-bottom: 2em;

    ul {
      padding: 0;
      margin: 0;
      float: right;
      display: block;
      list-style: none;
      overflow: hidden;
      width: 50%;
    }

    li {
      a {
        float: right;
        color: #ffffff;
        text-decoration: none;
        padding: 0.5em 1em;

        &:hover {
          background-color: #ffffff;
          color: #000000;
        }
      }
    }
  }
</style>
