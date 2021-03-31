import { MY_WORKS } from '../../../constant/DUMMY/my-works';
import {
	CardWork,
	Isotope,
} from '../../../interfaces';

const IsotopeWorks = () => {
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
	</Isotope>;
};

export default IsotopeWorks;
