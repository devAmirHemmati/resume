import { IComment } from '../../components/Index/Comments/types';

interface IHome {
	skills: string[];
	title: string;
	avatar: string;
	countUp: { value: number; text: string }[];
	services: {
		title: string;
		description: string;
	}[];
	comments: IComment[];
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
	services: [
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
		{
			title: 'طراحی سایت',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		},
	],
	comments: [],
};
