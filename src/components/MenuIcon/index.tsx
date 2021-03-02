import { VFC } from 'react';
import { IMenuIconProps } from './types';
import styles from './MenuIcon.module.scss';

const MenuIcon: VFC<IMenuIconProps> = ({
	active,
	...rest
}) => {
	return (
		<div
			className={`${styles.MenuIcon} ${
				active ? styles.MenuIconActive : ''
			}`}
			{...rest}
		>
			<div />
			<div />
			<div />
		</div>
	);
};

export default MenuIcon;
