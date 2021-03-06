import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import styled, { ServerStyleSheet, createGlobalStyle } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();

		// Step 2: Retrieve styles from components in the page
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement();

		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					{/*<title>My page</title>*/}
					{/* Step 5: Output the styles in the head  */}
					<link
						href="https://fonts.googleapis.com/css?family=Poppins:400,700,900&display=swap"
						rel="stylesheet"
					/>
					{this.props.styleTags}
				</Head>
				<GlobalStyle />
				<Main />
				<NextScript />
			</html>
		);
	}
}

const GlobalStyle = createGlobalStyle`
  body {
		font-family: "Poppins", sans-serif;
		background-color: #fff;
		color: #05274e;
  }
`;
