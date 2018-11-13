<template>
  <header>

    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
          <i class="fas fa-film"></i>
          <nuxt-link to="/" class="nav-link-brand"><span>Movify</span></nuxt-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <nuxt-link to="/search" class="nav-link">Search</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
            </li>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

  </header>
</template>
<script>
  export default {
    data() {
      return {
        name: 'Movify',
      };
    },
  };
</script>
<style scoped>
  .nav-link-brand {
    color: white;
    font-weight: bold;
  }

  .navbar-dark .navbar-nav .nav-link.nuxt-link-active {
    /*font-weight: bold;*/
    color: white;
    border-bottom: 2px solid white;
  }
</style>
