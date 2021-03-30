import { IMenuListItem } from './types';

const NavigationItems: IMenuListItem[] = [
	{
		text: 'خانه',
		to: '/',
	},
	{
		text: 'نمونه کار',
		items: [
			{
				text: 'لیست تمام نمونه کار ها',
				to: '/my-works',
			},
			{
				text: 'اولی',
				to: '/my-works/1',
			},
			{
				text: 'دومی',
				to: '/my-works/2',
			},
			{
				text: 'سومی',
				to: '/my-works/3',
			},
		],
	},
	{
		text: 'تاریخچه',
		to: '/history',
	},
	{
		text: 'مقالات',
		items: [
			{
				text: 'اولی',
				to: '/blog/1',
			},
			{
				text: 'دومی',
				to: '/blog/2',
			},
			{
				text: 'سومی',
				to: '/blog/3',
			},
		],
	},
	{
		text: 'تماس با من',
		to: '/contact',
	},
];

export default NavigationItems;
