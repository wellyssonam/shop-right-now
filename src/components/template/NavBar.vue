<template>
  <div id="nav">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>{{ $t('app.name') }}</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <router-link
          type="button"
          to="/"
          right
          active-class="active"
          exact
          class="menu-item-product"
        >
          <b-button variant="dark">
            {{ $t('app.navbar.products') }}
          </b-button>
        </router-link>
        <router-link to="/shopping-list" right active-class="active">
          <b-button variant="dark">
            {{ $t('app.navbar.cart') }}
            <b-badge variant="warning">4</b-badge>
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
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    .navbar-brand,
    .nav-link {
      color: #fffafa;
      font-weight: bold;
    }
    .menu-item-product {
      margin-right: 10px;
    }
    .badge {
      padding: 5px 2px;
      width: auto;
      min-width: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      top: 5px;
      right: 13px;
      position: absolute;
    }
  }
}
</style>
