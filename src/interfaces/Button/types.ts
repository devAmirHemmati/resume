import { AllHTMLAttributes } from 'react';

export type tButtonType =
	| 'button'
	| 'submit'
	| 'reset';

export interface IButtonProps
	extends AllHTMLAttributes<HTMLButtonElement> {
	type?: tButtonType;
	noneSelection?: boolean;
	component?: 'button' | 'a';
}
