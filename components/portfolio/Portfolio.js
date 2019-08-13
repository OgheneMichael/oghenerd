import styled from "styled-components";
import { Container } from "../common/Styles";
import Work from "./Work";
import portfolioData from "./portfolio-data";

export default () => (
	<Portfolio>
		<Container>
			<PortfolioInner>
				{portfolioData.map((data, index) => (
					<Work
						key={index}
						client={data.client}
						about={data.about}
						techStacks={data.techStack}
					/>
				))}
			</PortfolioInner>
		</Container>
	</Portfolio>
);

const Portfolio = styled.section`
	background-color: #fcfdff;
`;

const PortfolioInner = styled.div`
	color: #05274e;
	padding: 0 0 10rem;
`;
