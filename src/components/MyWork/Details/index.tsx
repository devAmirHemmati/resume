import { VFC, useState, useEffect } from 'react';
import {
	Card,
	Grid,
	ListQAA,
	Typography,
} from '../../../interfaces';
import styles from './Details.module.scss';
import { IDetailsProps } from './types';
import { monthes } from '../../../constant/monthes';
import Utilities from '../../../Services/Utilities';

const statusText = {
	Done: 'به پایان رسیده',
	InDevelopment: 'در حال انجام',
};

const Details: VFC<IDetailsProps> = ({
	status,
	customer,
	description,
	doneDate,
	location,
	startDate,
	url,
}) => {
	const [
		customDescription,
		setCustomDescription,
	] = useState('');

	const startDateString = startDate
		.split('-')
		.map((item) =>
			Utilities.removeZeroFromOneDigitNumber(
				item,
			),
		);
	const doneDateString = doneDate
		.split('-')
		.map((item) =>
			Utilities.removeZeroFromOneDigitNumber(
				item,
			),
		);

	useEffect(() => {
		setCustomDescription(description);
	}, [description]);

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
							<Typography
								noneSelection
								dangerouslySetInnerHTML={{
									__html: customDescription,
								}}
							/>

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
								answer={`${startDateString[2]} ${
									monthes[
										parseInt(startDateString[1]) -
											1
									]
								} ${startDateString[0]}`}
							/>

							<ListQAA
								question="تاریخ تحویل"
								answer={`${doneDateString[2]} ${
									monthes[
										parseInt(doneDateString[1]) -
											1
									]
								} ${doneDateString[0]}`}
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
