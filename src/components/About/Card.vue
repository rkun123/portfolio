<template>
    <div class="slide">
        <div>
            <h1>{{ title }}</h1>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
    }
}
</script>
<style scoped>
.slide {
    position: relative;
    height: 100%;
}
.slide div {
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
.slide div * {
    position: relative;
}
.slide h1 {
    font-size: 1.8em;
}
</style>