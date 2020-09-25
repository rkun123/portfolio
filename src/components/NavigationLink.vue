<template>
    <div class="link" :class="{disabled: isCurrent }">
        <i class="fas fa-camera"></i><router-link class="router-link" :to="to"><slot /></router-link>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
export default {
    props: {
        to: String,
    },
    mounted: () => {
        anime({
            targets: '.link',
            'margin-left': '5rem',
        })
    },
    computed: {
        isCurrent() { return this.$route.path === this.to}
    }
}
</script>
<style scoped>
.link {
    font-size: 5rem;
    margin-left: -5rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
}

.router-link {
    text-decoration: none;
    color: black;
}

.disabled {
    opacity: 0.5;
}
</style>