<template>
	<div id="home">
		<SentimentResult :sentiment=sentiment></SentimentResult>
	</div>
</template>

<script>

import ApiService from '@/common/api.service';
import SentimentResult from '@/components/SentimentResult';

export default {
  name: 'home',
	components: {
		SentimentResult
	},
	data() {
		return {
			sentiment: { loading: true}
		}
	},
	async mounted() {
		try{
			const { data } = await ApiService.get();
			console.log('data', data);
			this.sentiment = data;
		}catch(err){
			console.log(err);
		}
	}
};

</script>
