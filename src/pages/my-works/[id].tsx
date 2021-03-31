import { VFC } from 'react';
import { WorkGallery } from '../../components/MyWork';
import {
	Badge,
	Typography,
} from '../../interfaces';
import { DUMMY_MY_WORK } from './../../constant/DUMMY/my-work';

const MyWork: VFC = () => {
	return (
		<div>
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
		</div>
	);
};

export default MyWork;
