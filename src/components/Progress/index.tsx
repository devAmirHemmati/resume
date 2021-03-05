import { VFC } from 'react';
import { IProgressProps } from './types';
import styles from './Progress.module.scss';
import { Typography } from '..';

const Progress: VFC<IProgressProps> = ({
	value,
	text,
	notShowNumberValue,
	...rest
}) => {
	return (
		<div className={styles.Container} {...rest}>
			<div className={styles.ContainerHeader}>
				<Typography
					component="h6"
					variant="Display6"
					noneSelection
					className={styles.ContainerHeaderText}
				>
					{text}
				</Typography>

				{!notShowNumberValue && (
					<Typography
						component="span"
						noneSelection
						className={
							styles.ContainerHeaderValue
						}
					>
						{value}%
					</Typography>
				)}
			</div>

			<div className={styles.Progress}>
				<div style={{ width: `${value}%` }} />
			</div>
		</div>
	);
};

export default Progress;
