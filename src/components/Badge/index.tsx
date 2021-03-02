import { FC, forwardRef } from 'react';
import { IBadgeProps } from './types';
import styles from './Badge.module.scss';
import { Typography } from '..';

const Badge: FC<IBadgeProps> = forwardRef(
	(
		{
			children,
			className = '',
			noneSelection,
			...rest
		},
		ref,
	) => {
		return (
			<span
				ref={ref as any}
				className={`${styles.Badge} ${className}`}
				{...rest}
			>
				<Typography
					component="span"
					noneSelection={noneSelection}
				>
					{children}
				</Typography>
			</span>
		);
	},
);

export default Badge;
