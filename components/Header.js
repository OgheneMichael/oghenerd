import Link from "next/link";
import styled from "styled-components";
import { Container } from "./common/Styles";

export default () => (
	<Container>
		<Header>
			<Link href="/">
				<img src="static/images/logo.svg" />
			</Link>
			<div>
				<Link href="/work">
					<NavItem>Work</NavItem>
				</Link>
				<Link href="/about">
					<NavItem>About</NavItem>
				</Link>
				<Link href="/contact">
					<NavItem>Contact</NavItem>
				</Link>
			</div>
		</Header>
	</Container>
);

const Header = styled.header`
	margin-top: 38px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavItem = styled.span`
	text-transform: uppercase;
	cursor: pointer;
	margin-left: 15px;
	margin-right: 15px;
	&:last-child {
		margin-right: 0;
	}
`;
