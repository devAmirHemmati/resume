import { AllHTMLAttributes } from 'react';

export interface IBadgeProps
	extends AllHTMLAttributes<HTMLSpanElement> {
	noneSelection?: boolean;
}
