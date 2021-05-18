import { VFC } from 'react';
import {
	APIGetMyWork,
	APIGetMyWorks,
} from '../../Api';
import {
	Comments,
	CountUp,
} from '../../components/Index';
import {
	Links,
	WorkBanner,
	WorkDetails,
	WorkGallery,
} from '../../components/MyWork';
import { DUMMY_HOME } from '../../constant/DUMMY/home';
import {
	Badge,
	Typography,
} from '../../interfaces';
import { IMyWorkPageProps } from '../../pages-types';
import { DUMMY_MY_WORK } from './../../constant/DUMMY/my-work';

const MyWork: VFC<IMyWorkPageProps> = ({
	work,
}) => {
	return (
		<section>
			<div className="d-flex justify-content-between align-items-center">
				<Typography
					component="h1"
					variant="Display4"
					color="Dark"
					fontFamily="mikhak"
					style={{ fontSize: 22 }}
					noneSelection
				>
					{work.title}
				</Typography>

				<Badge noneSelection>
					{DUMMY_MY_WORK.label}
				</Badge>
			</div>

			{work.pictures.length >= 1 && (
				<div style={{ paddingTop: 25 }}>
					<WorkGallery
						items={work.pictures.map(
							(pictureItem) => ({
								alt: pictureItem.alt,
								src: pictureItem.src,
							}),
						)}
					/>
				</div>
			)}

			<div style={{ paddingTop: 60 }}>
				<WorkDetails
					customer={work.customer}
					description={work.description}
					doneDate={new Date()}
					location={work.location}
					startDate={new Date()}
					status={work.status}
					url={work.url}
				/>
			</div>

			{work.comments.length >= 1 && (
				<div>
					<Comments
						comments={work.comments.map(
							(item) => ({
								avatar: item.avatar,
								name: item.name,
								description: item.description,
								rating: parseInt(item.rating) as
									| 1
									| 2
									| 3
									| 4
									| 5,
								workName: work.title,
							}),
						)}
						title="نظر مشتری"
					/>
				</div>
			)}

			<div style={{ paddingTop: 20 }}>
				<CountUp items={DUMMY_HOME.countUp} />
			</div>

			<div style={{ marginTop: 40 }}>
				<WorkBanner />
			</div>

			<div style={{ marginTop: 25 }}>
				<Links />
			</div>
		</section>
	);
};

export async function getStaticProps({ params }) {
	const work = await APIGetMyWork(params.id);

	return {
		props: {
			work,
		},
	};
}

export async function getStaticPaths() {
	const works = await APIGetMyWorks();

	return {
		paths: works.map((post) => {
			return {
				params: {
					id: post.id.toString(),
				},
			};
		}),
		fallback: false,
	};
}

export default MyWork;
