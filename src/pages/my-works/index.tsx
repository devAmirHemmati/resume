import {
	Typography,
	Isotope,
} from '../../interfaces';

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

			<Isotope
				cardsDefault={[]}
				filtersDefault={[]}
			>
				{Array(5)
					.fill(null)
					.map((_, key) => (
						<div key={key}>test</div>
					))}
			</Isotope>
		</div>
	);
};

export default MyWorks;
