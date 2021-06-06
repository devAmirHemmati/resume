import Http from '../Http';
import {
	IApiGetCommentStatus,
	IApiPostEmployerComment,
	IApiPostEmployerCommentData,
} from './types';

export const APIGetCommentStatus = async (
	id: string,
): Promise<IApiGetCommentStatus> => {
	const { data } = await Http.get(
		`/get-work-comment-status/${id}`,
	);

	return data;
};

export const APIPostEmployerCommentStatus =
	async (
		id: string,
		payloadData: IApiPostEmployerCommentData,
	): Promise<IApiPostEmployerComment> => {
		const formData = new FormData();

		formData.append(
			'message',
			payloadData.message,
		);
		formData.append(
			'rate',
			payloadData.rate.toString(),
		);
		formData.append('status', payloadData.status);
		formData.append('avatar', payloadData.avatar);

		const { data } = await Http.post(
			`/send-work-comment/${id}`,
			formData,
		);

		return data;
	};
