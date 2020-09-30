<template>
    <div class="navigation_bg" v-on:click="navClose" :class="{ visible: visible }">
        <div class="navigation">
            <NavigationLink v-if="visible" to="/" :icon="['fas', 'home']">Home</NavigationLink>
            <NavigationLink v-if="visible" to="/about" :icon="['fas', 'info']">About</NavigationLink>
        </div>
    </div>
</template>
<script>
import NavigationLink from './NavigationLink'
// import anime from 'animejs/lib/anime.es'
export default {
    components: {
        NavigationLink
    },
    props: {
        visible: Boolean
    },
    methods: {
        navClose() {
            this.$emit('close')
        }
    }

}
</script>
<style scoped>
.navigation_bg {
    position: fixed;
    background-color: #00000055;
    display: none;
    opacity: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    text-align: left;
    z-index: 5000;
    transition: 0.5s;
}
.visible {
    display: block;
    opacity: 1;
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