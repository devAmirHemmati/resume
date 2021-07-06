import {
	useState,
	VFC,
	ChangeEvent,
	FormEvent,
} from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Link from 'next/link';
import {
	AvatarUploader,
	Button,
	Card,
	Field,
	TextArea,
	Typography,
} from '../../../interfaces';
import styles from './styles.module.scss';
import { ISendNewCommentFormProps } from './types';

const SendNewCommentForm: VFC<ISendNewCommentFormProps> =
	({ sendCommentHandler, description }) => {
		const [loading, setLoading] =
			useState<boolean>(false);

		const [isClose, setIsClose] =
			useState<boolean>(false);

		const [message, setMessage] =
			useState<string>('');
		const [star, setStar] = useState<number>(4);

		const setStarHandler = (index: number) => {
			setStar(index);
		};

		const [avatar, setAvatar] = useState<File>();

		const setMessageHandler = (
			event: ChangeEvent<HTMLInputElement>,
		) => {
			setMessage(event.target.value);
		};

		const avatarChangeHandler = (
			newFile: File,
		) => {
			setAvatar(newFile);
		};

		const submitFormHandler = async (
			event: FormEvent,
		): Promise<void> => {
			event.preventDefault();

			if (message.trim() === '') {
				toast('لطفا نظر خود را بنویسید', {
					type: 'error',
					toastId: 'validate',
				});
				return;
			}

			try {
				setLoading(true);

				await sendCommentHandler(
					message.trim(),
					star + 1,
					avatar,
				);

				setIsClose(true);
			} catch {
				toast('نظر شما با موفقیت ثبت نشد', {
					type: 'error',
					toastId: 'success',
				});
			} finally {
				setLoading(false);
			}
		};

		if (isClose) {
			return (
				<div
					className={styles.Container}
					style={{ textAlign: 'center' }}
				>
					<Card>
						<Typography
							component="p"
							variant="Display4"
							fontFamily="Vazir"
							align="Center"
							className={styles.ContainerTitle}
							noneSelection
						>
							نظر شما با موفقیت ثبت شد. <br />
							در صورت تائید توسط ادمین، نظر شما
							ثبت نهایی میگردد.
						</Typography>

						<Link href="">
							<Button component="a">
								صفحه اصلی
							</Button>
						</Link>
					</Card>
				</div>
			);
		}
		return (
			<div className={styles.Container}>
				<Card>
					<div
						className={styles.ContainerUploader}
					>
						<AvatarUploader
							fileChange={avatarChangeHandler}
						/>
					</div>

					<Typography
						component="h1"
						variant="Display4"
						fontFamily="Vazir"
						align="Center"
						className={styles.ContainerTitle}
						noneSelection
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>

					<form onSubmit={submitFormHandler}>
						<TextArea
							type="text"
							value={message}
							onChange={setMessageHandler as any}
							id="message"
							placeholder="نظر خود را بنویسید ..."
							autoFocus
							autoComplete="off"
						/>

						<Field
							className={styles.ContainerStar}
						>
							{Array(5)
								.fill(null)
								.map((_, key) => (
									<FaStar
										key={key}
										color={
											key <= star
												? '#f39c12'
												: '#7f8c8d'
										}
										onClick={() => {
											setStarHandler(key);
										}}
									/>
								))}
						</Field>

						<Button
							type="submit"
							disabled={loading}
						>
							ثبت نظر
						</Button>
					</form>
				</Card>
			</div>
		);
	};

export default SendNewCommentForm;
