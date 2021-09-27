import { AllHTMLAttributes } from 'react';

export interface ILazyImageProps
	extends AllHTMLAttributes<HTMLImageElement> {
	scale: number;
}
