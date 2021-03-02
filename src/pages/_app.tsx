import { VFC } from 'react';
import type { AppProps } from 'next/app';
import './../styles/main.scss';
import { Navbar } from '../Layouts';

const MyApp: VFC = ({
	Component,
	pageProps,
}: AppProps) => {
	return (
		<div className="container">
			<div className="App">
				<Navbar />

				<Component {...pageProps} />
			</div>
		</div>
	);
};

export default MyApp;
