import {
	useState,
	useRef,
	useEffect,
	FC,
} from 'react';
import IsoTopeGrid from 'react-isotope';
import { Typography } from '..';
import { useGetWindowSize } from '../../hooks';
import styles from './Isotope.module.scss';
import { IIsotopeProps } from './types';

const Isotope: FC<IIsotopeProps> = ({
	cardsDefault,
	filtersDefault,
	children,
	unitHeight = 100,
	cols = 2,
}) => {
	const [filters, updateFilters] = useState(
		filtersDefault,
	);
	const [
		containerHeight,
		setContainerHeight,
	] = useState<number>(0);
	const [itemWidth, setItemWidth] = useState<
		number
	>(0);
	const containerRef = useRef<HTMLDivElement>();

	useEffect(() => {
		resizeHandler();
		window.addEventListener(
			'resize',
			resizeHandler,
		);

		return () => {
			window.removeEventListener(
				'resize',
				resizeHandler,
			);
		};
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (containerRef.current) {
				setContainerHeight(
					containerRef.current.scrollHeight + 2,
				);
			}

			resizeWindowHandler();
		}, 225);

		return () => {
			clearInterval(timer);
		};
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

		setItemWidth(
			(containerRef.current.offsetWidth -
				(cols === 1 ? 0 : 10)) /
				cols,
		);
	}

	function resizeHandler() {
		updateFilters((prevFilters) => {
			prevFilters[0].isChecked = true;

			return prevFilters;
		});
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
				noOfCols={cols}
				unitHeight={unitHeight}
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

const Compose: FC<IIsotopeProps> = ({
	cols,
	...rest
}) => {
	const [size] = useGetWindowSize();

	const [loading, setLoading] = useState<boolean>(
		true,
	);

	useEffect(() => {
		setLoading(true);
	}, [size]);

	useEffect(() => {
		if (loading) {
			setLoading(false);
		}
	}, [loading]);

	let noCols: number = cols;
	if (size === 'xs') {
		noCols = 1;
	} else {
		noCols = 2;
	}

	if (loading) {
		return <></>;
	}
	return <Isotope cols={noCols || 2} {...rest} />;
};

export default Compose;
