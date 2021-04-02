import { VFC, forwardRef, useState } from 'react';
import {
	FaUserAlt,
	FaEnvelope,
	FaPhone,
} from 'react-icons/fa';
import { IInputProps } from './types';
import styles from './Input.module.scss';

const Input: VFC<IInputProps> = forwardRef(
	(
		{
			className = '',
			id = '',
			type,
			onFocus,
			onBlur,
			icon = type,
			...rest
		},
		ref,
	) => {
		const [isFocus, setIsFocus] = useState<
			boolean
		>(false);

		const blurHandler = (event) => {
			setIsFocus(false);

			if (typeof onBlur === 'function') {
				onBlur(event);
			}
		};

		const focusHandler = (event) => {
			setIsFocus(true);

			if (typeof onFocus === 'function') {
				onFocus(event);
			}
		};

		let Icon: any;

		switch (icon) {
			case 'text':
				Icon = FaUserAlt;
				break;

			case 'email':
				Icon = FaEnvelope;
				break;

			case 'number':
				Icon = FaPhone;
				break;

			default:
				Icon = FaUserAlt;
				break;
		}

		return (
			<div className={styles.Container}>
				<label
					htmlFor={id}
					className={`${styles.Label} ${
						isFocus ? styles.LabelActive : ''
					}`}
				>
					<Icon />
				</label>

				<input
					ref={ref as any}
					type={type}
					onFocus={focusHandler}
					onBlur={blurHandler}
					id={id}
					className={`${className} ${styles.Input}`}
					{...rest}
				/>
			</div>
		);
	},
);

export default Input;
