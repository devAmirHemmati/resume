import { VFC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'rc-tooltip/assets/bootstrap.css';
import './../styles/main.scss';
import {
	Aside,
	Head,
	Header,
	Navbar,
	PageContainer,
} from '../Layouts';
import store from '../store';
import '@brainhubeu/react-carousel/lib/style.css';

const MyApp: VFC = ({
	Component,
	pageProps,
}: AppProps) => {
	return (
		<>
			<Head />

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
		</>
	);
};

export default MyApp;
