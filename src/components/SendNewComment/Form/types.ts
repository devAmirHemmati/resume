/* eslint-disable no-unused-vars */

export interface ISendNewCommentFormProps {
	sendCommentHandler(
		message: string,
		star: number,
	): void;
	description: string;
}
