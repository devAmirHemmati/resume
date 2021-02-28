import {
	Story,
	Meta,
} from '@storybook/react/types-6-0';
import Card from '.';
import { ICardProps } from './type';

export default {
	title: 'Example/Card',
	component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => (
	<Card {...args} />
);

export const FirstCard = Template.bind({});
FirstCard.args = {
	children: 'First Card Example',
};
