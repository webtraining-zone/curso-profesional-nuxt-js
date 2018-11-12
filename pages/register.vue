<template>
  <section class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h1 class="b-title mt-4 mb-3 text-center">{{ title }}</h1>
      </div>

      <div class="col-12 col-sm-8 col-md-6 offset-md-3">
        <form @submit.prevent="createAccount" class="b-countries-finder__form mb-4">

          <div class="form-group">
            <label for="name">Name* :</label>
            <input id="name" name="name" class="form-control"
                   type="text" required v-model="user.name"/>
          </div>

          <div class="form-group">
            <label for="username">Email* :</label>
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

          <!--<div class="form-group">-->
          <!--<label for="movieName"><strong>Movie name</strong></label>-->
          <!--<input type="text" class="form-control" id="movieName"-->
          <!--placeholder="Type a movie name like 'batman'" v-model="movieName"-->
          <!--required>-->
          <!--</div>-->
          <button type="submit" class="btn btn-warning"
                  :disabled="isFormValid">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  import {API_BASE_URL, API_KEY} from './../config/api';
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

        this.$axios.$post(serviceURL, data, config).then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err);
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
