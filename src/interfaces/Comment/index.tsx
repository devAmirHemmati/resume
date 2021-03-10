import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import { ICommentProps } from './types';
import styles from './Comment.module.scss';
import { Badge, Card, Typography } from '..';

const Comment: FC<ICommentProps> = ({
	name,
	rating,
	workName,
	avatar = '/Images/avatar.jpeg',
	className = '',
	children,
	...rest
}) => {
	return (
		<Card
			className={`${styles.Comment} ${className}`}
			{...rest}
		>
			<img
				src={avatar}
				alt={name}
				className={styles.CommentAvatar}
				draggable="false"
			/>

			<div className={styles.CommentContainer}>
				<Typography
					component="h5"
					variant="TextLarge"
					color="Dark"
					fontFamily="mikhak"
					noneSelection
				>
					{name}
				</Typography>

				<div>
					<Typography
						component="span"
						variant="TextSmall"
						color="Secondary"
						className={
							styles.CommentContainerWorkName
						}
						noneSelection
					>
						{workName}
					</Typography>
				</div>

				<Typography
					component="p"
					variant="Default"
					noneSelection
				>
					{children}
				</Typography>

				<Badge
					className={
						styles.CommentContainerRating
					}
					style={{
						width: rating * 15,
						justifyContent:
							rating === 1
								? 'center'
								: 'space-between',
					}}
					notText
				>
					{Array(rating)
						.fill(null)
						.map((_, key) => (
							<FaStar key={key} />
						))}
				</Badge>
			</div>
		</Card>
	);
};

export default Comment;
