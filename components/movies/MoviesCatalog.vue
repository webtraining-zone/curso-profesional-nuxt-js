<template>
  <section>
    movies catalog #2
    {{ movies }}
  </section>
</template>
<script>

  export default {
    data() {
      return {
        movies: [],
      };
    },
    // asyncData({params, app}) {
    //
    //   const serviceURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a7de0943';
    //
    //   // The result from asyncData will be merged with data
    //   // https://axios.nuxtjs.org/usage
    //   return app.$axios.$get(serviceURL).then(response => {
    //     console.log('Async data');
    //     return {movies: response.data};
    //   }).catch((e) => {
    //     error({statusCode: 500, message: e});
    //   });
    //
    // },
  };
</script>
