import { VFC } from 'react';
import { APIGetHome } from '../Api/Home';
import {
	Banner,
	Comments,
	CountUp,
	IndexWorks,
} from '../components/Index';
import { IHomePageProps } from '../pages-types';

const Home: VFC<IHomePageProps> = ({
	information,
}) => {
	return (
		<div>
			<Banner
				title={information.summary[0].title}
				skills={information.summary[0].skills}
				profile={information.summary[0].avatar}
			/>

			<CountUp
				items={information.summary[0].count_up.map(
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
							rating: parseInt(c.rating) as any,
							workName: c.my_works_id.toString(),
						}),
					)}
				/>
			)}
		</div>
	);
};

export async function getStaticProps() {
	const response = await APIGetHome();

	return {
		props: {
			information: response,
		},
	};
}

export default Home;
