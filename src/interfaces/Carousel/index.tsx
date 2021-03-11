import { FC, forwardRef, useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {
	FaAngleLeft,
	FaAngleRight,
} from 'react-icons/fa';
import styles from './Carousel.module.scss';
import { ICarouselProps } from './types';
import '@brainhubeu/react-carousel/lib/style.css';

const CustomCarousel: FC<ICarouselProps> = forwardRef(
	(
		{
			className = '',
			children,
			rtl = true,
			value,
			onChangeSlide,
			slidesPerPage,
			hideDots,
			hideFeature,
			hideArrow,
			...rest
		},
		ref,
	) => {
		const [
			activeSlide,
			setActiveSlide,
		] = useState<number>(0);

		const customActiveSlide =
			typeof value === 'undefined'
				? activeSlide
				: value;

		const isEndSlide = (
			newSlideNumber: number = customActiveSlide,
			decreases: number = 1,
		): boolean => {
			return (
				newSlideNumber ===
				Array.from(children as []).length -
					decreases
			);
		};

		const setNewSlideHandler = (
			newSlideNumber: number,
		): void => {
			if (
				isEndSlide(newSlideNumber) ||
				newSlideNumber < 0
			) {
				return;
			}

			if (typeof onChangeSlide === 'function') {
				onChangeSlide(newSlideNumber);
				return;
			}
			setActiveSlide(newSlideNumber);
		};

		return (
			<div
				ref={ref as any}
				className={`${styles.Carousel} ${className}`}
				{...rest}
			>
				<Carousel
					rtl={rtl}
					value={customActiveSlide}
					slidesPerPage={slidesPerPage}
					offset={15}
					onChange={setNewSlideHandler}
				>
					{children}
				</Carousel>

				{!hideFeature && (
					<div className={styles.CarouselFeature}>
						{!hideArrow && (
							<div
								className={
									styles.CarouseleatureArrow
								}
							>
								<FaAngleRight
									className={`${
										styles.CarouselFeatureArrowItem
									} ${
										customActiveSlide === 0
											? styles.CarouselFeatureArrowItemDisabled
											: ''
									}`}
									onClick={() => {
										setNewSlideHandler(
											customActiveSlide - 1,
										);
									}}
								/>
								<FaAngleLeft
									className={`${
										styles.CarouselFeatureArrowItem
									} ${
										isEndSlide(
											customActiveSlide,
											2,
										)
											? styles.CarouselFeatureArrowItemDisabled
											: ''
									}`}
									onClick={() => {
										setNewSlideHandler(
											customActiveSlide + 1,
										);
									}}
								/>
							</div>
						)}

						{!hideDots && (
							<div
								className={
									styles.CarouselFeatureDots
								}
							>
								{Array.from(children as any)
									.slice(
										0,
										Array.from(children as any)
											.length - 1,
									)
									.map((_, key) => (
										<span
											key={key}
											className={`${
												styles.CarouselFeatureDotsItem
											} ${
												key === customActiveSlide
													? styles.CarouselFeatureDotsItemActive
													: ''
											}`}
											onClick={() => {
												setNewSlideHandler(key);
											}}
										/>
									))}
							</div>
						)}
					</div>
				)}
			</div>
		);
	},
);

export default CustomCarousel;
