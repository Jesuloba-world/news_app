import { makeAutoObservable } from "mobx";
import { getNews } from "../query";

// mobX implementation

class Store {
	headlines = [];
	pageToLoad = 1;
	country = "ng";
	pageLoadError = "";

	constructor() {
		makeAutoObservable(this);
	}

	getHeadlines = () => {
		getNews(this.country, this.pageToLoad)
			.then((response) => {
				this.setHeadlines(response.data.articles);
			})
			.catch((err) => {
				this.setError(err.message);
			});
	};

	setHeadlines = (newHeadlines) => {
		this.headlines = [...this.headlines, ...newHeadlines];

		if (newHeadlines.length > 0) {
			this.pageToLoad += 1;
		} else {
			this.setError("No more headlines to load");
		}
	};

	setError = (err) => {
		this.pageLoadError = err;
	};
}

const store = new Store();

export default store;
