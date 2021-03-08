import { VFC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from './CircleProgress.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { ICircleProgressProps } from './types';
import { Typography } from '..';

const CircleProgress: VFC<ICircleProgressProps> = ({
	value,
	text,
}) => {
	return (
		<div className={styles.Container}>
			<div className={styles.CircleProgress}>
				<CircularProgressbar
					value={value}
					text={`${value}%`}
					styles={{
						root: {
							padding: 0,
						},
						path: {
							stroke: '#f44336',
							strokeLinecap: 'butt',
							transition:
								'stroke-dashoffset 0.5s ease 0s',
							transform: 'rotate(0turn)',
							transformOrigin: 'center center',
						},
						trail: {
							stroke: '#c0c0ca',
							strokeLinecap: 'butt',
							transform: 'rotate(0.25turn)',
							transformOrigin: 'center center',
						},
						text: {
							fill: 'rgb(85, 85, 85)',
							fontSize: '20px',
							fontWeight: 'normal',
						},
						background: {
							fill: '#000',
						},
					}}
				/>
			</div>

			{typeof text === 'string' && (
				<Typography
					component="h6"
					variant="Display6"
					align="Center"
					noneSelection
				>
					{text}
				</Typography>
			)}
		</div>
	);
};

export default CircleProgress;
