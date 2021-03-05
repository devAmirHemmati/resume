import { FC } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import {
	FaTelegram,
	FaWhatsappSquare,
	FaLinkedin,
	FaFacebookSquare,
	FaGithubSquare,
} from 'react-icons/fa';

const DUMMY_SOCIALS: {
	Icon: FC<IconBaseProps>;
	url: string;
	title: string;
}[] = [
	{
		Icon: FaTelegram,
		url: 'https://google.com',
		title: 'تلگرام',
	},
	{
		Icon: FaWhatsappSquare,
		url: 'https://google.com',
		title: 'واتساپ',
	},
	{
		Icon: FaLinkedin,
		url: 'https://google.com',
		title: 'لینکدین',
	},
	{
		Icon: FaFacebookSquare,
		url: 'https://google.com',
		title: 'فیس بوک',
	},
	{
		Icon: FaGithubSquare,
		url: 'https://google.com',
		title: 'گیت هاب',
	},
];

export default DUMMY_SOCIALS;
