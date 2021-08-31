import {
	FC,
	forwardRef,
	useState,
	useEffect,
} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
		const [
			shortDescription,
			setShortDescription,
		] = useState<string>('');

		useEffect(() => {
			setShortDescription(children as any);
		}, []);

		return (
			<div
				ref={ref as any}
				className={`${styles.CardWork} ${className}`}
				{...rest}
			>
				<Link href={href}>
					<a className={styles.CardWorkLink}>
						<LazyLoadImage
							src={src}
							alt={title}
							wrapperClassName={
								styles.CardWorkLinkWrapper
							}
							draggable={false}
							effect="blur"
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
							dangerouslySetInnerHTML={{
								__html: shortDescription,
							}}
						/>

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
