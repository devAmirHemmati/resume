import { IHistoryEducationItems } from '../../components/History/Education/types';
import { IHistoryWorkItems } from '../../components/History/Work/types';

export const DUMMY_HISTORY: {
	works: IHistoryWorkItems[];
	educations: IHistoryEducationItems[];
} = {
	works: [
		{
			title: 'شرکت دایرکت',
			side: 'ریکت',
			startDate: new Date().toString(),
			endDate: new Date().toString(),
			description:
				'همکاری با شرکت ارتباطات به عنوان توسعه دهنده در زمینه تولید زیر ساخت های ارتباطی',
		},
		{
			title: 'شرکت دایرکت',
			side: 'ریکت',
			startDate: new Date().toString(),
			endDate: new Date().toString(),
			description:
				'همکاری با شرکت ارتباطات به عنوان توسعه دهنده در زمینه تولید زیر ساخت های ارتباطی',
		},
		{
			title: 'شرکت دایرکت',
			side: 'ریکت',
			startDate: new Date().toString(),
			description:
				'همکاری با شرکت ارتباطات به عنوان توسعه دهنده در زمینه تولید زیر ساخت های ارتباطی',
		},
		{
			title: 'شرکت دایرکت',
			side: 'ریکت',
			startDate: new Date().toString(),
			description:
				'همکاری با شرکت ارتباطات به عنوان توسعه دهنده در زمینه تولید زیر ساخت های ارتباطی',
		},
	],
	educations: [
		{
			title: 'دبیرستان',
			side: 'دانش آموز',
			startDate: new Date().toString(),
			description:
				'دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران',
		},
	],
};
