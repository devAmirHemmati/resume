/* eslint-disable no-unused-vars */

import { AllHTMLAttributes } from 'react';

export interface IAvatarUploaderProps
	extends AllHTMLAttributes<HTMLDivElement> {
	fileChange?(newFile: File): void;
}
