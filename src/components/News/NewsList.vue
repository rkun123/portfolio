<template>
	<div class="container">
		<div class="news-list">
			<div class="news" v-for="news in newsList" :key="news.id">
				<News :news="news" />
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/utils/api.js'
import News from './index.vue'

export default {
	name: 'NewsList',
	components: {
		News
	},
	data() {
		return {
			newsList: []
		}
	},
	async created() {
		const resPayload = await api('/news')
		if(resPayload.contents)
			this.newsList = resPayload.contents
	}
}
</script>
<style scoped>
.container {
	min-height: 100vh;
	padding: 5rem;
}
.news {
	padding: 3rem 0;
	border-bottom: solid 1px black;
}
</style>