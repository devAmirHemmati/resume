import { VFC } from 'react';
import { Typography } from '..';
import styles from './ListQAA.module.scss';
import { IListQAA } from './types';

const ListQAA: VFC<IListQAA> = ({
	answer,
	question,
	className,
	href,
	...rest
}) => {
	const restAnswer: any = {};

	if (typeof href === 'string') {
		restAnswer.target = '_blank';
	}

	return (
		<li
			className={`${styles.ListQAA} ${className}`}
			{...rest}
		>
			<Typography
				component="h6"
				variant="Display6"
				color="Dark"
				fontFamily="mikhak"
				noneSelection
			>
				{question}:
			</Typography>

			<Typography
				component={
					typeof href === 'string' ? 'a' : 'span'
				}
				href={href}
				variant="TextSmall"
				fontFamily="Vazir"
				decoration="None"
				{...restAnswer}
			>
				{answer}
			</Typography>
		</li>
	);
};

export default ListQAA;
