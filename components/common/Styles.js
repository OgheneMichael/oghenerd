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

	${props =>
		props.explore &&
		`
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			font-size: 15px;
			font-weight: 300;
			min-width: 180px;
			
			.text {
				transition: 0.2s ease;
			}
		
			&:hover {
				transform: translateY(0);
				.text {
					transform: translateX(9px);
				}
				.arrow {
						transform: translate(8px, 2px);
				}
			}

			& .arrow {
				position: relative;
				width: 50px;
				height: 1px;
				transform: translate(0, 2px);
				transition: 0.2s ease;
				background-color: #707070;
				order: 1;
			}
			
			& .arrow::after {
				content: "";
				position: absolute;
				right: 0;
				bottom: -2px;
				width: 1px;
				height: 5px;
				background-color: #707070;
				order: 2;
			}
		`};
`;
