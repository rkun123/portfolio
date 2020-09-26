<template>
  <div class="hello">
    <svg width="375" height="150" version="1.1" viewBox="0 0 210 80" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <g fill="#000" fill-opacity="0" stroke="#000" stroke-width="0.6" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal" aria-label="rkun">
      <path d="m19.053 77.153h-13.512v-51.067h12.55v7.2609q3.2217-5.1451 5.7702-6.78 2.5966-1.6349 5.8664-1.6349 4.6162 0 8.8958 2.5485l-4.1834 11.781q-3.4141-2.2119-6.3473-2.2119-2.837 0-4.8085 1.5868-1.9715 1.5387-3.1256 5.626-1.106 4.0873-1.106 17.118z" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal"/>
      <path d="m43.913 77.153v-70.493h13.512v37.41l15.82-17.984h16.638l-17.455 18.657 18.705 32.41h-14.57l-12.839-22.937-6.2992 6.5877v16.349z" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal"/>
      <path d="m132.82 77.153v-7.6456q-2.789 4.0873-7.3571 6.4434-4.52 2.3562-9.569 2.3562-5.1451 0-9.2324-2.26-4.0873-2.26-5.9145-6.3473-1.8272-4.0873-1.8272-11.3v-32.313h13.512v23.466q0 10.771 0.72128 13.223 0.76937 2.4043 2.7409 3.8468 1.9715 1.3945 5.0009 1.3945 3.4622 0 6.203-1.8753 2.7409-1.9234 3.7507-4.7124 1.0098-2.837 1.0098-13.801v-21.542h13.512v51.067z" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal"/>
      <path d="m205.86 77.153h-13.512v-26.062q0-8.2707-0.86554-10.675-0.86553-2.4524-2.837-3.7987-1.9234-1.3464-4.6643-1.3464-3.5102 0-6.2992 1.9234-2.789 1.9234-3.8468 5.097-1.0098 3.1736-1.0098 11.733v23.129h-13.512v-51.067h12.55v7.5013q6.6839-8.6554 16.83-8.6554 4.4719 0 8.1745 1.6349 3.7026 1.5868 5.5779 4.0873 1.9234 2.5004 2.6447 5.6741 0.76936 3.1736 0.76936 9.0881z" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal"/>
    </g>
    </svg>
    <div class="description">
      <p>Thank you for visiting.</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es'
export default {
  name: 'HelloWorld',
  data: () => ({
    hasAppeared: false
  }),
  props: {
    msg: String,
    submsg: String,
  },
  mounted: function(){
    if(!this.hasAppeared) {
      anime({
        targets: 'svg g path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false,
        complete: () => {
          anime({
            targets: '.description',
            'margin-top': '0rem',
            duration: 1500,
            opacity: 1,
          })
          anime({
            targets: 'svg g path',
            duration: 1500,
            'fill-opacity': '1'
          })
        }
      })
      this.hasAppeared = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  z-index: 0;
}
.description {
  font-size: 2rem;
  margin-top: -2rem;
  opacity: 0;
  color: #000000;
  font-weight: bold;
}
</style>
