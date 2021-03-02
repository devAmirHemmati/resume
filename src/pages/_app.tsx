import { VFC } from 'react';
import type { AppProps } from 'next/app';
import './../styles/main.scss';

const MyApp: VFC = ({
	Component,
	pageProps,
}: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;
