<template>
  <section class="container mb-5">
    <notifications group="api" position="top center"/>
    <div class="row">
      <div class="col-12">
        <h1 class="b-title mt-4 mb-3 text-center">{{ title }}</h1>
      </div>

      <div class="col-12 col-sm-8 col-md-6 offset-md-3">
        <form @submit.prevent="createAccount" class="b-register-form mb-4">

          <div class="form-group">
            <label for="name">Name* :</label>
            <input id="name" name="name" class="form-control"
                   type="text" required v-model="user.name"/>
          </div>

          <div class="form-group">
            <label for="email">Email* :</label>
            <input id="email" name="email" class="form-control"
                   type="email" required v-model="user.email"/>
          </div>

          <div class="form-group">
            <label for="username">Username* :</label>
            <input id="username" name="username" class="form-control"
                   type="text" required v-model="user.username"/>
          </div>

          <div class="form-group">
            <label for="password">Password* :</label>
            <input id="password" name="password" class="form-control"
                   type="password" required v-model="user.password"/>
          </div>

          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  import {USERS_BASE_URL} from '../config/api';

  export default {
    data() {
      return {
        isFormValid: false,
        title: 'Register',
        user: {
          name: 'Esmeralda',
          username: 'esmeralda',
          email: 'esmeralda@webtraining.zone',
          password: 'esmeralda',
        },
      };
    },
    methods: {
      createAccount: function() {
        const serviceURL = `${USERS_BASE_URL}/users`;
        const data = this.user;
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        // 1. Make POST request to create an account
        this.$axios.$post(serviceURL, data, config).then(userData => {

          console.log(userData);

          // 2. Notify the user everything was ok!
          this.$notify({
            group: 'api',
            title: 'Success!',
            text: 'Account created.',
            duration: 5000,
            type: 'success',
          });

        }).catch(err => {
          console.log(err);

          this.$notify({
            group: 'api',
            title: 'Error',
            text: 'Unable to create an account, please try it again.',
            duration: 5000,
            type: 'error',

          });

        });

      },
    },
  };
</script>
<style scoped>
  .form-control {
    border-radius: 0;
    border: 2px solid #ffc107;
    min-height: 46px;
  }
</style>
