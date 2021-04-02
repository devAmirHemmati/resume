type tLink = { name: string; href: string };

export const DUMMY_CONTACT: {
	links: {
		github: tLink;
		linkedin: tLink;
		virgool: tLink;
		email: tLink;
		telegram: tLink;
		instagram: tLink;
		firstPhoneNumber: tLink;
		secondPhoneNumber: tLink;
		whatsapp: tLink;
	};
} = {
	links: {
		email: {
			name: 'Email',
			href: 'dev.amirhemmati1382@gmail.com',
		},
		firstPhoneNumber: {
			name: '9399440750',
			href: '9399440750',
		},
		github: {
			name: 'github',
			href: 'https://github.com',
		},
		instagram: {
			name: 'instagram',
			href: 'https://instagram.com',
		},
		linkedin: {
			name: 'linkedin',
			href: 'https://linkedin.com',
		},
		secondPhoneNumber: {
			name: '99318425259',
			href: '99318425259',
		},
		telegram: {
			name: 'telegram',
			href: 'https://telegram.com',
		},
		virgool: {
			name: 'Virgool',
			href: 'https://virgool.io',
		},
		whatsapp: {
			name: 'Whatsapp',
			href: '9399440750',
		},
	},
};
