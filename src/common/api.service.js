import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from '@/common/app.config';

const SentimentService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

	get() {
    return Vue.axios.get(`/sentiment`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default SentimentService;
