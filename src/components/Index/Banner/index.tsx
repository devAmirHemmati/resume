import { VFC } from 'react';
import Link from 'next/link';
import {
	Button,
	Typography,
} from '../../../interfaces';
import type { IComponentProps } from './../../types';
import styles from './Banner.module.scss';

const Banner: VFC<IComponentProps> = ({
	className = '',
	...rest
}) => {
	return (
		<section
			className={`${styles.Banner} ${className}`}
			{...rest}
		>
			<div className={styles.BannerContent}>
				<Typography
					component="h1"
					variant="Display1"
					fontFamily="Vazir"
					noneSelection
				>
					رزومه و نمونه کارهای من را
					<br />
					مشاهده کنید!
				</Typography>

				<Typography
					component="p"
					variant="TextLarge"
					fontFamily="Vazir"
					color="Lite"
					noneSelection
				>
					<Typography
						component="i"
						variant="Display4"
						fontFamily="Vazir"
						color="Danger"
						noneSelection
					>
						{'<code>'}
					</Typography>
					&nbsp; برنامه نویس تحت وب و اندروید
					&nbsp;
					<Typography
						component="i"
						variant="Display4"
						fontFamily="Vazir"
						color="Danger"
						noneSelection
					>
						{'</code>'}
					</Typography>
				</Typography>

				<Link href="/my-works">
					<Button component="a" noneSelection>
						مشاهده نمونه کار ها
					</Button>
				</Link>
			</div>

			<div className={styles.BannerImageBox}>
				<img
					src="/Images/profile-lg.png"
					alt="Profile"
					draggable="false"
				/>
			</div>
		</section>
	);
};

export default Banner;
