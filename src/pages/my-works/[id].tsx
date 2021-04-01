import { VFC } from 'react';
import {
	Comments,
	CountUp,
} from '../../components/Index';
import {
	WorkBanner,
	WorkDetails,
	WorkGallery,
} from '../../components/MyWork';
import { DUMMY_HOME } from '../../constant/DUMMY/home';
import {
	Badge,
	Typography,
} from '../../interfaces';
import { DUMMY_MY_WORK } from './../../constant/DUMMY/my-work';

const MyWork: VFC = () => {
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
					{DUMMY_MY_WORK.title}
				</Typography>

				<Badge noneSelection>
					{DUMMY_MY_WORK.label}
				</Badge>
			</div>

			<div style={{ paddingTop: 25 }}>
				<WorkGallery
					items={DUMMY_MY_WORK.gallery}
				/>
			</div>

			<div style={{ paddingTop: 60 }}>
				<WorkDetails
					customer={DUMMY_MY_WORK.customer}
					description={DUMMY_MY_WORK.description}
					doneDate={DUMMY_MY_WORK.doneDate}
					location={DUMMY_MY_WORK.location}
					startDate={DUMMY_MY_WORK.startDate}
					status={DUMMY_MY_WORK.status}
					url={DUMMY_MY_WORK.url}
				/>
			</div>

			<div>
				<Comments
					comments={DUMMY_HOME.comments}
					title="نظر مشتری"
				/>
			</div>

			<div style={{ paddingTop: 20 }}>
				<CountUp items={DUMMY_HOME.countUp} />
			</div>

			<div style={{ marginTop: 40 }}>
				<WorkBanner />
			</div>
		</section>
	);
};

export default MyWork;
