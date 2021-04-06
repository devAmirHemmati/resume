import { IHistoryCardProps } from '../../../interfaces/HistoryCard/types';
import { IComponentProps } from '../../types';

export interface IHistoryEducationItems
	extends IHistoryCardProps {
	description: string;
}

export interface IHistoryEducationProps
	extends IComponentProps {
	title?: string;
	items: IHistoryEducationItems[];
}
