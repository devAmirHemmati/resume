import { useState, VFC } from 'react';
import {
	MenuIcon,
	Typography,
} from '../../components';
import styles from './Navbar.module.scss';

const Menubar: VFC = () => {
	const [activeMenu, setActiveMenu] = useState<
		boolean
	>(false);

	const switchActiveMenuHandler = (): void => {
		setActiveMenu(
			(prevActiveMenu) => !prevActiveMenu,
		);
	};

	const NavbarMenuBar = () => {
		return (
			<div className={styles.NavbarMenuIcon}>
				<div onClick={switchActiveMenuHandler}>
					<MenuIcon active={activeMenu} />
				</div>
			</div>
		);
	};

	const NavbarTitle = () => {
		return (
			<div className={styles.NavbarTitle}>
				<Typography
					component="span"
					noneSelection
				>
					خانه
				</Typography>
			</div>
		);
	};

	return (
		<div
			className={`${styles.Navbar} ${
				activeMenu ? styles.NavbarActive : ''
			}`}
		>
			{NavbarMenuBar()}

			{!activeMenu && NavbarTitle()}
		</div>
	);
};

export default Menubar;
