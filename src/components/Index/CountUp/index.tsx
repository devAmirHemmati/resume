import { VFC } from 'react';
import CountUp from 'react-countup';
import { Typography } from '../../../interfaces';
import styles from './CountUp.module.scss';
import { ICountUp } from './types';

const CountUpIndex: VFC<ICountUp> = ({
	items,
	className = '',
	...rest
}) => {
	const CountUpItem = (
		key: number,
		value: number,
		text: string,
	) => {
		return (
			<li key={key}>
				<CountUp end={value} duration={12} />
				&nbsp;
				<Typography
					component="span"
					variant="Display4"
					fontFamily="Vazir"
				>
					{text}
				</Typography>
			</li>
		);
	};

	return (
		<section
			className={`${styles.CountUp} ${className}`}
			{...rest}
		>
			<ul className={styles.CountUpList}>
				{items.map((item, key) => {
					return CountUpItem(
						key,
						item.value,
						item.text,
					);
				})}
			</ul>
		</section>
	);
};

export default CountUpIndex;
