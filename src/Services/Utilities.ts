import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import {
	FaTelegram,
	Fa500Px,
	FaGithubSquare,
	FaLinkedin,
	FaStackOverflow,
	FaInstagramSquare,
	FaWhatsappSquare,
	FaTwitterSquare,
	FaGitlab,
	FaFacebookSquare,
} from 'react-icons/fa';

type socialNames =
	| 'virgool'
	| 'stackoverflow'
	| 'linkedin'
	| 'github'
	| 'telegram'
	| 'instagram'
	| 'whatsapp'
	| 'twitter'
	| 'gitlab'
	| 'facebook'
	| '';
type tSocialName = {
	name: socialNames;
	url: string;
};

class Utilities {
	// hello word => Hello world
	public static upperCaseFirstLetter(
		word: string,
	): string {
		return String().concat(
			word.charAt(0).toUpperCase(),
			word.slice(1, word.length),
		);
	}

	public static getSocialNameInLink(
		url: string,
	): tSocialName {
		const socialsName: tSocialName[] = [
			{
				url: 'https://virgool.io/',
				name: 'virgool',
			},
			{
				url: 'linkedin.com/',
				name: 'linkedin',
			},
			{
				url: 'https://stackoverflow.com/',
				name: 'stackoverflow',
			},
			{
				url: 'https://github.com/',
				name: 'github',
			},
			{
				url: 't.me/',
				name: 'telegram',
			},
			{
				url: 'instagram.com/',
				name: 'instagram',
			},
			{
				url: 'wa.me/',
				name: 'whatsapp',
			},
			{ url: 'twitter.com/', name: 'twitter' },
			{ url: 'github.com/', name: 'gitlab' },
			{ url: 'facebook.com/', name: 'facebook' },
		];

		let activeSocialName: tSocialName = {
			name: '',
			url: '',
		};

		for (const socialName of socialsName) {
			const matchSocialName = url.match(
				socialName.url,
			);

			if (Array.isArray(matchSocialName)) {
				activeSocialName = socialName;
				break;
			}
		}

		return activeSocialName;
	}

	public static getIconWihName(
		socialName: socialNames,
	): FC<IconBaseProps> {
		switch (socialName) {
			case 'virgool':
				return FaTelegram;

			case 'github':
				return FaGithubSquare;

			case 'linkedin':
				return FaLinkedin;

			case 'stackoverflow':
				return FaStackOverflow;

			case 'telegram':
				return FaTelegram;

			case 'instagram':
				return FaInstagramSquare;

			case 'whatsapp':
				return FaWhatsappSquare;

			case 'twitter':
				return FaTwitterSquare;

			case 'gitlab':
				return FaGitlab;

			case 'facebook':
				return FaFacebookSquare;

			default:
				return Fa500Px;
		}
	}

	public static removeZeroFromOneDigitNumber(
		str: string,
	): string {
		return str.replace(/^0/, '');
	}
}

export default Utilities;
