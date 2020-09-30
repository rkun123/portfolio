<template>
    <font-awesome-icon class="marker" :class="{hidden: !visible}" @click="clicked" :icon="['fas', 'compass']" />
</template>
<script>
//import anime from 'animejs/lib/anime.es'
export default {
    props: {
        visible: Boolean,
    },
    mounted: () => {
    },
    methods: {
        clicked() {
            this.$emit('open')
        }
    }

}
</script>
<style scoped>
.marker {
    position: fixed;
    cursor: pointer;
    transform: translateX(-50%);
    margin-top: 3rem;
    font-size: 3rem;
    text-shadow: 1px 1px 3px grey;
    transition: 0.5s;
    z-index: 2000;
}
.marker:hover {
    color: grey;
}
.hidden {
    margin-top: -3rem!important;
}
</style>