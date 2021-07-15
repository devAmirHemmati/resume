import { useState, FC } from 'react';
import { CardWork, Grid, Typography } from '..';
import styles from './Isotope.module.scss';
import { IIsotopeProps } from './types';

const Isotope: FC<IIsotopeProps> = ({
	filtersDefault,
	cards,
}) => {
	const [filterActive, setFilterActive] =
		useState<string>('همه');

	const filterCards = cards.filter((card) => {
		if (filterActive === 'همه') return card;

		return card.filter === filterActive;
	});

	const onFilter = (
		event: UIEvent,
		value: string,
	) => {
		event.preventDefault();

		setFilterActive(value);
	};

	const FilterList = () => {
		return (
			<ul className={styles.IsotopeFilterList}>
				{filtersDefault.map((f, key) => (
					<li key={key}>
						<Typography
							href="/"
							onClick={(event) => {
								onFilter(event as any, f.text);
							}}
							component="a"
							variant="TextLarge"
							decoration="None"
							color={
								f.text === filterActive
									? 'Dark'
									: 'Muted'
							}
						>
							{f.text}
						</Typography>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className={styles.Isotope}>
			{FilterList()}

			<Grid
				className={styles.IsotopeContainer}
				container
			>
				{filterCards.map((card, key) => (
					<Grid
						key={key}
						grid={{ Md: 6, Xs: 12 }}
					>
						<div
							className={
								styles.IsotopeContainerItem
							}
						>
							<CardWork
								key={`item-${card.id}`}
								href={`/my-works/${card.id}`}
								src={card.src}
								title={card.title}
							>
								{card.summary}
							</CardWork>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Isotope;
