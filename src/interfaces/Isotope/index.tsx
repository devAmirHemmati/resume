import {
	useState,
	useRef,
	useEffect,
	FC,
} from 'react';
import IsoTopeGrid from 'react-isotope';
import { Typography } from '..';
import styles from './Isotope.module.scss';
import { IIsotopeProps } from './types';

const Isotope: FC<IIsotopeProps> = ({
	cardsDefault,
	filtersDefault,
	children,
}) => {
	const [filters, updateFilters] = useState(
		filtersDefault,
	);
	const [
		containerHeight,
		setContainerHeight,
	] = useState<number>(0);
	const [
		itemWidth,
		setItemWidth,
	] = useState<number>(0);
	const [
		noOfCols,
		setNoOfCols,
	] = useState<number>(2);

	const containerRef = useRef<HTMLDivElement>();

	useEffect(() => {
		setTimeout(() => {
			setContainerHeight(
				containerRef.current.scrollHeight + 30,
			);

			resizeWindowHandler();
		}, 530);
	}, [filters]);

	useEffect(() => {
		window.addEventListener(
			'resize',
			resizeWindowHandler,
		);

		return () => {
			window.removeEventListener(
				'resize',
				resizeWindowHandler,
			);
		};
	}, []);

	function resizeWindowHandler() {
		if (!containerRef.current) {
			return;
		}

		if (window.innerWidth > 575.98) {
			setNoOfCols(2);
		} else {
			setNoOfCols(1);
		}

		setItemWidth(
			(containerRef.current.offsetWidth -
				(noOfCols === 1 ? 0 : 10 * noOfCols)) /
				noOfCols,
		);
	}

	const onFilter = (
		event: UIEvent,
		value: string,
	) => {
		event.preventDefault();

		updateFilters((state) =>
			state.map((f) => {
				if (f.label === value) {
					return {
						...f,
						isChecked: true,
					};
				}

				f.isChecked = false;

				return f;
			}),
		);
	};

	const FilterList = () => {
		return (
			<ul className={styles.IsotopeFilterList}>
				{filters.map((f, key) => (
					<li key={key}>
						<Typography
							href="/"
							onClick={(event) => {
								onFilter(event as any, f.label);
							}}
							component="a"
							variant="TextLarge"
							decoration="None"
							color={
								f.isChecked ? 'Dark' : 'Muted'
							}
						>
							{f.text}
						</Typography>
					</li>
				))}
			</ul>
		);
	};

	const IsotopeData = () => {
		return (
			<IsoTopeGrid
				gridLayout={cardsDefault as any}
				noOfCols={noOfCols}
				unitHeight={100}
				unitWidth={itemWidth}
				filters={filters}
			>
				{children as any}
			</IsoTopeGrid>
		);
	};

	return (
		<div
			className={styles.Isotope}
			style={{
				height: containerHeight,
			}}
		>
			{FilterList()}

			<div
				className={styles.IsotopeContainer}
				ref={containerRef as any}
			>
				{IsotopeData()}
			</div>
		</div>
	);
};

export default Isotope;
