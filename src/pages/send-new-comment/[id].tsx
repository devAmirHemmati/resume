import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
	APIGetCommentStatus,
	APIPostEmployerCommentStatus,
} from '../../Api/EmployerComment';
import { ISendNewCommentProps } from '../../pages-types';
import NotFound from '../404';
import { SendNewCommentForm } from './../../components/SendNewComment';

const SendNewComment: NextPage<ISendNewCommentProps> =
	({ information: { description, status } }) => {
		const router = useRouter();
		const { id } = router.query as { id: string };

		const sendCommentHandler = async (
			message: string,
			star: number,
			avatar?: File,
		) => {
			console.log(avatar);
			await APIPostEmployerCommentStatus(id, {
				message,
				rate: star,
				status: 'closed',
				avatar,
			});
		};

		if (!status) {
			return <NotFound />;
		}
		return (
			<section>
				<SendNewCommentForm
					sendCommentHandler={sendCommentHandler}
					description={description}
				/>
			</section>
		);
	};

SendNewComment.getInitialProps = async (args) => {
	const response = await APIGetCommentStatus(
		args.query.id as any,
	);

	return {
		information: response,
	};
};

export default SendNewComment;
