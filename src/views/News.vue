<template>
	<div>
		<div class="container">
			<div class="header">
				<h1 class="title">{{ news.title }}</h1>
				<div class="timestamp">{{ formattedPublishedAt }}</div>
			</div>
			<div>
				<img class="cover" :src="news.cover.url" >
			</div>
			<div class="text">
				<p v-html="formattedDescription"></p>
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/utils/api.js'
import dayjs from 'dayjs'
import formatDescription from '@/utils/formatDescription.js'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

export default {
	name: 'News',
	data() {
		return {
			news: {
				id: 'uuid',
				cover: {
					url: 'https://images.microcms-assets.io/assets/d0e7a480f750491c9b25761d01521c7e/5580af563bee44439ccfe59cfa70e6d5/1_l.jpg',
					width: 1280,
					height: 1280
				},
				title: 'Default',
				description: "Test Description",
				publishedAt: "2021-05-20T09:29:31.623Z"
			}
		}
	},
	computed: {
		formattedPublishedAt() {
			return dayjs(this.news.publishedAt).format('YYYY-MM-DD')
		},
		formattedDescription() {
			console.debug(this.news.description)
			console.debug(formatDescription(this.news.description))
			return formatDescription(this.news.description)
		}
	},
	async created() {
		console.debug(this.$route)
		const newsID = this.$route.params.newsID
		console.debug(newsID)
		const res = await api(`/news/${newsID}`)
		console.debug(res)
		this.news = res
	}
}
</script>
<style scoped>
.container {
	margin: 0 0 2rem 0;
}
.header {
	margin-bottom: 2rem;
}
.title {
	margin-bottom: .5rem;
}
.timestamp {
}
.cover {
	max-width: 50%;
}
.text {
	position: relative;
	width: 100%;
	height: 10em;
	font-size: 1rem;
	overflow: hidden;
}
.text p {
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.text .overflow-filter {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 5rem;
	background: linear-gradient(to bottom, #00000000, #ffffff);
}
.text .detail-button {
	position: absolute;
	width: 100%;
	font-size: 1.2rem;
	font-weight: bold;
	bottom: 0;
}

</style>