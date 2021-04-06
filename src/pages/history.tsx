import {
	HistoryEducation,
	HistoryWork,
} from '../components/History';
import { DUMMY_HISTORY } from '../constant/DUMMY/history';
import { Grid } from '../interfaces';

const History = () => {
	return (
		<div>
			<Grid container>
				<Grid grid={{ Xs: 12, Lg: 6 }}>
					<HistoryWork
						items={DUMMY_HISTORY.works}
					/>
				</Grid>

				<Grid grid={{ Xs: 12, Lg: 6 }}>
					<HistoryEducation
						items={DUMMY_HISTORY.educations}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default History;
