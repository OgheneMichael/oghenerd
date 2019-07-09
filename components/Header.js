import Link from "next/link";
import styled from "styled-components";

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

const Container = styled.div`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1100px;
`;

const Header = styled.div`
	margin-top: 38px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #05274e;
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
