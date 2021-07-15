import { NextPage } from 'next';
import { APIGetMyWork } from '../../Api';
import { Comments } from '../../components/Index';
import {
	Links,
	WorkBanner,
	WorkDetails,
	WorkGallery,
} from '../../components/MyWork';
import {
	Aparat,
	Typography,
} from '../../interfaces';
import { IMyWorkPageProps } from '../../pages-types';
import NotFound from './../404';

const MyWork: NextPage<IMyWorkPageProps> = ({
	work,
}) => {
	if (typeof work === 'undefined') {
		return <NotFound />;
	}
	return (
		<section>
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
					<div style={{ marginBottom: -70 }}>
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
					doneDate={work.done_date}
					location={work.location}
					startDate={work.start_date}
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

			{work.employer_comments.length >= 1 && (
				<div style={{ marginTop: 50 }}>
					<Comments
						comments={work.employer_comments.map(
							(item) => ({
								avatar: item.avatar,
								name: item.name,
								lastName: item.lastname,
								message: item.message,
								rating: item.rating,
								workName: work.title,
							}),
						)}
						title="نظر مشتری"
					/>
				</div>
			)}

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
	try {
		const response = await APIGetMyWork(
			args.query.id as any,
		);

		return {
			work: response,
		};
	} catch {
		return {
			work: undefined,
		};
	}
};

export default MyWork;
