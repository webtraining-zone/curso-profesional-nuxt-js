<template>
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
</template>
<script>
  export default {
    props: {movies: Array},
  };
</script>
