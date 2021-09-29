import { VFC } from 'react';
import Head from 'next/head';

const IndexHead: VFC = () => {
	const siteInformation = {
		title: 'رزومه امیررضا همتی',
		description: `علاقه و تخصص اصلی من در برنامه نویسی هست،‌ و هرروزسعی میکنم در حال یادگیری و بروزرسانی خودم در این حوزه باشم.

همیشه سعی کردم پروژه هایی که دریافت کردم رو به بهترین شکل توسعه بدم تا بتونم شاهد رضایت کارفرما و مشتریان باشم :)`,
	};
	return (
		<Head>
			<title>{siteInformation.title}</title>
			<meta
				name="googlebot"
				content="index,follow"
			/>
			<meta
				name="robots"
				content="noodp,noydir"
			/>
			<meta
				name="apple-mobile-web-app-capable"
				content="yes"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>

			<meta
				name="description"
				content={siteInformation.description}
			/>

			<meta
				property="og:site_name"
				content={siteInformation.title}
			/>
			<meta
				property="og:title"
				content={siteInformation.title}
			/>
			<meta
				property="og:url"
				content="https://hemmati.org"
			/>
			<meta
				property="og:image"
				content="/Images/fave-icon.webp"
			/>
			<meta
				property="og:image:url"
				content="/Images/fave-icon.webp"
			/>
			<meta
				property="og:description"
				content={siteInformation.description}
			/>
			<meta
				property="og:price:currency"
				content="IRR"
			/>
			<meta
				property="og:locale"
				content="ir_FA"
			/>
			<meta
				name="twitter:title"
				content={siteInformation.title}
			/>
			<meta
				name="twitter:description"
				content={siteInformation.description}
			/>
			<meta
				name="twitter:image"
				content="/Images/fave-icon.webp"
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
			/>

			<link
				rel="shortcut icon"
				href="/Images/fave-icon.webp"
			/>
		</Head>
	);
};

export default IndexHead;
