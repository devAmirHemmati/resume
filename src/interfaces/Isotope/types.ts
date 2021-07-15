import { IMyWorksItem } from '../../Api/Work/types';

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
	cards: IMyWorksItem[];
	cols?: number;
}
