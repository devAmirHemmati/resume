import { VFC, useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ToastContainer } from 'react-toastify';
import SimpleReactLightbox from 'simple-react-lightbox';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'rc-tooltip/assets/bootstrap.css';
import './../styles/main.scss';
import {
	Aside,
	Footer,
	Head,
	Header,
	Navbar,
	PageContainer,
} from '../Layouts';
import store from '../store';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: VFC = ({
	Component,
	pageProps,
}: AppProps) => {
	useEffect(() => {
		NProgress.configure({
			showSpinner: false,
			parent: '#page-container',
			trickle: false,
		});

		Router.events.on('routeChangeStart', () => {
			return NProgress.start();
		});

		Router.events.on(
			'routeChangeComplete',
			() => {
				return NProgress.done();
			},
		);

		Router.events.on('routeChangeError', () => {
			return NProgress.done();
		});

		return () => {
			Router.events.off(
				'routeChangeStart',
				() => {
					return NProgress.start();
				},
			);

			Router.events.off(
				'routeChangeComplete',
				() => {
					return NProgress.done();
				},
			);

			Router.events.off(
				'routeChangeError',
				() => {
					return NProgress.done();
				},
			);
		};
	}, []);

	return (
		<>
			<Head />

			<Provider store={store}>
				<div className="container">
					<div className="App">
						<SimpleReactLightbox>
							<Navbar />

							<Header />
							<PageContainer>
								<Component {...pageProps} />

								<Footer />
							</PageContainer>

							<Aside />
						</SimpleReactLightbox>
					</div>
				</div>
			</Provider>

			<ToastContainer
				rtl
				position="bottom-center"
			/>
		</>
	);
};

export default MyApp;
