import { VFC } from 'react';
import { APIGetMyWorks } from '../../Api';
import {
	Typography,
	CardWork,
	Isotope,
} from '../../interfaces';
import { IMyWorksPageProps } from '../../pages-types';
import { MY_WORKS } from './../../constant/DUMMY/my-works';

const MyWorks: VFC<IMyWorksPageProps> = ({
	works,
}) => {
	const IsotopeFiltering = () => {
		if (works.length < 1) {
			return <></>;
		}
		return (
			<Isotope
				cardsDefault={works.map((mItem) => ({
					filter: [mItem.filter],
					id: `item-${mItem.id}`,
				}))}
				filtersDefault={MY_WORKS.filters}
				unitHeight={300}
			>
				{works.map((work) => (
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
