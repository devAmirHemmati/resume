import { FC, ElementType, forwardRef } from 'react';
import { IButtonProps } from './types';
import styles from './Button.module.scss';

const Button: FC<IButtonProps> = forwardRef(
	(
		{
			type = 'button',
			children,
			className = '',
			noneSelection,
			component = 'button',
			...rest
		},
		ref,
	) => {
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
				ref={ref as any}
			>
				{children}
			</Component>
		);
	},
);

export default Button;
