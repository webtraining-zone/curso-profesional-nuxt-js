<template>
  <section class="container">
    <article v-if="movie" class="mt-3 mb-3">

      <div class="b-movie">
        <div class="row">
          <div class="col-12 col-sm-4 col-md-5 col-lg-3">
            <img :src="movie.Poster" alt="" class="img-fluid"/>
          </div>
          <div class="col-12 col-sm-8 col-md-7 col-lg-9">
            <h1>{{ movie.Title }}</h1>
            <div class="b-movie__plot">
              {{ movie.Plot }}
            </div>
            <div class="b-movie__extra-information">
              <div>
                <strong>Year: </strong><span>{{ movie.Year }}</span>
              </div>

              <div>
                <strong>Rated: </strong><span>{{ movie.Rated }}</span>
              </div>

              <div>
                <strong>Released: </strong><span>{{ movie.Released }}</span>
              </div>

              <div>
                <strong>Director: </strong><span>{{ movie.Director }}</span>
              </div>

              <div>
                <strong>Writer: </strong><span>{{ movie.Writer }}</span>
              </div>

              <div>
                <strong>Language: </strong><span>{{ movie.Language }}</span>
              </div>

              <div>
                <strong>Actors: </strong><span>{{ movie.Actors }}</span>
              </div>

              <div>
                <strong>Country: </strong><span>{{ movie.Country }}</span>
              </div>

              <div>
                <strong>Awards: </strong><span>{{ movie.Awards }}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </article>

    <div class="mt-3" v-else-if="!movie">
      <div class="alert alert-warning">
        Incorrect <strong>movie id</strong> was set.
      </div>
    </div>
  </section>

</template>
<script>
  export default {
    data() {
      return {
        movie: false,
      };
    },
    asyncData({app, params}) {

      // http://www.omdbapi.com/?i=tt0096895&apikey=a7de0943

      if (!!params.id) {

        const serviceURL = `http://www.omdbapi.com/?i=${params.id}&apikey=a7de0943`;

        return app.$axios.$get(serviceURL).then(response => {
          if (typeof response.Response !== 'undefined' && response.Response === 'False') {
            return {movie: false};
          }
          return {movie: response};
        }).catch(e => {
          error({statusCode: 404, message: e});
        });

      }
    },
  };
</script>
