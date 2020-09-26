<template>
    <div class="link" :class="{disabled: isCurrent }">
        <router-link class="router-link" :to="to"><font-awesome-icon v-if="icon" :icon="icon" class="fa-fw icon" /><slot /></router-link>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
export default {
    props: {
        to: String,
        icon: Array,
    },
    mounted () {
        anime({
            targets: '.link',
            'margin-left': '5rem',
        })
        console.log(this.icon)
    },
    computed: {
        isCurrent() { return this.$route.path === this.to}
    }
}
</script>
<style scoped>
.link {
    font-size: 3rem;
    margin-left: -5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
    text-shadow: 1px 1px 3px grey;
}
.link:last-child {
    margin-bottom: 0;
}

.icon {
    margin-right: 1rem;
}

.router-link {
    text-decoration: none;
    color: black;
}

.disabled {
    opacity: 0.2;
}
</style>