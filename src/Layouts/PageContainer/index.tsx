import { FC } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { deActiveNavbar } from './../../store/reducers/Navbar/actions';
import ISelectorState from '../../store/@types';
import styles from './PageContainer.module.scss';
import { deActiveAside } from '../../store/reducers/Aside/actions';

const PageContainer: FC = ({ children }) => {
	const dispatch = useDispatch();

	const activeNavbar = useSelector<
		ISelectorState,
		boolean
	>((store) => store.NavbarReducer.active);

	const activeAside = useSelector<
		ISelectorState,
		boolean
	>((store) => store.AsideReducer.active);

	const closeNavbarHandler = (): void => {
		if (activeNavbar) {
			dispatch(deActiveNavbar());
		}
		if (activeAside) {
			dispatch(deActiveAside());
		}
	};

	return (
		<div
			className={`${styles.Container} ${
				activeNavbar
					? styles.ContainerActiveNavbar
					: ''
			}`}
		>
			<div className={styles.ContainerPage}>
				<div className="position-relative">
					{children}

					<div
						onClick={closeNavbarHandler}
						className={`${
							styles.ContainerPageShadow
						} ${
							activeNavbar
								? styles.ContainerPageShadowActiveNavbar
								: ''
						} ${
							activeAside
								? styles.ContainerPageShadowActiveAside
								: ''
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default PageContainer;
