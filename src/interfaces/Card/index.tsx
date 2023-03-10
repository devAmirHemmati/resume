import { FC } from 'react';
import Utilities from '../../Services/Utilities';
import styles from './Card.module.scss';
import { ICardProps } from './type';

const Card: FC<ICardProps> = ({
	children,
	className,
	art,
	flash,
	...rest
}) => {
	const ArtBox = () => {
		return (
			<div
				className={`${styles.CardArt} ${
					typeof art === 'object'
						? styles[
								`CardArtAlign${Utilities.upperCaseFirstLetter(
									art.position || 'Left',
								)}`
						  ]
						: styles.CardArtAlignLeft
				}`}
			>
				{typeof art === 'string'
					? art
					: art.message}
			</div>
		);
	};

	return (
		<div
			className={`${styles.Card} ${className}`}
			{...rest}
		>
			{typeof art !== 'undefined' && ArtBox()}

			{flash && (
				<span className={styles.CardFlash} />
			)}

			{children}
		</div>
	);
};

export default Card;
