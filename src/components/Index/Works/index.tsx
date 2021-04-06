import { VFC } from 'react';
import { MY_WORKS } from './../../../constant/DUMMY/my-works';
import { useGetWindowSize } from '../../../hooks';
import {
	CardWork,
	Carousel,
	Typography,
} from '../../../interfaces';
import { IIndexWorksProps } from './types';
import styles from './Works.module.scss';

const Works: VFC<IIndexWorksProps> = () => {
	const [size] = useGetWindowSize();

	return (
		<section className={styles.Container}>
			<Typography
				component="h4"
				variant="Display4"
			>
				نمونه کار ها
			</Typography>

			<div className={styles.ContainerCarousel}>
				<Carousel
					rtl
					slidesPerPage={size === 'xs' ? 1 : 2}
					offset={size === 'xs' ? 0 : 15}
				>
					{MY_WORKS.cards.map((card, key) => (
						<CardWork
							href={`/my-works/${card.id}`}
							src={card.src}
							title={card.title}
							key={key}
							className={
								styles.ContainerCarouselItem
							}
						>
							{card.description}
						</CardWork>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Works;
