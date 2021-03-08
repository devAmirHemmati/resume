import { FC, ElementType } from 'react';
import { IButtonProps } from './types';
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = ({
	type = 'button',
	children,
	className = '',
	noneSelection,
	component = 'button',
	...rest
}) => {
	const customRest: any = rest;

	if (component === 'button') {
		customRest.type = type;
	}

	const Component: ElementType = component;

	return (
		<Component
			className={`${styles.Button} ${
				noneSelection
					? styles.ButtonNoneSelection
					: ''
			} ${className}`}
			{...customRest}
		>
			{children}
		</Component>
	);
};

export default Button;
