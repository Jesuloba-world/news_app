import { useLocation, useParams } from "react-router-dom";
import { ImageContainer, Container, CommentSection } from "./news.style";

export const News = () => {
	const location = useLocation();
	const { title } = useParams();

	const { image, description, content, url } = location.state;
	console.log(title);

	return (
		<div className="App">
			<Container>
				<h1>{title}</h1>
				<ImageContainer>
					<img src={image} alt={title} />
				</ImageContainer>
				<h3>{description}</h3>
				<p>{content}</p>
				<a href={url} rel="noreferrer" target="_blank">
					<button>Read More</button>
				</a>
			</Container>
			<CommentSection></CommentSection>
		</div>
	);
};
