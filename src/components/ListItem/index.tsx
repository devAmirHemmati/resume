import { FC, forwardRef } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Typography } from '..';
import styles from './ListItem.module.scss';
import { IListItemProps } from './types';

const ListItem: FC<IListItemProps> = forwardRef(
	(
		{
			children,
			checkIcon,
			className = '',
			...rest
		},
		ref,
	) => {
		return (
			<li
				ref={ref as any}
				className={`${styles.ListItem} ${className}`}
				{...rest}
			>
				<AiOutlineCheck
					color="#f44336"
					size="18px"
					fontWeight="bold"
				/>

				<Typography component="span">
					{children}
				</Typography>
			</li>
		);
	},
);

export default ListItem;
