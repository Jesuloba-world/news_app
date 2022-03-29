import { makeAutoObservable } from "mobx";
import { getNews } from "../query";
import { firestore } from "../firebase";
import {
	collection,
	addDoc,
	query,
	where,
	onSnapshot,
} from "firebase/firestore";

// mobX implementation

class Store {
	headlines = [];
	pageToLoad = 1;
	country = "ng";
	pageLoadError = "";
	commentError = "";
	comments = [];
	unsubscribe = null;

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

	getComments = async (title) => {
		const q = query(
			collection(firestore, "comments"),
			where("title", "==", title)
		);

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			this.setComments(items);
		});

		this.unsubscribe = unsubscribe;
	};

	setComments = (newComments) => {
		this.comments = newComments;
	};

	createComment = async (comment) => {
		try {
			await addDoc(collection(firestore, "comments"), comment);
		} catch (e) {
			console.error("Error adding document: ", e);
			this.setCommentError("Error adding document: ", e);
		}
	};

	setCommentError = (err) => {
		this.commentError = err;
	};
}

const store = new Store();

export default store;
