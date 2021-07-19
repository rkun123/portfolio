<template>
  <div class="home">
    <div class="hello-container">
      <HelloWorld class="helloWorld" msg="Welcome to My Portfolio"/>
    </div>
    <news-list />
  </div>
</template>

<script>
// @ is an alias to /src
import anime from 'animejs/lib/anime.es'
import HelloWorld from '@/components/HelloWorld.vue'
import NewsList from '../components/News/NewsList.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NewsList
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
.hello-container {
  height: 100vh;
}
.helloWorld {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
