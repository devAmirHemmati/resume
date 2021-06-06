import { forwardRef, VFC, useState } from 'react';
import { IAvatarUploaderProps } from './types';
import styles from './styles.module.scss';

const validFiles: string[] = [
	'image/png',
	'image/gif',
	'image/jpeg',
	'image/jpg',
];

const AvatarUploader: VFC<IAvatarUploaderProps> =
	forwardRef(
		(
			{ className = '', fileChange, ...args },
			ref,
		) => {
			const [src, setSrc] = useState<string>(
				'/Images/avatar.jpeg',
			);

			const changeFileHandler = (event): void => {
				const newFile = event.target.files[0];

				const isValidFile =
					typeof validFiles.find(
						(vf) => vf === newFile.type,
					) === 'string';

				if (!isValidFile) {
					return;
				}

				const newSrc =
					URL.createObjectURL(newFile);

				setSrc(newSrc);

				if (typeof fileChange === 'function') {
					fileChange(newFile);
				}
			};

			return (
				<div
					className={`${className} ${styles.container}`}
					{...args}
					ref={ref as any}
				>
					<input
						type="file"
						className={styles.containerFileInput}
						multiple={false}
						accept={validFiles.join(', ')}
						onChange={changeFileHandler}
					/>

					<img
						src={src}
						className={styles.containerImage}
						alt="Avatar"
					/>
				</div>
			);
		},
	);

export default AvatarUploader;
