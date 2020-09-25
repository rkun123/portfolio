<template>
    <div>
        <div class="navigation_bg" v-on:click="navClose" :class="{ visible: isNavOpen }">
            <div class="navigation">
                <NavigationLink v-if="isNavOpen" to="/">Home</NavigationLink>
                <NavigationLink v-if="isNavOpen" to="/about">About</NavigationLink>
            </div>
        </div>
        <div class="navigation_button">
            <svg v-on:click="navOpen" class="marker" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <path v-on:click="navOpen" d="m0 0h210l-105 105.87z"/>
            </svg>

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
            'padding-top': '20px',
            loop: true,
        })
    },
    methods: {
        navOpen() {
            if(!this.isNavOpen) {
                anime({
                    targets: '.navigation_bg',
                    opacity: 1
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
                anime({
                    targets: '.navigation_bg',
                    opacity: 0
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
.marker {
    width: 6rem;

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
    margin-left: 5rem;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
}
</style>