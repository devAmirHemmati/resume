import { IComponentProps } from '../../types';

export interface IComment {
	avatar?: string;
	name: string;
	workName: string;
	description: string;
	rating: 1 | 2 | 3 | 4 | 5;
}

export interface ICommentsProps
	extends IComponentProps {
	comments: IComment[];
	title: string;
}
