<template>
<div id="app">
	<PageHeader/>
	<Home />
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import Home from '@/views/Home.vue';

export default {
	name: 'app',
	components: {
		PageHeader,
		Home
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
