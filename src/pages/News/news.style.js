import styled from "styled-components";

export const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding-inline: 10px;

	p {
		text-align: left;
	}
`;

export const ImageContainer = styled.div`
	max-width: auto;
	height: auto;
	overflow: hidden;

	img {
		height: 100%;
		width: auto;
		object-fit: contain;
	}
`;

export const CommentSection = styled.div``;
