import { IComponentProps } from '../../types';

export interface IComment {
	avatar?: string;
	name: string;
	lastName: string;
	workName: string;
	message: string;
	rating: string;
}

export interface ICommentsProps
	extends IComponentProps {
	comments: IComment[];
	title: string;
}
