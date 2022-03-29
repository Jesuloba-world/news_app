import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	max-width: 500px;
	border: 1px solid #bbb;
	border-radius: 5px;
	overflow: hidden;
	text-decoration: none;
	color: #333;
`;

export const ImageContainer = styled.div`
	img {
		width: 100%;
		height: auto;
	}
`;

export const Title = styled.h2`
	padding: 5px;
`;
