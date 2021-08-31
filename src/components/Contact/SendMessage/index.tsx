import {
	VFC,
	FormEvent,
	useState,
	ChangeEvent,
	useRef,
	useEffect,
} from 'react';
import { toast } from 'react-toastify';
import { APIPostNewMessage } from '../../../Api/Contact';
import { useGetWindowSize } from '../../../hooks';
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
	const [windowSize] = useGetWindowSize();

	const [loading, setLoading] =
		useState<boolean>(false);
	const [fullName, setFullName] =
		useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] =
		useState<string>('');

	const fullNameFieldRef =
		useRef<HTMLInputElement>();

	useEffect(() => {
		setTimeout(() => {
			if (
				!fullNameFieldRef.current ||
				(windowSize !== 'xl' &&
					windowSize !== 'lg')
			) {
				return;
			}

			fullNameFieldRef.current.focus();
		}, 100);
	}, [windowSize]);

	const showNameErrorMessage = () =>
		toast.error(
			'نام خود را به فارسی وارد نمائید',
			{ toastId: 'validate' },
		);

	const showEmailErrorMessage = () =>
		toast.error('ایمیل خود را صحیح وارد نمائید', {
			toastId: 'validate',
		});

	const showMessageErrorMessage = () =>
		toast.error('پیام خود را وارد نمائید', {
			toastId: 'validate',
		});

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

	const submitFormHandler = async (
		event: FormEvent,
	): Promise<void> => {
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

		try {
			setLoading(true);

			await APIPostNewMessage({
				email: email.trim(),
				message: message.trim(),
				name: fullName.trim(),
			});

			setLoading(false);

			toast.success('پیام ارسال شد');
		} catch {
			toast.error('پیام باموفقیت ارسال نشد');
		}
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
							ref={fullNameFieldRef as any}
							value={fullName}
							onChange={setFormHandler}
							id="full-name"
							placeholder="نام"
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

					<Button
						type="submit"
						disabled={loading}
					>
						ارسال
					</Button>
				</form>
			</Card>
		</section>
	);
};

export default SendMessage;
