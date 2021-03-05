import { FC, AllHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface ISocialNetworkItemProps
	extends AllHTMLAttributes<HTMLLinkElement> {
	Icon: FC<IconBaseProps>;
	url: string;
	title: string;
}
