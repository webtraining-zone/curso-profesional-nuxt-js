<template>
  <section class="container">
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

    <div class="row">
      <div class="col-12 col-sm-4 col-md-3" v-for="movie in movies">
        <div class="b-movie">
          <b-card :title="movie.Title"
                  :img-src="movie.Poster"
                  :img-alt="movie.Title"
                  img-top
                  tag="article"
                  class="mb-2">
            <p class="card-text">
              <strong>Year: </strong><span>{{ movie.Year }}</span>
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
    <!--<MoviesCatalog></MoviesCatalog>-->
  </section>
</template>

<script>
  import MoviesCatalog from './../components/movies/MoviesCatalog';

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
        const serviceURL = `http://www.omdbapi.com/?s=${this.movieName}&apikey=a7de0943`;
        this.$axios.$get(serviceURL).then(response => {
          this.movies = response.Search;
        });
      },
    },
    asyncData({params, app}) {
      const initialMovieName = 'Batman';
      const serviceURL = `http://www.omdbapi.com/?s=${initialMovieName}&apikey=a7de0943`;

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
