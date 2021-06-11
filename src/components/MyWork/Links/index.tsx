import { VFC } from 'react';
import { useRouter } from 'next/router';
import {
	Card,
	Typography,
} from '../../../interfaces';
import styles from './Links.module.scss';
import { ILinksProps } from './types';

const Links: VFC<ILinksProps> = ({
	next,
	prev,
}) => {
	const router = useRouter();

	const showAllWorksHandler = (event) => {
		event.preventDefault();

		router.push('my-works');
	};

	return (
		<section>
			<Card className={styles.Links}>
				<Typography
					component={prev ? 'Link' : 'label'}
					href={prev ? `/my-works/${prev}` : null}
					decoration="None"
					color="Danger"
					flashBack
					noneSelection
					className={
						prev ? '' : styles.LinksDisabled
					}
				>
					پروژه قبلی
				</Typography>

				<Typography
					component="a"
					onClick={showAllWorksHandler}
					color="Secondary"
					hoverColor="Dark"
					decoration="None"
				>
					همه پروژه ها
				</Typography>

				<Typography
					component={next ? 'Link' : 'label'}
					href={next ? `/my-works/${next}` : null}
					decoration="None"
					color="Danger"
					flash
					noneSelection
					className={
						next ? '' : styles.LinksDisabled
					}
				>
					پروژه بعدی
				</Typography>
			</Card>
		</section>
	);
};

export default Links;
