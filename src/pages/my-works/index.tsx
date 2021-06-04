import { NextPage } from 'next';
import { APIGetMyWorks } from '../../Api';
import {
	Typography,
	CardWork,
	Isotope,
} from '../../interfaces';
import { IMyWorksPageProps } from '../../pages-types';

const MyWorks: NextPage<IMyWorksPageProps> = ({
	works,
}) => {
	const customFilter: any = works.filter;

	const IsotopeFiltering = () => {
		if (customFilter.length < 1) {
			customFilter.push({
				isChecked: true,
				label: 'all',
				text: 'همه',
			});
		}

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
				filtersDefault={customFilter.map(
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
						{work.summary}
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

MyWorks.getInitialProps = async () => {
	const response = await APIGetMyWorks();

	return { works: response };
};

export default MyWorks;
