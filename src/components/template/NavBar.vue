<template>
  <div id="nav">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand>{{ $t('app.name') }}</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link
            type="button"
            to="/"
            right
            active-class="active"
            exact
            v-if="mmenuItems.showProducts"
          >
            <b-button variant="dark">
              {{ $t('app.navbar.products') }}
            </b-button>
          </router-link>
          <router-link
            to="/shopping-list"
            right
            active-class="active"
            class="menu-item-cart"
            v-if="mmenuItems.showCart"
          >
            <b-button variant="dark">
              {{ $t('app.navbar.cart') }}
              <b-badge variant="warning">{{ quantityProductsCart }}</b-badge>
            </b-button>
          </router-link>
          <b-button-group class="idiom">
            <b-dropdown right :text="$t('app.navbar.idioms')" variant="dark">
              <b-dropdown-item
                v-for="(idiom, index) in idioms"
                :key="index"
                @click="changeIdiom(idiom.alias)"
              >
                <img :src="idiom.img" alt="" width="29px" height="20px" />
                <span>{{ idiom.name }}</span>
              </b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    quantityProductsCart() {
      return this.$store.state.products.length
    },
    mmenuItems() {
      return this.$store.state.menu
    },
  },
  data: () => ({
    idioms: [],
  }),
  methods: {
    changeIdiom(idiom) {
      this.$i18n.locale = idiom
    },
  },
  mounted() {
    this.idioms = [
      {
        name: this.$t('app.navbar.portuguese'),
        img: require('@/assets/flag-brazil.png'),
        alias: 'pt',
      },
      {
        name: this.$t('app.navbar.english'),
        img: require('@/assets/flag-usa.png'),
        alias: 'en',
      },
    ]
  },
}
</script>

<style lang="scss">
#nav {
  .navbar {
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: #69c05b !important;
    padding: 10px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    .navbar-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .navbar-brand,
    .nav-link {
      border: 1px solid;
      border-radius: 0px 25px;
      padding: 5px 10px;
      background: #fff;
      color: #69c05b;
      font-weight: bold;
    }
    .menu-item-cart,
    .idiom {
      margin-left: 10px;
      position: relative;
      .dropdown-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        img {
          margin-right: 10px;
        }
      }
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
      top: -5px;
      right: -5px;
      position: absolute;
    }
  }
}

@media (max-width: 576px) {
  #nav {
    .navbar {
      .navbar-nav {
        margin-top: 10px;
      }
    }
  }
}
</style>
