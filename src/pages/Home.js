import store from "../store";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { NewsItem } from "../components/NewsItem";

function HomePage() {
	useEffect(() => {
		if (store.pageToLoad === 1) {
			store.getHeadlines();
		}
	}, []);

	console.log(store.headlines[0]);

	return (
		<div className="App">
			<h1>Headlines</h1>
			<div className="news-container">
				{store.headlines.map((headline, index) => {
					return (
						<NewsItem
							key={index}
							title={headline.title}
							image={headline.urlToImage}
							url={headline.url}
							author={headline.author}
							content={headline.content}
							description={headline.description}
							date={headline.publishedAt}
						/>
					);
				})}
			</div>
			<button onClick={store.getHeadlines} disabled={store.pageLoadError}>
				{store.pageLoadError ? store.pageLoadError : "Load More"}
			</button>
		</div>
	);
}

export const Home = observer(HomePage);
