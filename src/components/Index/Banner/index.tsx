import { VFC } from 'react';
import Link from 'next/link';
import ReactRotatingText from 'react-rotating-text';
import {
	Button,
	Typography,
} from '../../../interfaces';
import styles from './Banner.module.scss';
import { IBanner } from './types';

const Banner: VFC<IBanner> = ({
	className = '',
	profile,
	skills,
	title,
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
					dangerouslySetInnerHTML={{
						__html: title.replace(
							/\n/g,
							'<br />',
						),
					}}
				/>

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
					&nbsp;
					{skills[0].concat(' ').trimLeft()}
					<ReactRotatingText
						items={skills
							.map((item) => `${item} `)
							.slice(1, skills.length)}
						typingInterval={170}
						deletingInterval={20}
						pause={2000}
					/>
					&nbsp;
					<Typography
						component="i"
						variant="Display4"
						fontFamily="Vazir"
						color="Danger"
						noneSelection
					>
						{'<code>'}
					</Typography>
				</Typography>

				<Link href="my-works">
					<Button component="a" noneSelection>
						مشاهده نمونه کار ها
					</Button>
				</Link>
			</div>

			<div className={styles.BannerImageBox}>
				<img
					src={profile}
					alt="Profile"
					draggable="false"
				/>
			</div>
		</section>
	);
};

export default Banner;
