// app config with environment variables

let apiUrl = process.env.GOVT_SENT_API_URL || 'http://localhost:5000';
console.log('process.env', process.env);
if(process.env.NODE_ENV === 'producution') {
	apiUrl = process.env.GOVT_SENT_API_URL || 'https://us-govt-sentiment-api.herokuapp.com';
}

export const API_URL = apiUrl;
