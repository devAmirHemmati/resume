export type tFilterDefault = {
	text: string;
	label: string;
	isChecked: boolean;
};

export type tCardsDefault = {
	id: string;
	filter: string[];
};

export interface IIsotopeProps {
	filtersDefault: tFilterDefault[];
	cardsDefault: tCardsDefault[];
	unitHeight?: number;
	cols?: number;
}
