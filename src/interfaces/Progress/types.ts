import { AllHTMLAttributes } from 'react';

export interface IProgressProps
	extends AllHTMLAttributes<HTMLDivElement> {
	value: number;
	text?: string;
	notShowNumberValue?: boolean;
}
