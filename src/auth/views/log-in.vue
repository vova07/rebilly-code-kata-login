<template>

  <div class="content">
    <form action="#" v-on:submit.prevent="onSubmit">
      <h1>Log In</h1>

      <div v-bind:class="hasErrors ? 'has-error' : ''">
        <label for="email">Email Address</label>
        <input type="text" id="email" placeholder="name@company.com" v-model="email">
      </div>

      <div v-bind:class="hasErrors ? 'has-error' : ''">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Your password" v-model="password">
      </div>

      <input type="submit" v-bind:value="loading ? 'Sending...' : 'Login'" v-bind:disabled="loading">

    </form>

    <ul class="errors" v-if="hasErrors">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    name: 'log-in-view',
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      email: {
        get () {
          return this.$store.getters['auth/email'];
        },
        set (value) {
          this.$store.dispatch('auth/UPDATE_EMAIL', value);
        }
      },
      password: {
        get () {
          return this.$store.getters['auth/password'];
        },
        set (value) {
          this.$store.dispatch('auth/UPDATE_PASSWORD', value);
        }
      },
      errors() {
        return this.$store.getters['auth/errors'];
      },
      hasErrors() {
        return this.$store.getters['auth/hasErrors'];
      },
    },
    methods: {
      onSubmit() {
        this.loading = true;

        this.$store.dispatch('auth/LOG_IN').then(() => {
          this.loading = true;
          this.$router.push({name: 'dashboard'});
        }).catch(() => {
          this.loading = false;
        });
      }
    },
  }
</script>

<style lang="less" scoped>
  form {
    background-color: #ffffff;
    display: block;
    width: 450px;
    overflow: hidden;
    margin: 3em auto 0;
    padding: 1.3em;

    h1 {
      color: #0033a0;
      font-size: 100%;
      margin: 0 0 2em;
      padding: 0;
    }

    div {
      margin-bottom: 1.2em;
    }

    label, input {
      display: block;
      clear: both;
    }

    label {
      font-size: 85%;
      margin-bottom: 0.3em;
    }

    input {
      border: 1px solid #0033a0;
      width: 96%;
      height: 35px;
      padding: 0 2%;
      border-radius: 2px;
      font-size: 90%;
      outline: none;

      &[type=submit] {
        background-color: #0033a0;
        width: 100%;
        color: #ffffff;
        font-size: 115%;
        height: 40px;
        cursor: pointer;

        &:disabled {
          opacity: 0.7;
        }
      }
    }

    .has-error {
      input {
        border-color: #9f3a38;
      }
    }
  }

  .errors {
    border: 1px solid #9f3a38;
    border-radius: 2px;
    display: block;
    clear: both;
    width: 450px;
    margin: 2em auto 0;
    list-style: none;
    color: #9f3a38;
    background-color: #fff6f6;
    line-height: 150%;
    padding: 1em 1.3em;
  }
</style>
