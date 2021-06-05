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
		const { data } = await Http.post(
			`/send-work-comment/${id}`,
			payloadData,
		);

		return data;
	};
