import axios from "axios";

export const queryId = {
	GET_NEWS: "GET_NEWS",
};

export const getNews = (country, page) => {
	return axios({
		method: "GET",
		url: "/.netlify/functions/fetchHeadlines",
		params: {
			country,
			page,
		},
	});
};
