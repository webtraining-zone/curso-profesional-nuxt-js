<template>
  <section class="container mb-5">
    <h1 class="b-title mt-4 mb-3">{{ title }}</h1>
    <form @submit.prevent="getMovies" class="b-countries-finder__form mb-4">
      <div class="form-group">
        <label for="movieName"><strong>Movie name</strong></label>
        <input type="text" class="form-control" id="movieName"
               placeholder="Type a movie name like 'batman'" v-model="movieName"
               required>
      </div>
      <button type="submit" class="btn btn-primary"
              :disabled="movieName.length < 2">
        Search
      </button>
    </form>

    <MoviesCatalog :movies="movies"></MoviesCatalog>
  </section>
</template>

<script>
  import MoviesCatalog from './../components/movies/MoviesCatalog';
  import {API_BASE_URL, API_KEY} from '../config/api';

  export default {
    components: {MoviesCatalog},
    data() {
      return {
        movieName: 'Batman',
        movies: [],
        title: 'Let\'s find an amazing movie',
      };
    },
    methods: {
      getMovies: function() {
        const serviceURL = `${API_BASE_URL}/?s=${this.movieName}&apikey=${API_KEY}`;
        this.$axios.$get(serviceURL).then(response => {
          this.movies = response.Search;
        });
      },
    },
    asyncData({params, app}) {
      const initialMovieName = 'Batman';
      // const serviceURL = `http://www.omdbapi.com/?s=${initialMovieName}&apikey=a7de0943`;
      const serviceURL = `${API_BASE_URL}/?s=${initialMovieName}&apikey=${API_KEY}`;

      // The result from asyncData will be merged with data
      // https://axios.nuxtjs.org/usage
      return app.$axios.$get(serviceURL).then(response => {
        // This console.log will appear server side
        // console.log('Async data', response);
        return {
          // The response comes in this format: { "Search": [] }
          movies: response.Search,
        };
      }).catch((e) => {
        error({statusCode: 500, message: e});
      });

    },
  };
</script>
