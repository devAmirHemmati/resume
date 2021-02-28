import {
	forwardRef,
	FC,
	ForwardRefExoticComponent,
} from 'react';
import { IProps } from './@types';
import styles from './Grid.module.scss';

const Grid: FC<IProps> = forwardRef(
	(
		{
			grid = 'All',
			container,
			children,
			...others
		},
		ref,
	) => {
		if (container) {
			return (
				<div
					ref={
						ref as ForwardRefExoticComponent<
							HTMLDivElement
						>
					}
					{...others}
					className={`${styles.Row} ${others.className}`}
				>
					{children}
				</div>
			);
		}

		// eslint-disable-next-line
		let classGrid: string = '';
		if (typeof grid === 'string') {
			classGrid = styles[`Col${grid}`];
		} else if (typeof grid === 'object') {
			const keys: any[] = Object.keys(grid);

			keys.forEach(
				(
					key: 'Xs' | 'Sm' | 'Md' | 'Lg' | 'Xl',
				) => {
					classGrid += ' ';
					classGrid +=
						styles[`Col${key}${grid[key]}`];
				},
			);
		}
		return (
			<div
				ref={
					ref as ForwardRefExoticComponent<
						HTMLDivElement
					>
				}
				{...others}
				className={`${classGrid} ${others.className}`}
			>
				{children}
			</div>
		);
	},
);

export default Grid;
