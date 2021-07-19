<template>
  <div class="about">
    <Card title="大学">
      <p>九州工業大学情報工学部3年</p>
    </Card>
    <Card title="技術">
      <p>Python / Javascript / Golang / Ruby on Rails / Unity / Android</p>
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
    sliding: false
  }),
  methods: {
    scrollUp() {
      if(!this.sliding && this.nowSlideIndex > 0) {
        console.debug('scroll up', this.nowSlideIndex)
        this.sliding = true
        this.nowSlideIndex--
        this.animate()
      }
    },
    scrollDown() {
      if(!this.sliding && this.nowSlideIndex < this.slides.length-1) {
        console.debug('scroll down', this.nowSlideIndex)
        this.sliding = true
        this.nowSlideIndex++
        this.animate()
      }
    },
    animate() {
      anime({
        targets: 'html, body',
        scrollTop: this.slides[this.nowSlideIndex].top,
        duration: 600,
        easing: 'easeOutCubic',
        complete: () => {
          this.sliding = false;
        }
      })
    },
    scrollListener(e) {
      e.preventDefault()
      if(e.deltaY < 0) {
        // Scroll up
        this.scrollUp()
      } else if(e.deltaY > 0) {
        // Scroll down
        this.scrollDown()
      }
    },
    getSlides() {
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
    window.addEventListener('wheel', this.scrollListener, {passive: false})
  },
  beforeDestroy() {
    console.debug('unmount')
    window.removeEventListener('wheel', this.scrollListener)
  }
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
