import { IHistoryCardProps } from '../../../interfaces/HistoryCard/types';
import { IComponentProps } from '../../types';

export interface IHistoryWorkItems
	extends IHistoryCardProps {
	description: string;
}

export interface IHistoryWorkProps
	extends IComponentProps {
	title?: string;
	items: IHistoryWorkItems[];
}
