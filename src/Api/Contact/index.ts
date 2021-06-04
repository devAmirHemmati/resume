import Http from '../Http';
import {
	IApiGetContact,
	IApiPostNewMessage,
	IApiPostNewMessageData,
} from './types';

export const APIGetContact = async (): Promise<
	IApiGetContact[]
> => {
	const { data } = await Http.get('/contact');

	return data;
};

export const APIPostNewMessage = async (
	payloadData: IApiPostNewMessageData,
): Promise<IApiPostNewMessage> => {
	const { data } = await Http.post(
		'/send-message',
		payloadData,
	);

	return data;
};
