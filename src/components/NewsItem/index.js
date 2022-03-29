import { Container, ImageContainer, Title } from "./newsitem.style";

export const NewsItem = ({
	title,
	image,
	url,
	author,
	content,
	description,
	date,
}) => {
	return (
		<Container
			to={`news/${title}`}
			state={{
				image,
				url,
				author,
				content,
				description,
				date,
			}}
		>
			{image && (
				<ImageContainer>
					<img src={image} alt={title} />
				</ImageContainer>
			)}
			<Title>{title}</Title>
		</Container>
	);
};
