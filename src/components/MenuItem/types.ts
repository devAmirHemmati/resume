import { AllHTMLAttributes } from 'react';

export type tIMenuItems = {
	text: string;
	to?: string;
	href?: string;
};

export interface IMenuItemProps
	extends AllHTMLAttributes<HTMLLIElement> {
	items?: tIMenuItems[];
	to?: string;
	href?: string;
	index?: number;
	active: boolean;
}
