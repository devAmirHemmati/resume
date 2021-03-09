import { VFC } from 'react';
import { IServicesProps } from './types';
import styles from './Services.module.scss';
import {
	Card,
	Typography,
} from '../../../interfaces';

const Services: VFC<IServicesProps> = ({
	services,
}) => {
	const ServiceItem = (
		key: number,
		title: string,
		description: string,
	) => {
		return (
			<div key={key}>
				<Card>
					<Typography
						component="h5"
						variant="TextLarge"
						color="Dark"
						noneSelection
					>
						{title}
					</Typography>

					<Typography
						component="p"
						variant="Default"
						noneSelection
					>
						{description}
					</Typography>

					<Typography
						component="Link"
						href="/my-works"
						variant="Default"
						color="Danger"
						decoration="None"
						flash
					>
						سفارش پروژه
					</Typography>
				</Card>
			</div>
		);
	};

	return (
		<section className={styles.Services}>
			<Typography
				component="h4"
				variant="Display4"
				noneSelection
			>
				خدمات ما
			</Typography>

			<div className={styles.ServicesItems}>
				{services.map((service, key) => {
					return ServiceItem(
						key,
						service.title,
						service.description,
					);
				})}
			</div>
		</section>
	);
};

export default Services;
