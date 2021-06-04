import { NextPage } from 'next';
import { APIGetMyWork } from '../../Api';
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
	Aparat,
	Badge,
	Typography,
} from '../../interfaces';
import { IMyWorkPageProps } from '../../pages-types';
import { DUMMY_MY_WORK } from './../../constant/DUMMY/my-work';

const MyWork: NextPage<IMyWorkPageProps> = ({
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

			{work.video_link !== null && (
				<div style={{ marginTop: 25 }}>
					<Aparat
						title={work.title}
						url={work.video_link}
					/>
				</div>
			)}

			{work.pictures.length >= 1 &&
				work.video_link === null && (
					<div style={{ marginBottom: 40 }}>
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

			<div style={{ paddingTop: 30 }}>
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

			{work.pictures.length >= 1 &&
				work.video_link !== null && (
					<div>
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

			{work.pictures.length >= 1 &&
				work.video_link !== null && (
					<div style={{ marginTop: 25 }} />
				)}

			{work.comments.length >= 1 && (
				<div style={{ marginTop: 50 }}>
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

			<div
				style={{
					paddingTop:
						work.comments.length >= 1 ? 5 : 25,
				}}
			>
				<CountUp items={DUMMY_HOME.countUp} />
			</div>

			<div style={{ marginTop: 40 }}>
				<WorkBanner />
			</div>

			<div style={{ marginTop: 25 }}>
				<Links
					prev={work.perv}
					next={work.next}
				/>
			</div>
		</section>
	);
};

MyWork.getInitialProps = async (args) => {
	const response = await APIGetMyWork(
		args.query.id as any,
	);

	return {
		work: response,
	};
};

export default MyWork;
