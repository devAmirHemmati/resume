import { IComponentProps } from '../../types';

export interface IDetailsProps
	extends IComponentProps {
	description: string;
	startDate: Date;
	doneDate: Date;
	status: 0 | 1 | 2;
	customer: string;
	location: string;
	url?: string;
}
