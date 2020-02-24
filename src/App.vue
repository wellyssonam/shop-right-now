<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <b-container>
      <router-view />
    </b-container>
    <footer>{{ $t('app.name') }}</footer>
  </div>
</template>

<script>
import NavBar from './components/template/NavBar'

export default {
  components: { NavBar },
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
    padding: 20px 20px 60px 20px;
  }
}

footer {
      background: #69c05b;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
