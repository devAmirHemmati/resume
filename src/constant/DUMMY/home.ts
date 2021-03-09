interface IHome {
	skills: string[];
	title: string;
	avatar: string;
	countUp: { value: number; text: string }[];
}

export const DUMMY_HOME: IHome = {
	skills: [
		'مهارت در ساخت',
		'اپلیکیشن اندروید',
		'وب اپلیکیشن',
	],
	title: `رزومه و نمونه کارهای من را
مشاهده کنید!`,
	avatar: '/Images/profile-lg.png',
	countUp: [
		{
			value: 10,
			text: 'سال تجربه کاربری',
		},

		{
			value: 143,
			text: 'پروژه انجام شده',
		},
		{
			value: 20,
			text: 'مشتری رضایتمند',
		},
		{
			value: 114,
			text: 'جوایز و دستاوردها',
		},
	],
};
