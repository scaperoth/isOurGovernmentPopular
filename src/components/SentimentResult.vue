<template>
<div class="sentiment-result">
	<div v-if=sentiment.loading class="loading-sentiment">Grabbing Data...</div>
	<div class="results-container" v-else>
		<div class="result-summary">
			{{ summary }}
		</div>
		<div class="perc-results">
			<div class="sentiment-result" id="neg-sentiment">
				<div class="sentiment-result-perc">{{ negSentiment }}%</div>
				<div class="sentiment-result-label">Negative</div>
			</div>
			<div class="sentiment-result" id="neutral-sentiment">
				<div class="sentiment-result-perc">{{ neutralSentiment }}%</div>
				<div class="sentiment-result-label">Neutral</div>
			</div>
			<div class="sentiment-result" id="pos-sentiment">
				<div class="sentiment-result-perc">{{ posSentiment }}%</div>
				<div class="sentiment-result-label">Positive</div>
			</div>
		</div>
		<div class="subjectivity-results">
			<div class="sentiment-result-subjectivity">{{ subjectivity }}%</div>
			<div class="sentiment-result-subjectivity-label">Subjectivity</div>
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
.loading-sentiment {
	font-size: 32px;
	margin-bottom: 40px;
	text-transform: uppercase;
	animation: pulse 3s infinite linear;
}

.result-summary {
	font-size: 35px;
	margin-bottom: 20px;
}

.perc-results {
	display: flex;
	max-width: 400px;
	justify-content: space-around;
	margin: 0 auto;
	flex-wrap: wrap;
}

.sentiment-result {
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
	color: red;
}

#neutral-sentiment .sentiment-result-perc {
	color: gray;
}

#pos-sentiment .sentiment-result-perc {
	color: green;
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1);
	}
}
</style>
