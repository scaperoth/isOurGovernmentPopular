<template>
<header>
	<img class="logo" alt="Govt Sentiment Analysis Logo" src="@/assets/logo.png">
	<h1 class="title">How are we talking to each other about the government?</h1>
	<p class="subtitle">
		Using data from Twitter, the way we talk to each other about government
		is analyzed using sentiment analysis and NLP.
	</p>
</header>
</template>

<script>
export default {
	name: 'pageHeader'
};
</script>

<style scoped>
.logo {
		margin: 0;
		padding: 0;
}

.title {
	margin: 0 auto 20px;
	max-width: 600px;
}

.subtitle {
	margin: 0 auto 20px;
	max-width: 700px;
}
</style>
