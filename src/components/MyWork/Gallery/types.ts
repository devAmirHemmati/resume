import { IComponentProps } from '../../types';

type tItems = {
	src: string;
	alt: string;
};

export interface IWorkGalleryProps
	extends IComponentProps {
	items: tItems[];
}
