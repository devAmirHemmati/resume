import { VFC } from 'react';
import {
	HistoryCard,
	TimeLine,
	Typography,
} from '../../../interfaces';
import { IHistoryEducationProps } from './types';
import styles from './Education.module.scss';

const Education: VFC<IHistoryEducationProps> = ({
	title = 'تحصیلات',
	items,
	className = '',
	...rest
}) => {
	return (
		<section
			className={`${styles.Education} ${className}`}
			{...rest}
		>
			<Typography
				component="h4"
				variant="Display4"
				fontFamily="Vazir"
			>
				{title}
			</Typography>

			<div className={styles.EducationItems}>
				{items.map((item, key) => (
					<TimeLine
						key={key}
						index={key}
						end={key + 1 === items.length}
					>
						<HistoryCard
							side={item.side}
							startDate={item.startDate}
							title={item.title}
							endDate={item.endDate}
						>
							{item.description}
						</HistoryCard>
					</TimeLine>
				))}
			</div>
		</section>
	);
};

export default Education;
