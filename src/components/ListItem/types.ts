import { AllHTMLAttributes } from 'react';

export interface IListItemProps
	extends AllHTMLAttributes<HTMLLIElement> {
	checkIcon?: boolean;
}
