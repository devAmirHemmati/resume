import { VFC, useState, useEffect } from 'react';
import { ISplashScreenProps } from './types';
import styles from './SplashScreen.module.scss';
import {
	Progress,
	Typography,
} from '../../interfaces';
import { USER_INFORMATION } from '../../constant/constacts';

const SplashScreen: VFC<ISplashScreenProps> = ({
	isOpened,
	timeoutShow = 1500,
}) => {
	const [
		progress,
		setProgress,
	] = useState<number>(0);
	const [isShow, setIsShow] = useState<boolean>(
		false,
	);
	const [isLoad, setIsLoad] = useState<boolean>(
		false,
	);

	useEffect(() => {
		setTimeout(() => {
			setProgress(50);

			setTimeout(() => {
				setIsLoad(true);
			}, 2000);
		}, 1000);
	}, []);

	useEffect(() => {
		if (isOpened && isLoad) {
			setProgress(100);

			setTimeout(() => {
				setIsShow(true);
			}, timeoutShow);
		}
	}, [isOpened, isLoad]);

	const clickSplashScreenHandler = (): void => {
		if (isOpened) {
			setIsShow(true);
		}
	};

	return (
		<div
			className={`${styles.Container} ${
				isShow ? styles.ContainerRemove : ''
			}`}
			onClick={clickSplashScreenHandler}
		>
			<div className={styles.ContainerContent}>
				<Typography
					component="h2"
					variant="Display4"
					noneSelection
					align="Center"
				>
					{USER_INFORMATION.TITLE_SPLASH_SCREEN}
				</Typography>

				<Progress
					value={progress}
					notShowNumberValue
					style={{ width: 250 }}
				/>

				<Typography
					component="span"
					variant="TextLarge"
					align="Center"
					noneSelection
				>
					{progress}

					{' % '}
				</Typography>
			</div>
		</div>
	);
};

export default SplashScreen;
