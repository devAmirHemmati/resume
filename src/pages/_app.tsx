import { VFC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import './../styles/main.scss';
import { Navbar } from '../Layouts';
import store from '../store';

const MyApp: VFC = ({
	Component,
	pageProps,
}: AppProps) => {
	return (
		<Provider store={store}>
			<div className="container">
				<div className="App">
					<Navbar />

					<Component {...pageProps} />
				</div>
			</div>
		</Provider>
	);
};

export default MyApp;
