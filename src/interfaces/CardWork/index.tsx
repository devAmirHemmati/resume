import { FC, forwardRef } from 'react';
import Link from 'next/link';
import { ICardWorkProps } from './types';
import styles from './CardWork.module.scss';
import { Card, Typography } from '..';

const CardWork: FC<ICardWorkProps> = forwardRef(
	(
		{
			children,
			href,
			src,
			title,
			className = '',
			...rest
		},
		ref,
	) => {
		return (
			<div
				ref={ref as any}
				className={`${styles.CardWork} ${className}`}
				{...rest}
			>
				<Link href={href}>
					<a className={styles.CardWorkLink}>
						<img
							src={src}
							alt={title}
							draggable={false}
						/>
					</a>
				</Link>

				<div className={styles.CardWorkContent}>
					<Card>
						<Typography
							component="h5"
							variant="TextLarge"
							fontFamily="mikhak"
							noneSelection
						>
							{title}
						</Typography>

						<Typography
							component="p"
							variant="Default"
							noneSelection
						>
							{children}
						</Typography>

						<Typography
							component="Link"
							href={href}
							variant="Default"
							color="Danger"
							flash
							noneSelection
							decoration="None"
						>
							بیشتر بخوانید
						</Typography>
					</Card>
				</div>
			</div>
		);
	},
);

export default CardWork;
