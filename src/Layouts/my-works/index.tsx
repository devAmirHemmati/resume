import { IsotopeWorks } from '../../components/MyWorks';
import { Typography } from '../../interfaces';

const MyWorks = () => {
	return (
		<div>
			<Typography
				component="h4"
				variant="Display4"
				fontFamily="mikhak"
				noneSelection
			>
				نمونه کار ها
			</Typography>

			<IsotopeWorks />
		</div>
	);
};

export default MyWorks;
