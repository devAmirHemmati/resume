import { NextPage } from 'next';
import { APIGetHome } from '../Api/Home';
import {
	Banner,
	Comments,
	CountUp,
	IndexWorks,
} from '../components/Index';
import { IHomePageProps } from '../pages-types';

const Home: NextPage<IHomePageProps> = ({
	information,
}) => {
	return (
		<div>
			<Banner
				title={information.summary.title}
				skills={information.summary.skills}
				profile={information.summary.avatar}
			/>

			<CountUp
				items={information.summary.count_up.map(
					(item) => ({
						text: item.text,
						value: parseInt(item.value),
					}),
				)}
			/>

			{information?.works?.length >= 1 && (
				<IndexWorks works={information.works} />
			)}

			{information?.comments?.length >= 1 && (
				<Comments
					title="نظر مشتریان"
					comments={information.comments.map(
						(c) => ({
							avatar: c.avatar,
							name: c.name,
							description: c.description,
							rating: parseInt(c?.rating || 0) as any,
							workName: c.work?.title,
						}),
					)}
				/>
			)}
		</div>
	);
};

Home.getInitialProps = async () => {
	const response = await APIGetHome();

	return { information: response };
};

export default Home;
