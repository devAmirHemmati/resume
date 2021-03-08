import { VFC } from 'react';
import { Typography } from '..';
import styles from './ListQAA.module.scss';
import { IListQAA } from './types';

const ListQAA: VFC<IListQAA> = ({
	answer,
	question,
	className,
	...rest
}) => {
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
				component="span"
				variant="TextSmall"
				fontFamily="Vazir"
			>
				{answer}
			</Typography>
		</li>
	);
};

export default ListQAA;
