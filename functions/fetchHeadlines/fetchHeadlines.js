const axios = require("axios");

const handler = async (event) => {
	const { country, page } = event.queryStringParameters;

	const SECRET_KEY = process.env.SECRET_KEY;

	try {
		const { data } = await axios({
			method: "GET",
			url: "https://newsapi.org/v2/top-headlines",
			params: {
				country: country,
				page: page,
				apiKey: SECRET_KEY,
			},
		});

		return { statusCode: 200, body: JSON.stringify(data) };
	} catch (error) {
		const { status, statusText, headers, data } = error.response;
		return {
			statusCode: status,
			body: JSON.stringify({ statusText, headers, data }),
		};
	}
};

module.exports = { handler };
