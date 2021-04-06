import { ICardProps } from '../Card/type';

export interface IHistoryCardProps
	extends ICardProps {
	title: string;
	side: string;
	startDate: string;
	endDate?: string;
}
