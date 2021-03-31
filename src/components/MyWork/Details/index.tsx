import { VFC } from 'react';
import moment from 'jalali-moment';
import {
	Card,
	Grid,
	ListQAA,
	Typography,
} from '../../../interfaces';
import styles from './Details.module.scss';
import { IDetailsProps } from './types';
import { monthes } from '../../../constant/monthes';

const statusText: string[] = [
	'ناموفق',
	'موفق',
	'در حال انجام',
];

const Details: VFC<IDetailsProps> = ({
	status,
	customer,
	description,
	doneDate,
	location,
	startDate,
	url,
}) => {
	const startDateString = moment(startDate)
		.locale('fa')
		.format('YYYY/M')
		.split('/');
	const envDateString = moment(doneDate)
		.locale('fa')
		.format('YYYY/M')
		.split('/');

	return (
		<section>
			<Typography
				component="h5"
				variant="Display4"
				noneSelection
			>
				جزئیات نمونه کار
			</Typography>

			<Grid
				container
				className={styles.DetailsGrid}
			>
				<Grid
					grid={{ Lg: 8, Xs: 12 }}
					className={styles.DetailsGridItem}
				>
					<div>
						<Card>
							<Typography noneSelection>
								{description}
							</Typography>

							{typeof url === 'string' && (
								<Typography
									component="a"
									href={url}
									variant="LinkSmall"
									color="Danger"
									target="_blank"
									flash
								>
									مشاهده پروژه
								</Typography>
							)}
						</Card>
					</div>
				</Grid>

				<Grid
					grid={{ Lg: 4, Xs: 12 }}
					className={styles.DetailsGridItem}
				>
					<div>
						<Card>
							<ListQAA
								question="تاریخ سفارش"
								answer={`${
									monthes[
										parseInt(startDateString[1]) -
											1
									]
								} ${startDateString[0]}`}
							/>

							<ListQAA
								question="تاریخ تحویل"
								answer={`${
									monthes[
										parseInt(startDateString[1]) -
											1
									]
								} ${envDateString[0]}`}
							/>

							<ListQAA
								question="وضعیت"
								answer={statusText[status]}
							/>

							<ListQAA
								question="سفارش دهنده"
								answer={customer}
							/>

							<ListQAA
								question="موقعیت"
								answer={location}
								style={{ marginBottom: 0 }}
							/>
						</Card>
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default Details;
