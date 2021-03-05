import { VFC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'rc-tooltip/assets/bootstrap.css';
import './../styles/main.scss';
import {
	Aside,
	Header,
	Navbar,
	PageContainer,
} from '../Layouts';
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

					<Header />
					<PageContainer>
						<Component {...pageProps} />
					</PageContainer>

					<Aside />
				</div>
			</div>
		</Provider>
	);
};

export default MyApp;
