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

		return (
			<Isotope
				filtersDefault={customFilter.map(
					(filter, key) => ({
						isChecked: key === 0,
						text: filter.text,
						label: filter.label,
					}),
				)}
				cards={works.cards}
			/>
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
