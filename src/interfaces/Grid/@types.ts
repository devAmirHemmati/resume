import { AllHTMLAttributes } from 'react';

type others = AllHTMLAttributes<HTMLDivElement>;
type gridNumber =
	| 'Auto'
	| 'All'
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12;
type gridObj = {
	Xs?: gridNumber;
	Sm?: gridNumber;
	Md?: gridNumber;
	Lg?: gridNumber;
	Xl?: gridNumber;
};
type grid = 'All' | 'Auto' | gridObj;

export interface IProps extends others {
	container?: boolean;
	grid?: grid;
}
