<template>

  <div class="content">
    <div class="box" v-if="isLogged">
      <p v-if="loading">Loading...</p>
      <ul v-if="customers">
        <li v-for="customer in customers">
          {{ customer.id }}
        </li>
      </ul>
      <p v-else>Your customer list is empty!</p>
    </div>
    <div class="box" v-else>
      <h1>Welcome to Rebilly Code Kata "Login" application!</h1>
    </div>
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    name: 'dashboard-view',
    data() {
      return {
        loading: false,
      };
    },
    created() {
      this.fetchCustomers();
    },
    computed: {
      isLogged() {
        return this.$store.getters['auth/isLogged'];
      },
      customers() {
        return this.$store.getters['dashboard/customers'];
      },
    },
    methods: {
      fetchCustomers() {
        this.loading = true;

        this.$store.dispatch('dashboard/FETCH_CUSTOMERS').then(() => {
          this.loading = false;
        });
      }
    },
  }
</script>

<style lang="less" scoped>
  .box {
    background-color: #ffffff;
    padding: 1em;
    text-align: center;
  }

  h1 {
    color: #0033a0;
    font-size: 200%;
  }

  ul {
    display: block;
    clear: both;
    text-align: left;

    li {
      list-style: square;
      line-height: 150%;
      margin-bottom: 0.5em;
    }
  }
</style>
