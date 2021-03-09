import { IComponentProps } from '../../types';

export interface IServicesProps
	extends IComponentProps {
	services: {
		title: string;
		description: string;
	}[];
}
