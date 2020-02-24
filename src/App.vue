<template>
  <div id="app">
    <NavBar />
    <router-view />
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
}

#nav {
  padding-bottom: 20px;
}

footer {
  background: #69c05b;
  padding: 10px 0px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
