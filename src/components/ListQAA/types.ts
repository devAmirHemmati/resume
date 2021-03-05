import { AllHTMLAttributes } from 'react';

export interface IListQAA
	extends AllHTMLAttributes<HTMLLIElement> {
	question: string;
	answer: string;
}
