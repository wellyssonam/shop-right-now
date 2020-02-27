<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <b-container>
      <router-view />
    </b-container>
    <footer>{{ $t('app.name') }}</footer>
    <Alert
      :message="alert.message"
      :variantColor="alert.variantColor"
      :showAlert="true"
      :class="{ display: alert.showAlert }"
    />
    <div class="background-spinner" v-if="isPageLoading">
      <b-spinner variant="success" label="Text Centered"></b-spinner>
    </div>
  </div>
</template>

<script>
import NavBar from './components/template/NavBar'
import Alert from './components/template/Alert'

export default {
  components: { NavBar, Alert },
  computed: {
    alert() {
      return this.$store.state.alert
    },
    isPageLoading() {
      return this.$store.state.pageLoading
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .container {
    padding: 90px 20px 60px 20px;
  }
  .background-spinner {
    position: fixed;
    background: #000000e8;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1111;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .spinner-border {
      width: 100px;
      height: 100px;
    }
  }
}

footer {
  background: #343a40;
  border-top: 5px solid #69c05b;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.srn-alert {
  .alert {
    position: fixed;
    width: 100%;
    display: block;
    bottom: -30px;
    transition: 1s bottom ease;
  }
  &.display {
    .alert {
      bottom: 24px;
      animation: bounceInUp 1s ease;
    }
  }
}
</style>
