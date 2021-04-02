import {
	VFC,
	FormEvent,
	useState,
	ChangeEvent,
} from 'react';
import { toast } from 'react-toastify';
import {
	Button,
	Card,
	Field,
	Input,
	TextArea,
	Typography,
} from '../../../interfaces';
import {
	rIsEmail,
	rIsPersianOnly,
} from '../../../regex';
import styles from './SendMessage.module.scss';

const SendMessage: VFC = () => {
	const [fullName, setFullName] = useState<
		string
	>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>(
		'',
	);

	const showNameErrorMessage = () =>
		toast.error(
			'نام خود را به فارسی وارد نمائید',
		);

	const showEmailErrorMessage = () =>
		toast.error('ایمیل خود را صحیح وارد نمائید');

	const showMessageErrorMessage = () =>
		toast.error('پیام خود را وارد نمائید');

	const setFormHandler = (
		event: ChangeEvent<any>,
	) => {
		switch (event.target.id) {
			case 'full-name':
				setFullName(event.target.value);
				break;

			case 'email':
				setEmail(event.target.value);
				break;

			case 'message':
				setMessage(event.target.value);
				break;

			default:
				break;
		}
	};

	const submitFormHandler = (
		event: FormEvent,
	): void => {
		event.preventDefault();

		if (!rIsPersianOnly.test(fullName.trim())) {
			showNameErrorMessage();
			return;
		} else if (!rIsEmail.test(email.trim())) {
			showEmailErrorMessage();
			return;
		} else if (message.trim() === '') {
			showMessageErrorMessage();
			return;
		}

		toast.success('پیام ارسال شد');
	};

	return (
		<section>
			<Typography
				component="h4"
				variant="Display4"
				noneSelection
			>
				تماس با من
			</Typography>

			<Card className={styles.SendMessageCard}>
				<form onSubmit={submitFormHandler}>
					<Field>
						<Input
							type="text"
							value={fullName}
							onChange={setFormHandler}
							id="full-name"
							placeholder="نام"
							autoFocus
							autoComplete="off"
						/>
					</Field>

					<Field>
						<Input
							type="email"
							value={email}
							onChange={setFormHandler}
							id="email"
							placeholder="ایمیل"
							autoComplete="off"
						/>
					</Field>

					<Field>
						<TextArea
							id="message"
							value={message}
							onChange={setFormHandler}
							placeholder="پیام"
						/>
					</Field>

					<Button type="submit">ارسال</Button>
				</form>
			</Card>
		</section>
	);
};

export default SendMessage;
