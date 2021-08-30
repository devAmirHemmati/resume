import { VFC } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { useGetWindowSize } from '../../../hooks';
import {
	Carousel,
	Typography,
} from '../../../interfaces';
import { IWorkGalleryProps } from './types';
import styles from './Gallery.module.scss';
import { lightBoxOptions } from '../../../options';

const Gallery: VFC<IWorkGalleryProps> = ({
	items,
}) => {
	const [size] = useGetWindowSize();

	return (
		<section className={styles.Container}>
			<Typography
				component="h5"
				variant="Display4"
				noneSelection
				className={styles.ContainerTitle}
			>
				تصاویر نمونه کار
			</Typography>

			<SRLWrapper options={lightBoxOptions}>
				<div className={styles.GalleryItem}>
					<div>
						<Carousel
							rtl
							slidesPerPage={
								size === 'xs' ? 1 : 2
							}
							offset={size === 'xs' ? 0 : 15}
						>
							{items.map((data, key) => (
								<div
									key={key}
									className={styles.GalleryItem}
								>
									<div data-feature="box">
										{/* <div
											className={
												styles.GalleryItemShadow
											}
										/> */}

										<span
											className={
												styles.GalleryItemIcon
											}
										>
											<AiOutlineExpandAlt />
										</span>
									</div>

									<a href={data.src}>
										<LazyLoadImage
											src={data.src}
											alt={data.alt}
											draggable={false}
											effect="blur"
											className={
												styles.GalleryItemImage
											}
										/>
									</a>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</SRLWrapper>
		</section>
	);
};

export default Gallery;
