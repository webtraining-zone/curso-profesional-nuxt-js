<template>
  <section class="container">
    <h1 class="mt-4 mb-3">{{ title }}</h1>
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
        movies: [],
        title: 'Search',
      };
    },
    asyncData({params, app}) {

      const serviceURL = 'http://www.omdbapi.com/?s=Batman&apikey=a7de0943';

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
