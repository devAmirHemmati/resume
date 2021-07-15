import { VFC } from 'react';
import { Typography } from '../../interfaces';
import styles from './Footer.module.scss';

const Footer: VFC = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.FooterContainer}>
				<Typography noneSelection>
					© تمامی حقوق برای شخص امیررضا همتی محفوظ
					است.
				</Typography>

				<Typography noneSelection>
					ایمیل:{' '}
					<Typography
						component="a"
						href="mailto://dev.amirhemmati1382@gmail.com"
						fontFamily="mikhak"
						hoverColor="Dark"
					>
						dev.amirhemmati1382@gmail.com
					</Typography>
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
