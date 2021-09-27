import {
	VFC,
	useState,
	useRef,
	useEffect,
} from 'react';
import LazyImagePlaceholder from './LazyImagePlaceholder';
import styles from './styles.module.scss';
import { ILazyImageProps } from './types';

const LazyImage: VFC<ILazyImageProps> = ({
	scale,
	src,
	alt = '',
	className = '',
}) => {
	const [isLoadImage, setIsLoadImage] =
		useState<boolean>(true);

	const imageRef = useRef<HTMLImageElement>();

	useEffect(() => {
		setTimeout(() => {
			setIsLoadImage(imageRef.current.complete);
		}, 0);
	}, []);

	const handleLoadImage = () => {
		setIsLoadImage(true);
	};

	return (
		<div
			className={`${className} ${styles.container}`}
		>
			{!isLoadImage && (
				<div className={styles.placeholder}>
					<LazyImagePlaceholder scale={scale} />
				</div>
			)}

			<img
				src={src}
				alt={alt}
				ref={imageRef}
				onLoad={handleLoadImage}
				className={`${styles.image} ${className}`}
				style={{
					opacity: isLoadImage ? 1 : 0,
				}}
			/>
		</div>
	);
};

export default LazyImage;
