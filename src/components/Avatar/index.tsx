import { FC } from 'react';
import { IAvatarProps } from './types';
import styles from './Avatar.module.scss';

const Avatar: FC<IAvatarProps> = ({
	className = '',
	alt,
	src,
	children,
	draggable = 'false',
	...rest
}) => {
	return (
		<div className={styles.AvatarContainer}>
			<img
				src={src}
				alt={alt}
				draggable={draggable}
				className={className}
				{...rest}
			/>
			{children}
		</div>
	);
};

export default Avatar;
