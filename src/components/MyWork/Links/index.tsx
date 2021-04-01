import {
	Card,
	Typography,
} from '../../../interfaces';
import styles from './Links.module.scss';

const Links = () => {
	return (
		<section>
			<Card className={styles.Links}>
				<Typography
					component="Link"
					href="/my-works"
					decoration="None"
					color="Danger"
					flashBack
				>
					پروژه قبلی
				</Typography>

				<Typography
					component="Link"
					href="/my-works"
					color="Secondary"
					hoverColor="Dark"
					decoration="None"
				>
					همه پروژه ها
				</Typography>

				<Typography
					component="Link"
					href="/my-works"
					decoration="None"
					color="Danger"
					flash
				>
					پروژه بعدی
				</Typography>
			</Card>
		</section>
	);
};

export default Links;
