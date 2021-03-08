import {
	Story,
	Meta,
} from '@storybook/react/types-6-0';
import '../../GlobalStyle/main.scss';
import Grid from '.';
import { IProps } from './@types';

export default {
	title: 'Components/Grid',
	component: Grid,
} as Meta;

const Template: Story<IProps[]> = (args) => {
	const filterArgs: IProps[] = Object.values(
		args,
	).filter((arg) => typeof arg === 'object');
	return (
		<Grid container>
			{filterArgs.map((arg, key) => {
				return (
					<Grid key={key} {...arg} style={{}}>
						<div
							style={{
								padding: '10px 0',
								textAlign: 'center',
								...arg.style,
							}}
						>
							Grid
						</div>
					</Grid>
				);
			})}
		</Grid>
	);
};

export const ColAll = Template.bind({});
ColAll.args = [
	{
		grid: 'All',
		style: { backgroundColor: '#ccc' },
	},
	{
		grid: 'All',
		style: {
			backgroundColor: '#454545',
			color: 'white',
		},
	},
	{
		grid: 'All',
		style: { backgroundColor: '#ccc' },
	},
	{
		grid: 'All',
		style: {
			backgroundColor: '#454545',
			color: 'white',
		},
	},
];

export const ColResponsive = Template.bind({});
ColResponsive.args = [
	{
		grid: {
			Xs: 12,
			Sm: 12,
			Md: 6,
			Lg: 3,
		},
		style: { backgroundColor: '#ccc' },
	},
	{
		grid: {
			Xs: 12,
			Sm: 12,
			Md: 6,
			Lg: 3,
		},
		style: {
			backgroundColor: '#454545',
			color: 'white',
		},
	},
	{
		grid: {
			Xs: 12,
			Sm: 12,
			Md: 6,
			Lg: 3,
		},
		style: { backgroundColor: '#ccc' },
	},
	{
		grid: {
			Xs: 12,
			Sm: 12,
			Md: 6,
			Lg: 3,
		},
		style: {
			backgroundColor: '#454545',
			color: 'white',
		},
	},
];
