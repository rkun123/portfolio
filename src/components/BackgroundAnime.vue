<template>
    <div class="container">
        <div class="cube">
            v
        </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es'
export default {
    mounted() {
        anime({
            targets: 'div.cube',
            translateY: -20,
            loop: true
        })
    }
}
</script>
<style scoped>
.container {
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
}
.cube {
    position: absolute;
    font-size: 3rem;
    z-index: 1000;
    left: 50%;
    bottom: 0;
    transform: translateX(-1.5rem);
}
</style>