import { NextPage } from 'next';
import { APIGetHistory } from '../Api/History';
import {
	HistoryEducation,
	HistoryWork,
} from '../components/History';
import { Grid } from '../interfaces';
import { IHistoryPageProps } from '../pages-types';

const History: NextPage<IHistoryPageProps> = ({
	information,
}) => {
	return (
		<div>
			<Grid container>
				<Grid grid={{ Xs: 12, Lg: 6 }}>
					{information.work.length >= 1 && (
						<HistoryWork
							items={information.work.map(
								(work) => ({
									description: work.description,
									side: work.position,
									startDate: work.start_date,
									title: work.company,
									endDate: work.end_date,
								}),
							)}
						/>
					)}
				</Grid>

				<Grid grid={{ Xs: 12, Lg: 6 }}>
					{information.edu.length >= 1 && (
						<HistoryEducation
							items={information.edu.map(
								(education) => ({
									description:
										education.description,
									side: education.position,
									startDate: education.start_date,
									title: education.university,
									endDate: education.end_date,
								}),
							)}
						/>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

History.getInitialProps = async () => {
	const response = await APIGetHistory();

	return {
		information: response,
	};
};

export default History;
