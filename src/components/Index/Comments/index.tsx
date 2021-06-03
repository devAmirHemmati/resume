import {
	VFC,
	useEffect,
	useCallback,
	useState,
} from 'react';
import {
	Carousel,
	Comment,
	Typography,
} from '../../../interfaces';
import styles from './Comments.module.scss';
import { ICommentsProps } from './types';

const Comments: VFC<ICommentsProps> = ({
	comments,
	className = '',
	title,
	...rest
}) => {
	const [item, setItem] = useState<number>(2);

	const resizeHandler = useCallback(
		(windowSize: number) => {
			if (windowSize >= 575.98) {
				setItem(2);
			} else {
				setItem(1);
			}
		},
		[],
	);

	useEffect(() => {
		resizeHandler(window.innerWidth);

		window.addEventListener(
			'resize',
			(event: any) =>
				resizeHandler(event.target.innerWidth),
		);

		return () => {
			window.removeEventListener(
				'resize',
				(event: any) =>
					resizeHandler(event.target.innerWidth),
			);
		};
	}, []);

	return (
		<section
			className={`${styles.Comments} ${className}`}
			{...rest}
		>
			<Typography
				component="h4"
				variant="Display4"
				noneSelection
			>
				{title}
			</Typography>

			<div className={styles.CommentsList}>
				<Carousel
					rtl
					slidesPerPage={item}
					offset={item === 2 ? 15 : 0}
				>
					{comments.map((comment, key) => (
						<div
							key={key}
							style={{
								padding: '33px 15px 0 5px',
								width: '100%',
							}}
						>
							<Comment
								name={comment.name}
								avatar={comment.avatar}
								rating={comment.rating}
								workName={comment.workName}
							>
								{comment.description}
							</Comment>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Comments;
