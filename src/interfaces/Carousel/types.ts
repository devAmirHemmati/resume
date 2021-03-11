/* eslint-disable no-unused-vars */
import { AllHTMLAttributes } from 'react';

export interface ICarouselProps
	extends AllHTMLAttributes<HTMLDivElement> {
	rtl?: boolean;
	value?: number;
	onChangeSlide?(newValue: number): void;
	slidesPerPage: number;
	hideDots?: boolean;
	hideArrow?: boolean;
	hideFeature?: boolean;
}
