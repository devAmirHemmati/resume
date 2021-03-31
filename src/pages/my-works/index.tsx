import {
	Typography,
	CardWork,
	Isotope,
} from '../../interfaces';
import { MY_WORKS } from './../../constant/DUMMY/my-works';

const MyWorks = () => {
	const IsotopeFiltering = () => {
		return (
			<Isotope
				cardsDefault={MY_WORKS.cards}
				filtersDefault={MY_WORKS.filters}
				unitHeight={300}
			>
				{MY_WORKS.cards.map((card) => (
					<CardWork
						key={card.id}
						href={`/my-works/${card.id}`}
						src={card.src}
						title={card.title}
					>
						{card.description}
					</CardWork>
				))}
			</Isotope>
		);
	};

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

			{IsotopeFiltering()}
		</div>
	);
};

export default MyWorks;
