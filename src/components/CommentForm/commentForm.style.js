import styled from "styled-components";

export const CommentSection = styled.div`
	margin-top: 20px;
	/* background-color: green; */

	form {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	input {
		width: 200px;
		height: 25px;
		padding-inline: 5px;
	}

	textarea {
		height: 100px;
		padding: 5px;
		font-family: inherit;
	}

	button {
		width: 150px;
		margin-left: auto;
		background-color: purple;
		height: 30px;
		border: none;
		border-radius: 5px;
		color: white;
	}
`;
