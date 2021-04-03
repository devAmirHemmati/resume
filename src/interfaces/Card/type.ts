import { AllHTMLAttributes } from 'react';

type tArtPosition =
	| 'topLeft'
	| 'topRight'
	| 'bottomLeft'
	| 'bottomRight';

type tArt =
	| string
	| {
			message: string;
			position?: tArtPosition;
	  };

export interface ICardProps
	extends AllHTMLAttributes<HTMLDivElement> {
	art?: tArt;
	flash?: boolean;
}
