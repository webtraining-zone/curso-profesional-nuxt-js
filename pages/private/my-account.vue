<template>
  <section class="container mb-5">
    <h1 class="b-title mt-4 mb-3">{{ title }}</h1>
    <div class="alert alert-warning">
      Display any protected information here ;)
    </div>
  </section>
</template>

<script>
  export default {
    middleware: 'auth',
    data() {
      return {
        title: 'My account',
      };
    },
  };
</script>
