<template>
  <div class="about">
    <Card title="大学">
      <p>九州工業大学情報工学部3年</p>
    </Card>
    <Card title="主に触ったことのある技術">
      <p>Python / Javascript / Golang / RoR / Unity / Android</p>
    </Card>
    <Card title="所属">
      <p>九工大サークル<a href='https://compositecomputer.club'>C3</a>所属</p>
    </Card>
  </div>
</template>
<script>
import anime from 'animejs/lib/anime.es'
import Card from '@/components/About/Card.vue'
export default {
  components: {
    Card,
  },
  data: () => ({
    slides: [],
    nowSlideIndex: 0,
    lastScrollTop: 0,
  }),
  methods: {
    scrollListener(e) {
      // Scroll down
      if(e.deltaY > 0 && this.nowSlideIndex < this.slides.length - 1) {
        this.nowSlideIndex++
      }
      // Scroll up
      if(e.deltaY < 0 && this.nowSlideIndex > 0) {
        this.nowSlideIndex--
      }
      anime({
        targets: 'html, body',
        scrollTop: this.slides[this.nowSlideIndex].top,
        duration: 600,
        easing: 'easeOutCubic'
      })
    },
    scroll() {

    },
    getSlides() {
      console.log(document.querySelectorAll('.slide'))
      const self = this
      document.querySelectorAll('.slide').forEach(n => {
        self.slides.push({
          top: n.offsetTop,
          node: n
        })
      })
    }
  },
  mounted() {
    this.getSlides()
    // Scroll event listener
    window.addEventListener('wheel', this.scrollListener)
  },
}
</script>
<style scoped>
.about {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
