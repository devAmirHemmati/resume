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
			notText = false,
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
				{!notText ? (
					<Typography
						component="span"
						noneSelection={noneSelection}
					>
						{children}
					</Typography>
				) : (
					children
				)}
			</span>
		);
	},
);

export default Badge;
