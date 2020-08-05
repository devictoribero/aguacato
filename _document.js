import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/> 
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}