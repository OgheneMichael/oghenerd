import styled from "styled-components";

export const Container = styled.div`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1100px;
`;

export const Row = styled.div`
	display: flex;
`;

export const Button = styled.button`
	background: #ffffff;
	border-radius: 3px;
	color: #05274e;
	border: 0;
	flex: 1;
	font-size: 20px;
	font-weight: 400;
	padding: 10px 15px;
	outline: none;
	cursor: pointer;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.16);
	transition: 0.2s ease;

	${props =>
		props.primary &&
		`
			background: #05274E;
			color: #ffffff;
		`};

	&:hover {
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(2px);
	}
`;
