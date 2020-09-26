<template>
  <div class="about">
    <div class="slides">
      <div class="slide">
        <p>九州工業大学情報工学部3年</p>
      </div>
      <div class="slide">
        <p>Python / Javascript / Golang / RoR / Unity / Android</p>
      </div>
      <div class="slide">
        <p>九工大サークル<a href='https://compositecomputer.club'>C3</a>所属</p>
      </div>
    </div>
  </div>
</template>
<script>
import anime from 'animejs/lib/anime.es'
export default {
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
.slides {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
.slide {
  position: relative;
  height: 100%;
}
.slide p {
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
