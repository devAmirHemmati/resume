import { VFC } from 'react';
import { useGetWindowSize } from '../../../hooks';
import {
	CardWork,
	Carousel,
	Typography,
} from '../../../interfaces';
import { IIndexWorksProps } from './types';
import styles from './Works.module.scss';

const Works: VFC<IIndexWorksProps> = ({
	works,
}) => {
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
					{works.map((work, key) => (
						<CardWork
							href={`/my-works/${work.id}`}
							src={work.src}
							title={work.title}
							key={key}
							className={
								styles.ContainerCarouselItem
							}
						>
							{work.summary}
						</CardWork>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Works;
