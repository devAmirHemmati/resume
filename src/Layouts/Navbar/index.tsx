import { useState, VFC, useEffect } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import {
	MenuIcon,
	MenuItem,
	Typography,
} from '../../components';
import NavigationItems from '../../constant/navigationItems/NavigationItems';
import { switchActiveNavbar } from './../../store/reducers/Navbar/actions';
import ISelectorState from '../../store/@types';
import styles from './Navbar.module.scss';
import { deActiveAside } from '../../store/reducers/Aside/actions';

const Menubar: VFC = () => {
	const dispatch = useDispatch();

	const activeMenu = useSelector<
		ISelectorState,
		boolean
	>((store) => store.NavbarReducer.active);

	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);

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
		if (activeAside) {
			dispatch(deActiveAside());
		}
		dispatch(switchActiveNavbar());
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
