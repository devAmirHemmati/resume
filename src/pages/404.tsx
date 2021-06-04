import { NextPage } from 'next';
import Link from 'next/link';
import {
	Button,
	Card,
	Typography,
} from '../interfaces';

const NotFound: NextPage = () => {
	return (
		<Card style={{ textAlign: 'center' }}>
			<Typography
				component="h1"
				variant="Display1"
				color="Dark"
				align="Center"
				noneSelection
			>
				404
			</Typography>
			<Typography
				component="p"
				variant="Display4"
				color="Dark"
				align="Center"
				noneSelection
			>
				صفحه مورد نظر یافت نشد
			</Typography>

			<br />
			<br />

			<Link href="/">
				<Button component="a">صفحه اصلی</Button>
			</Link>
		</Card>
	);
};

export default NotFound;
