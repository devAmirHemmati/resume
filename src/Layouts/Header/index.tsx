import { VFC } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { FaEllipsisV } from 'react-icons/fa';
import { MenuIcon } from '../../interfaces';
import ISelectorState from '../../store/@types';
import { switchActiveNavbar } from '../../store/reducers/Navbar/actions';
import { switchActiveAside } from '../../store/reducers/Aside/actions';
import styles from './Header.module.scss';

const Header: VFC = () => {
	const dispatch = useDispatch();

	const activeMenu = useSelector<
		ISelectorState,
		boolean
	>((store) => store.NavbarReducer.active);

	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);

	const switchActiveMenuHandler = (): void => {
		if (activeAside) {
			return;
		}
		dispatch(switchActiveNavbar());
	};

	const switchActiveAsideHandler = (): void => {
		if (activeMenu) {
			return;
		}
		dispatch(switchActiveAside());
	};

	return (
		<header className={styles.Header}>
			<div>
				<FaEllipsisV
					onClick={switchActiveAsideHandler}
					className={`${styles.HeaderIconAside} ${
						activeAside
							? styles.HeaderIconAsideActive
							: ''
					} ${
						activeMenu
							? styles.HeaderIconAsideDisable
							: ''
					}`}
				/>

				<div
					className={`${styles.HeaderMenuIcon} ${
						activeMenu
							? styles.HeaderMenuIconActive
							: ''
					} ${
						activeAside
							? styles.HeaderMenuIconDisable
							: ''
					}`}
				>
					<div onClick={switchActiveMenuHandler}>
						<MenuIcon active={activeMenu} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
