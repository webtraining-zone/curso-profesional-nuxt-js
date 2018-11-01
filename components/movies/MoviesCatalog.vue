<template>
  <div class="row">
    <div class="col-12 col-sm-4 col-md-3" v-for="movie in movies">
      <div class="b-movie">
        <!--<b-card :title="movie.Title"-->
        <!--:img-src="movie.Poster"-->
        <!--:img-alt="movie.Title"-->
        <!--img-top-->
        <!--tag="article"-->
        <!--class="mb-2"-->
        <!--bg-variant="dark"-->
        <!--text-variant="white"-->
        <!--:header="movie.Year">-->
        <!--<p class="card-text">-->
        <!--&lt;!&ndash;<strong>Year: </strong><span>{{ movie.Year }}</span>&ndash;&gt;-->
        <!--</p>-->
        <!---->
        <!--<button @click="openMovieDetails(movie)" class="btn btn-warning">Read more</button>-->
        <!--</b-card>-->

        <div class="card text-white bg-dark mb-4">
          <a href="#" @click.prevent="openMovieDetails(movie)">
            <img class="card-img-top" :src="movie.Poster" :alt="movie.Title"/>
          </a>
          <div class="card-header">
            {{ movie.Year }}
          </div>
          <div class="card-body">
            <a href="#" @click.prevent="openMovieDetails(movie)" class="text-white">
              <h5 class="card-title">{{ movie.Title }}</h5>
            </a>
            <!--<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
            <button @click="openMovieDetails(movie)" class="btn btn-warning">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {movies: Array},
    methods: {
      openMovieDetails(movie) {

        this.$router.push({
          name: 'movies-id',
          params: {id: movie.imdbID},
        });

      },
    },
  };
</script>
<style scoped>
  .b-movie {
    box-shadow: 4px 6px 24px rgba(30, 31, 39, .3);
    border-radius: 0.25rem;
  }
</style>
