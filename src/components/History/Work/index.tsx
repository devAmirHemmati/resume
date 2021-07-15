import { VFC, useState, useEffect } from 'react';
import {
	HistoryCard,
	TimeLine,
	Typography,
} from '../../../interfaces';
import {
	IHistoryWorkProps,
	IHistoryWorkItems,
} from './types';
import styles from './Work.module.scss';

const Work: VFC<IHistoryWorkProps> = ({
	title = 'سوابق کاری',
	items,
	className = '',
	...rest
}) => {
	const [customItems, setCustomItems] = useState<
		IHistoryWorkItems[]
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
			className={`${styles.Work} ${className}`}
			{...rest}
		>
			<Typography
				component="h4"
				variant="Display4"
				fontFamily="Vazir"
			>
				{title}
			</Typography>

			<div className={styles.WorkItems}>
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

export default Work;
