interface IHome {
	skills: string[];
	title: string;
	avatar: string;
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
};
