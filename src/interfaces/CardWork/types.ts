import { AllHTMLAttributes } from 'react';

export interface ICardWorkProps
	extends AllHTMLAttributes<HTMLDivElement> {
	src: string;
	title: string;
	href: string;
}
