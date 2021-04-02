import { VFC } from 'react';
import {
	Card,
	Grid,
	ListQAA,
	Typography,
} from '../../../interfaces';
import { IInformationProps } from './types';
import styles from './Information.module.scss';

const Information: VFC<IInformationProps> = ({
	title = 'اطلاعات تماس',
	className = '',
	email,
	firstPhoneNumber,
	github,
	instagram,
	linkedin,
	secondPhoneNumber,
	telegram,
	virgool,
	whatsapp,
	...rest
}) => {
	return (
		<section
			className={`${styles.Information} ${className}`}
			{...rest}
		>
			<Typography
				component="h4"
				variant="Display4"
				noneSelection
			>
				{title}
			</Typography>

			<Grid
				className={styles.InformationContainer}
				container
			>
				<Grid
					className={
						styles.InformationContainerItem
					}
					grid={{ Lg: 4, Md: 6, Xs: 12 }}
				>
					<div>
						<Card>
							<ListQAA
								question="گیت هاب"
								answer={github.name}
								href={github.href}
							/>

							<ListQAA
								question="لینکدین"
								answer={linkedin.name}
								href={linkedin.href}
							/>

							<ListQAA
								question="ویرگول"
								answer={virgool.name}
								href={virgool.href}
							/>
						</Card>
					</div>
				</Grid>

				<Grid
					className={
						styles.InformationContainerItem
					}
					grid={{ Lg: 4, Md: 6, Xs: 12 }}
				>
					<div>
						<Card>
							<ListQAA
								question="ایمیل"
								answer={email.name}
								href={`mailto:${email.href}`}
							/>
							<ListQAA
								question="تلگرام"
								answer={telegram.name}
								href={telegram.href}
							/>
							<ListQAA
								question="اینستاگرام"
								answer={instagram.name}
								href={instagram.href}
							/>
						</Card>
					</div>
				</Grid>

				<Grid
					className={
						styles.InformationContainerItem
					}
					grid={{ Lg: 4, Md: 6, Xs: 12 }}
				>
					<div>
						<Card>
							<ListQAA
								question="شماره تماس(۱)"
								answer={firstPhoneNumber.name}
								href={`tel:+98${firstPhoneNumber.href}`}
							/>

							<ListQAA
								question="شماره تماس(۲)"
								answer={secondPhoneNumber.name}
								href={`tel:+98${secondPhoneNumber.href}`}
							/>

							<ListQAA
								question="واتساپ"
								answer={whatsapp.name}
								href={`https://wa.me/98${whatsapp.href}`}
							/>
						</Card>
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default Information;
