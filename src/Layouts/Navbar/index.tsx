import { useState, VFC, useEffect } from 'react';
import {
	MenuIcon,
	MenuItem,
	Typography,
} from '../../components';
import NavigationItems from '../../constant/navigationItems/NavigationItems';
import styles from './Navbar.module.scss';

const Menubar: VFC = () => {
	const [activeMenu, setActiveMenu] = useState<
		boolean
	>(false);
	const [
		showMenuList,
		setShowMenuList,
	] = useState<boolean>(false);

	useEffect(() => {
		if (!activeMenu) {
			setShowMenuList(activeMenu);
			return;
		}

		setTimeout(() => {
			setShowMenuList(activeMenu);
		}, 250);
	}, [activeMenu]);

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

	const NavbarMenuList = () => {
		return (
			<ul
				className={styles.NavbarMenuList}
				style={{
					visibility: !activeMenu
						? 'hidden'
						: 'initial',
				}}
			>
				{NavigationItems.map(
					({ text, ...rest }, key) => (
						<MenuItem
							{...rest}
							key={key}
							index={key}
							active={showMenuList}
						>
							{text}
						</MenuItem>
					),
				)}
			</ul>
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

			{NavbarMenuList()}
		</div>
	);
};

export default Menubar;
