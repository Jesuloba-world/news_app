import { Container, Name, Text } from "./comment.style";

export const Comment = ({ name, comment }) => {
	return (
		<Container>
			<Name>{name}</Name>
			<Text>{comment}</Text>
		</Container>
	);
};
