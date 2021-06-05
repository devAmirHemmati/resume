import { FC } from 'react';
import styles from './Field.module.scss';
import { IFieldProps } from './types';

const Field: FC<IFieldProps> = ({
	className = '',
	children,
}) => {
	return (
		<div
			className={`${styles.Field} ${className}`}
		>
			{children}
		</div>
	);
};

export default Field;
