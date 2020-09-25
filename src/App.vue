<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'
import Navigation from './components/Navigation'
export default {
  components: {
    Footer,
    Navigation,
  }
}
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
