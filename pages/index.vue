<template>
  <section class="container">
    <div class="col-12">
      <section class="b-section">
        <div class="b-section__image text-center mt-5">
          <img src="~/assets/img/index/cinema.png" alt="Let's find an amazing movie" class="col-12 col-sm-8 col-md-6">
        </div>

        <h1 class="b-section__title text-center mt-4">Movify!</h1>
        <h2 class="b-section__subtitle text-center mt-4">Movies for everyone for good</h2>
        <div class="text-center mt-3">
          <nuxt-link to="/search" class="btn btn-warning btn-lg">Search</nuxt-link>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
  };
</script>

<style>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
