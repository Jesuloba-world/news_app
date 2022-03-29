import { useLocation, useParams } from "react-router-dom";
import { ImageContainer, Container, Comments } from "./news.style";
import { CommentForm } from "../../components/CommentForm";
import { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../../store";
import { Comment } from "../../components/Comment";

export const News = observer(() => {
	const location = useLocation();
	const { title } = useParams();

	const { image, description, content, url } = location.state;

	useEffect(() => {
		store.getComments(title);

		return () => store.unsubscribe();
	}, [title]);

	console.log(store.comments);

	return (
		<div className="App">
			<Container>
				<h1>{title}</h1>
				{image && (
					<ImageContainer>
						<img src={image} alt={title} />
					</ImageContainer>
				)}
				<h3>{description}</h3>
				<p>{content}</p>
				<a href={url} rel="noreferrer" target="_blank">
					<button>Read More</button>
				</a>
				<CommentForm title={title} />
				<Comments>
					{store.comments.map((comment, key) => (
						<Comment
							key={key}
							name={comment.name}
							comment={comment.comment}
						/>
					))}
				</Comments>
			</Container>
		</div>
	);
});
