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
		display: block;
		max-width: 100%;
		max-height: 500px;
		width: auto;
		height: auto;
		margin: 0 auto;
	}
`;

export const Comments = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 10px;
`;
