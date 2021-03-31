import { VFC } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { useGetWindowSize } from '../../../hooks';
import { Carousel } from '../../../interfaces';
import { IWorkGalleryProps } from './types';
import styles from './Gallery.module.scss';

const options = {
	buttons: {
		backgroundColor: 'transparent',
		iconColor: '#fff',
	},
	settings: {
		overlayColor: 'rgba(000,000,000, 0.8)',
		transitionSpeed: 1000,
		transitionTimingFunction: 'linear',
	},
	thumbnails: {
		thumbnailsSize: ['120px', '100px'],
		thumbnailsOpacity: 0.4,
	},
	caption: {
		captionColor: 'rgba(000,000,000, 0.8)',
	},
	progressBar: {
		size: '4px',
		backgroundColor: 'rgba(255, 237, 225, 1)',
		fillColor: '#AF9AB2',
	},
};

const Gallery: VFC<IWorkGalleryProps> = ({
	items,
}) => {
	const [size] = useGetWindowSize();

	return (
		<SRLWrapper options={options}>
			<div className={styles.GalleryItem}>
				<div>
					<Carousel
						rtl
						slidesPerPage={size === 'xs' ? 1 : 2}
						offset={size === 'xs' ? 0 : 15}
					>
						{items.map((data, key) => (
							<div key={key}>
								<a href={data.src}>
									<img
										src={data.src}
										alt={data.alt}
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
	);
};

export default Gallery;
