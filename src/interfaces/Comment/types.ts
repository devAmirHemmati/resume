import { AllHTMLAttributes } from 'react';
import { ICardProps } from '../Card/type';

export interface ICommentProps
	extends ICardProps {
	avatar?: string;
	name: string;
	workName: string;
	rating: 1 | 2 | 3 | 4 | 5;
}
