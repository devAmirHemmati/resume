/* eslint-disable no-unused-vars */

export interface ISendNewCommentFormProps {
	sendCommentHandler(
		message: string,
		star: number,
		avatar?: File,
	): void;
	description: string;
}
