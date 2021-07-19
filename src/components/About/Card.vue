<template>
    <div class="slide">
        <div>
            <div>
                <font-awesome-icon class="icon" :icon="icon" />
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

export default {
    props: {
        icon: String,
    }
}
</script>
<style scoped>
.slide {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.slide div {
    font-size: 2rem;
    font-weight: bold;
}
.icon {
    font-size: 5rem;
    margin-bottom: 1rem;
}
.slide div * {
    position: relative;
}
.slide h1 {
    font-size: 1.8em;
}
</style>