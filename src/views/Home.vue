<template>
  <div class="home">
    <HelloWorld class="helloWorld" msg="Welcome to My Portfolio"/>
  </div>
</template>

<script>
// @ is an alias to /src
import anime from 'animejs/lib/anime.es'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted: () => {
    anime({
      targets: '#vueLogo',
      rotateY: 720,
      duration: 3000,
      easing: 'easeInOutExpo',
    })
  }
}
</script>
<style scoped>
.home {
  height: 100%;
}
.helloWorld {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
