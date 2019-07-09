import styled from "styled-components";
import Header from "../components/Header";

export default () => (
	<div>
		<Header />
		<Title>WELCOME</Title>
	</div>
);

const Title = styled.h1`
	color: orangered;
`;
