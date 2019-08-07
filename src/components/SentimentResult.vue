<template>
<div id="sentiment-result">
	<div v-if=sentiment.loading class="loading-sentiment">Getting Tweets and calculating sentiment...</div>
	<div class="results-container" v-else>
		<div class="result-summary">
			{{ summary }}
		</div>
		<div class="perc-results">
			<div class="perc-result" id="neg-sentiment">
				<div class="sentiment-result-perc">{{ negSentiment }}%</div>
				<div class="sentiment-result-label">Negative</div>
			</div>
			<div class="perc-result" id="neutral-sentiment">
				<div class="sentiment-result-perc">{{ neutralSentiment }}%</div>
				<div class="sentiment-result-label">Neutral</div>
			</div>
			<div class="perc-result" id="pos-sentiment">
				<div class="sentiment-result-perc">{{ posSentiment }}%</div>
				<div class="sentiment-result-label">Positive</div>
			</div>
		</div>
		<div class="subjectivity-results">
			<div class="sentiment-result-subjectivity">{{ subjectivity }}%</div>
			<div class="sentiment-result-subjectivity-label">Subjective</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'sentimentResult',
	props: {
		sentiment: {
			type: Object,
			required: true
		}
	},
	computed: {
		summary() {
			const {
				neg_perc,
				pos_perc
			} = this.sentiment;
			if (neg_perc > pos_perc) {
				return `We need to treat each other better...`
			} else {
				return `We're on the right track!`
			}
		},

		negSentiment() {
			return parseInt(this.sentiment.neg_perc);
		},

		neutralSentiment() {
			return parseInt(this.sentiment.neu_perc);
		},

		posSentiment() {
			return parseInt(this.sentiment.pos_perc);
		},

		subjectivity() {
			return parseInt(this.sentiment.subjectivity * 100);
		}
	}
};
</script>

<style scoped>

#sentiment-result {
	min-height: 400px;
}

.loading-sentiment {
	font-size: 32px;
	margin-bottom: 40px;
	animation: pulse 2s infinite ease;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
	width: 80%;
	margin: 0 auto;
	color: rgba(10, 10, 10, .5);
}

.result-summary {
	font-size: 42px;
	margin-bottom: 20px;
}

.perc-results {
	display: flex;
	max-width: 400px;
	justify-content: space-around;
	margin: 0 auto;
	flex-wrap: wrap;
}

.perc-result {
	display: flex;
	flex-direction: column;
}

.sentiment-result-perc {
	font-size: 42px;
}

.sentiment-result-label {
	font-size: 24px;
}

.subjectivity-results {
	display: flex;
	margin: 20px auto;
	justify-content: center;
	font-size: 32px;
}

.sentiment-result-subjectivity {
	margin-right: 10px;
}

.sentiment-result-subjectivity-label {}

#neg-sentiment .sentiment-result-perc {
	color: rgba(255, 10, 10, .5);
}

#neutral-sentiment .sentiment-result-perc {
	color: rgba(25, 25, 25, .3);
}

#pos-sentiment .sentiment-result-perc {
	color: rgba(75, 200, 75, .8);
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
}
</style>
