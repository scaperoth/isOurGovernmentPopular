<template>
<header>
	<div class="primary">
		<h1 class="title">
			<span class="animated-text first red">How</span>
			<span class="animated-text second blue">are</span>
			<span class="animated-text third red">we</span>
			<span class="animated-text fourth blue">talking?</span>
		</h1>
	</div>
	<div class="secondary">
		<div class="subtitle">
			<p>The language we use matters</p>
		</div>
		<div class="description">
			<p>
				When we talk about the government, we have a
				choice to use positive or negative language regardless
				of our perspective. If we use positive and objective language, people are more
				likely to listen to us!
			</p>
			<p>
				Let's see how we're doing...
			</p>
		</div>
	</div>
</header>
</template>

<script>
export default {
	name: 'pageHeader'
};
</script>

<style scoped>

header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	overflow: hidden;
	min-height: 800px;
	max-height: 1200px;
	margin-bottom: 50px;
}

.primary, .secondary {
	height: 100%;
	width: 100%;
}

.primary {
	display: flex;
	flex-direction: column;
	min-height: 500px;
}

.title {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	height: 100%;
	font-size: calc((120/905) * 100vw + (1272/181) * 1px);
	color: #444;
	text-transform: uppercase;
	min-height: 500px;
}

.animated-text {
	animation-name: punch-scale;
	animation-timing-function: ease-out;
	animation-duration: 1s;
	animation-fill-mode: forwards;
	transform: scale(0);
}

.animated-text.red {
	color: rgba(255, 10, 10, .5);
}

.animated-text.blue {
	color: rgba(50, 50, 255, .5);
}

.animated-text.first{
	animation-delay: .2s;
}

.animated-text.second{
	animation-delay: .5s;
}

.animated-text.third{
	animation-delay: .7s;
}

.animated-text.fourth{
	animation-delay: 1s;
}

.secondary {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: 0 auto;
	color: white;
	z-index: 1;
	font-weight: 100;
	padding-bottom: 50px;
}

.secondary::after {
	content: '';
	position: absolute;
	width: 150%;
	height: 100%;
	top: 0;
	left: 100%;
	background-color: rgba(50, 50, 255, .5);
	z-index: 0;
	animation: slide-in-left .4s forwards;
	animation-timing-function: cubic-bezier(0, .1, .5, 1);
	animation-delay: 1.5s;
}

.subtitle, .description {
	position: relative;
	z-index: 1;
	width: 80%;
}

.subtitle {
	font-size: calc((62/905) * 100vw + (1272/181) * 1px);
	text-transform: uppercase;
}

.description {
	font-size: calc((42/905) * 100vw + (1272/181) * 1px);
}

@media (min-width: 600px) {
	header {
		flex-direction: row;
		height: 100vh;
	}

	.primary {
		text-align: left;
	}

	.title {
		width: 80%;
		height: 100%;
		font-size: calc((72/905) * 100vw + (1272/181) * 1px);
	}

	.secondary::after {
		border-bottom-left-radius: 20%;
		top: -10%;
	}

	.subtitle, .description {
		width: 70%;
	}

	.subtitle {
		font-size: calc((24/905) * 100vw + (1272/181) * 1px);
		text-transform: uppercase;
	}

	.description {
		font-size: calc((14/905) * 100vw + (1272/181) * 1px);
	}
}

@keyframes punch-scale {
	0% {
		transform: scale(0)
	}
	50% {
		transform: scale(1.2)
	}
	100% {
		transform: scale(1)
	}
}

@keyframes slide-in-left {
	0% {
		left: 100%;
	}
	100% {
		left: 0;
	}
}
</style>
