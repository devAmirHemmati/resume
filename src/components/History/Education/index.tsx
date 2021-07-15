import { VFC, useEffect, useState } from 'react';
import {
	HistoryCard,
	TimeLine,
	Typography,
} from '../../../interfaces';
import {
	IHistoryEducationProps,
	IHistoryEducationItems,
} from './types';
import styles from './Education.module.scss';

const Education: VFC<IHistoryEducationProps> = ({
	title = 'تحصیلات',
	items,
	className = '',
	...rest
}) => {
	const [customItems, setCustomItems] = useState<
		IHistoryEducationItems[]
	>([]);

	useEffect(() => {
		const newCustomItems = items.map((nci) => ({
			...nci,
			description: nci.description.replace(
				/\n/g,
				'<br />',
			),
		}));

		setCustomItems(newCustomItems);
	}, [items]);

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
				{customItems.map((item, key) => (
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
							dangerouslySetInnerHTML={{
								__html: item.description,
							}}
						/>
					</TimeLine>
				))}
			</div>
		</section>
	);
};

export default Education;
