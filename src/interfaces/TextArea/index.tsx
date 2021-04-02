import { VFC, forwardRef, useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { ITextAreaProps } from './types';
import styles from './TextArea.module.scss';

const TextArea: VFC<ITextAreaProps> = forwardRef(
	(
		{
			className = '',
			id = '',
			type,
			onFocus,
			onBlur,
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

		return (
			<div className={styles.Container}>
				<label
					htmlFor={id}
					className={`${styles.Label} ${
						isFocus ? styles.LabelActive : ''
					}`}
				>
					<FaComment />
				</label>

				<textarea
					ref={ref as any}
					onFocus={focusHandler}
					onBlur={blurHandler}
					id={id}
					className={`${className} ${styles.TextArea}`}
					{...rest}
				/>
			</div>
		);
	},
);

export default TextArea;
