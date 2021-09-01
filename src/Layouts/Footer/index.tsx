import { VFC } from 'react';
import { Typography } from '../../interfaces';
import styles from './Footer.module.scss';

const Footer: VFC = () => {
	const email: string = 'resume@hemmati.dev';

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
						href={`mailto://${email}`}
						fontFamily="mikhak"
						hoverColor="Dark"
					>
						{email}
					</Typography>
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
