import { tMyWorkItem } from '../../../Api/Work/types';
import { IComponentProps } from '../../types';

export interface IDetailsProps
	extends IComponentProps {
	description: string;
	startDate: string;
	doneDate: string;
	status: tMyWorkItem;
	customer: string;
	location: string;
	url?: string;
}
