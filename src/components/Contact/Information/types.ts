import { IComponentProps } from '../../types';

type tLink = { name: string; href: string };

export interface IInformationProps
	extends IComponentProps {
	title?: string;
	github: tLink;
	linkedin: tLink;
	virgool: tLink;
	email: tLink;
	telegram: tLink;
	instagram: tLink;
	firstPhoneNumber: tLink;
	secondPhoneNumber: tLink;
	whatsapp: tLink;
}
