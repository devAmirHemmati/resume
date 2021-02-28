import { FC } from 'react';
import { IButtonProps } from './types';
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = ({
	type = 'button',
	children,
	className = '',
	...rest
}) => {
	return (
		<button
			type={type}
			className={`${styles.Button} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
