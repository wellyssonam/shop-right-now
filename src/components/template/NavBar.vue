<template>
  <div id="nav">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>{{ $t('app.name') }}</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <router-link type="button" to="/" right active-class="active" exact>
          <b-button variant="outline-dark">
            {{ $t('app.navbar.products') }}
          </b-button>
        </router-link>
        <router-link to="/shopping-list" right active-class="active">
          <b-button variant="outline-dark">
            {{ $t('app.navbar.cart') }}
          </b-button>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss">
#nav {
  .navbar {
    background-color: #69c05b !important;
    .navbar-brand,
    .nav-link {
      color: #fffafa;
      font-weight: bold;
    }
  }
}
</style>
