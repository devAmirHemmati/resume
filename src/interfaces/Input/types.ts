import { AllHTMLAttributes } from 'react';

export interface IInputProps
	extends AllHTMLAttributes<HTMLInputElement> {
	id: string;
	type: string;
	icon?: string;
}
