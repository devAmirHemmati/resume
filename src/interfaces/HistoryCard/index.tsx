import { FC } from 'react';
import moment from 'jalali-moment';
import { Badge, Card, Typography } from '..';
import { IHistoryCardProps } from './types';
import styles from './HistoryCard.module.scss';
import { monthes } from '../../constant/monthes';

const HistoryCard: FC<IHistoryCardProps> = ({
	title,
	side,
	startDate,
	endDate,
	children,
	...rest
}) => {
	const mStartDate: number[] = moment(startDate)
		.locale('fa')
		.format('YYYY/MM/DD')
		.split('/')
		.map((m) => parseInt(m));

	const mEndDate: number[] = moment(
		typeof endDate === 'string'
			? endDate
			: new Date(),
	)
		.locale('fa')
		.format('YYYY/MM/DD')
		.split('/')
		.map((m) => parseInt(m));

	return (
		<Card
			{...rest}
			className={styles.HistoryCard}
		>
			<div className={styles.HistoryCardHeader}>
				<Typography
					component="h4"
					variant="Display4"
					fontFamily="Vazir"
					noneSelection
				>
					{title}
				</Typography>

				<Badge noneSelection>
					{monthes[mStartDate[1] - 1]}{' '}
					{mStartDate[0]} -{' '}
					{typeof endDate === 'string'
						? monthes[mEndDate[1] - 1]
						: ''}{' '}
					{typeof endDate === 'string'
						? mEndDate[0]
						: 'هم اکنون'}
				</Badge>
			</div>

			<Typography
				variant="TextSmall"
				color="Secondary"
				noneSelection
			>
				{side}
			</Typography>

			<Typography
				color="Dark"
				className={styles.HistoryCardDescription}
				noneSelection
			>
				{children}
			</Typography>
		</Card>
	);
};

export default HistoryCard;
