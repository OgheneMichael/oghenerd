import styled from "styled-components";
import { Button } from "../common/Styles";

export default ({ client, about, techStacks }) => (
	<Work>
		<Title>{client}</Title>
		<WorkDetail>
			<Title>{client}</Title>
			<Paragraph>{about}</Paragraph>
			<TechStacks>
				<Stack>Tech Stacks:</Stack>
				{techStacks.map((stack, index) => (
					<Stack key={index}>
						<StackIcon title={stack.name} alt={stack.name} src={stack.icon} />
					</Stack>
				))}
			</TechStacks>
			<Button explore>
				<span className="text">Explore</span>
				<span className="arrow" />
			</Button>
		</WorkDetail>
	</Work>
);

const Work = styled.article`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	margin-bottom: 6rem;

	&:nth-of-type(2) {
		flex-direction: row-reverse;
	}
`;

const WorkDetail = styled.div`
	flex: 0 0 40%;
`;

const Title = styled.h3`
	font-size: 30px;
	margin: 0;
`;

const Paragraph = styled.p`
	font-size: 15px;
	color: #707070;
`;

const TechStacks = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 1.5rem 0;
	padding: 0;
`;

const Stack = styled.li`
	&:not(:last-child) {
		margin-right: 20px;
	}
`;

const StackIcon = styled.img`
	display: block;
	width: 100%;
`;
