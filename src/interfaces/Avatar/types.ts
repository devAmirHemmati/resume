import { ImgHTMLAttributes } from 'react';

export interface IAvatarProps
	extends ImgHTMLAttributes<HTMLImageElement> {
	alt: string;
	src: string;
}
