import { VFC } from 'react';
import {
	HistoryCard,
	TimeLine,
	Typography,
} from '../../../interfaces';
import { IHistoryWorkProps } from './types';
import styles from './Work.module.scss';

const Work: VFC<IHistoryWorkProps> = ({
	title = 'سوابق کاری',
	items,
	className = '',
	...rest
}) => {
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

export default Work;
