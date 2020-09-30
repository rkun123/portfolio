<template>
  <div id="app">
    <NavigationButton :visible="!isNavOpen" @open="navOpen" />
    <Navigation :visible="isNavOpen" @close="navClose" />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import NavigationButton from './components/NavigationButton'
export default {
  data: () => ({
    isNavOpen: false,
  }),
  components: {
    Footer,
    Navigation,
    NavigationButton,
  },
  methods: {
    navOpen() {
      this.isNavOpen = true
    },
    navClose() {
      this.isNavOpen = false
    }
  }
}
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
