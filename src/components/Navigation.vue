<template>
    <div class="container">
        <div class="navigation_bg" v-on:click="navClose" :class="{ visible: isNavOpen }">
            <div class="navigation">
                <NavigationLink v-if="isNavOpen" to="/" :icon="['fas', 'home']">Home</NavigationLink>
                <NavigationLink v-if="isNavOpen" to="/about" :icon="['fas', 'info']">About</NavigationLink>
            </div>
        </div>
        <div class="navigation_button">
            <font-awesome-icon class="marker" v-on:click="navOpen" :icon="['fas', 'compass']" />

        </div>
    </div>
</template>
<script>
import NavigationLink from './NavigationLink'
import anime from 'animejs/lib/anime.es'
export default {
    components: {
        NavigationLink
    },
    data: () => ({
        isNavOpen: false,
    }),
    mounted: () => {
        anime({
            targets: '.marker',
            'margin-top': '3rem',
        })
    },
    methods: {
        navOpen() {
            if(!this.isNavOpen) {
                anime.remove('.navigation_bg, .navigation_button')
                anime({
                    targets: '.marker',
                    'margin-top': '-3rem',
                })
                anime({
                    targets: '.navigation_bg',
                    opacity: 1,
                    duration: 200,
                    easing: 'easeInOutQuad'
                })
                anime({
                    targets: '.navigation_button',
                    opacity: 0,
                })
                this.isNavOpen = true
            }
        },
        navClose() {
            if(this.isNavOpen) {
                anime.remove('.navigation_bg, .navigation_button')
                anime({
                    targets: '.marker',
                    'margin-top': '3rem',
                })
                anime({
                    targets: '.navigation_bg',
                    opacity: 0,
                    easing: 'easeInOutQuad'
                })
                anime({
                    targets: '.navigation_button',
                    opacity: 1,
                })
                this.isNavOpen = false
            }
        }
    }

}
</script>
<style scoped>
.container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2000;
}
.marker {
    cursor: pointer;
    margin-top: -3rem;
    font-size: 3rem;
    text-shadow: 1px 1px 3px grey;
}
.visible {
    display: block!important;
}
.navigation_bg {
    position: absolute;
    display: none;
    background-color: #00000055;
    width: 100%;
    height: 100%;
    z-index: 2000;
    opacity: 0;
    backdrop-filter: blur(10px);
    text-align: left;
}
.navigation_button {
    margin-left: 50%;
    height: 100px;
    transform: translateX(-50%);
    z-index: 3000;
}
.navigation {
    position: absolute;
    margin-left: 1%;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
}
</style>