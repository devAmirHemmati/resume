import { FC } from 'react';
import { ITimeLineProps } from './types';
import styles from './TimeLine.module.scss';

const TimeLine: FC<ITimeLineProps> = ({
	children,
	end,
	index,
}) => {
	return (
		<div
			className={`${styles.TimeLine} ${
				end ? styles.TimeLineEnd : ''
			} ${
				index !== 0
					? styles.TimeLineNotFirstIndex
					: ''
			}`}
		>
			<span className={styles.TimeLineCircle} />

			<div className={styles.TimeLineContent}>
				{children}
			</div>
		</div>
	);
};

export default TimeLine;
