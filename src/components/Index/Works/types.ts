import { IMyWorksItem } from '../../../Api/Work/types';
import { IComponentProps } from '../../types';

export interface IIndexWorksProps
	extends IComponentProps {
	works: IMyWorksItem[];
}
