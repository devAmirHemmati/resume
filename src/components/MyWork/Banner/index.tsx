import { VFC } from 'react';
import Link from 'next/link';
import {
	Button,
	Typography,
} from '../../../interfaces';
import styles from './Banner.module.scss';

const Banner: VFC = () => {
	return (
		<div className={styles.Banner}>
			<Typography
				component="h1"
				variant="Display1"
				fontFamily="Vazir"
				noneSelection
			>
				برای سفارش پروژه خود آماده اید؟
			</Typography>

			<Typography
				component="p"
				variant="TextLarge"
				color="Lite"
				noneSelection
			>
				بیایید با هم شروع کنیم !
			</Typography>

			<Link href="contact">
				<Button component="a" noneSelection>
					تماس با من
				</Button>
			</Link>
		</div>
	);
};

export default Banner;
