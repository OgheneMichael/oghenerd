import Link from "next/link";
import styled from "styled-components";
import { Container, Button } from "./common/Styles";

export default () => (
	<Hero>
		<Container>
			<HeroInner>
				<Intro>
					<Title>Howdy,</Title>
					<Paragraph>
						I am Oghene Michael, a Front-End Engineer who enjoys{" "}
						<strong>laughing</strong> and building{" "}
						<strong>
							aesthetically pleasing but very functional mobile-ready products.
						</strong>
					</Paragraph>
					<Actions>
						<Button primary>Hire Me</Button>
						<Button>see my Resume</Button>
					</Actions>
				</Intro>
			</HeroInner>
		</Container>
	</Hero>
);

const Title = styled.h1`
	font-size: 50px;
	margin: 0;
`;

const Hero = styled.section``;

const HeroInner = styled.div`
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	color: #05274e;
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 0 60%;
	max-width: 60%;
`;

const Paragraph = styled.p`
	font-size: 25px;
`;

const Actions = styled.div`
	display: flex;
	width: 70%;
	${Button}:not(:last-child) {
		margin-right: 30px;
	}
`;
