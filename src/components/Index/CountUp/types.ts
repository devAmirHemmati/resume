import { IComponentProps } from '../../types';

export interface ICountUp
	extends IComponentProps {
	items: { value: number; text: string }[];
}
