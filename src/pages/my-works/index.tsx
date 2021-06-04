import { VFC } from 'react';
import { APIGetMyWorks } from '../../Api';
import {
	Typography,
	CardWork,
	Isotope,
} from '../../interfaces';
import { IMyWorksPageProps } from '../../pages-types';

const MyWorks: VFC<IMyWorksPageProps> = ({
	works,
}) => {
	const IsotopeFiltering = () => {
		if (works.cards.length < 1) {
			return <></>;
		}
		return (
			<Isotope
				cardsDefault={works.cards.map(
					(mItem) => ({
						filter: [mItem.filter],
						id: `item-${mItem.id}`,
					}),
				)}
				filtersDefault={works.filter.map(
					(filter, key) => ({
						isChecked: key === 0,
						text: filter.text,
						label: filter.label,
					}),
				)}
				unitHeight={300}
			>
				{works.cards.map((work) => (
					<CardWork
						key={`item-${work.id}`}
						href={`/my-works/${work.id}`}
						src={work.src}
						title={work.title}
					>
						{work.description}
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

export async function getStaticProps() {
	const response = await APIGetMyWorks();

	return {
		props: {
			works: response,
		},
	};
}

export default MyWorks;
