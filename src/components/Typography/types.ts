import {
	CSSProperties,
	ElementType,
	AllHTMLAttributes,
	StyleHTMLAttributes,
} from 'react';

type variant =
	| 'Default'
	| 'Display1'
	| 'Display5'
	| 'Display4'
	| 'Display6'
	| 'TextSmall'
	| 'Subtitle'
	| 'Date'
	| 'TextLarge'
	| 'LinkSmall';
type dir = 'rtl' | 'ltr';
type align =
	| 'Left'
	| 'Center'
	| 'Right'
	| 'Inherit'
	| 'Justify';
type display =
	| 'Inline'
	| 'InlineBlock'
	| 'Block'
	| 'Initial'
	| 'None';
type color =
	| 'Dark'
	| 'Lite'
	| 'Muted'
	| 'Secondary'
	| 'Danger';
type others = AllHTMLAttributes<HTMLElement>;
type decoration =
	| 'None'
	| 'UnderLine'
	| 'LineThrough'
	| 'OverLine';

type tFontFamily = 'Vazir' | 'mikhak';

export interface ITypographyProps extends others {
	variant?: variant;
	component?: ElementType | 'Link';
	text?: string;
	dir?: dir;
	noWrap?: boolean;
	align?: align;
	decoration?: decoration;
	display?: display;
	style?: CSSProperties;
	color?: color;
	noneSelection?: boolean;
	activeStyle?: StyleHTMLAttributes<
		HTMLLinkElement
	>;
	labelForm?: boolean;
	flash?: boolean;
	fontFamily?: tFontFamily;
}
