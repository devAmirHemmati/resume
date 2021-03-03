export interface IMenuItem {
	text: string;
	to?: string;
	href?: string;
}

export interface IMenuListItem extends IMenuItem {
	items?: IMenuItem[];
}
