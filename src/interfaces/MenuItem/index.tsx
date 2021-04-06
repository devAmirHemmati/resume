import { FC, forwardRef, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import Link from 'next/link';
import { Collapse } from 'react-collapse';
import { IMenuItemProps } from './types';
import styles from './MenuItem.module.scss';
import { Typography } from '..';

const MenuItem: FC<IMenuItemProps> = forwardRef(
	(
		{
			className = '',
			children,
			items,
			href,
			to = '/',
			style,
			active,
			index = 0,
			...rest
		},
		ref,
	) => {
		const router = useRouter();
		const [
			showItems,
			setShowItems,
		] = useState<boolean>(false);

		const MenuItemLink = () => {
			if (typeof href === 'string') {
				return (
					<Typography
						href={href}
						component="a"
						variant="TextSmall"
						fontFamily="mikhak"
						hoverColor="Dark"
						className={styles.MenuItemLink}
						decoration="None"
					>
						{children}
					</Typography>
				);
			}
			return (
				<Link href={to}>
					<Typography
						component="a"
						variant="TextSmall"
						fontFamily="mikhak"
						color={
							router.pathname === to
								? 'Dark'
								: 'Secondary'
						}
						hoverColor="Dark"
						className={styles.MenuItemLink}
					>
						{children}
					</Typography>
				</Link>
			);
		};

		const MenuItemList = () => {
			const switchShowItemsHandler = () => {
				setShowItems(
					(prevShowItems) => !prevShowItems,
				);
			};

			return (
				<div className={styles.MenuItemList}>
					<div
						className={styles.MenuItemListTextBox}
						onClick={switchShowItemsHandler}
					>
						<Typography component="span">
							{children}
						</Typography>

						<AiOutlineCaretLeft
							style={{
								transform: `rotate(${
									showItems ? -90 : 0
								}deg)`,
							}}
						/>
					</div>

					<Collapse isOpened={showItems}>
						<ul>
							{items.map((item, key) => {
								if (typeof href === 'string') {
									<li key={key}>
										<Typography
											href={href}
											component="a"
											variant="TextSmall"
											fontFamily="mikhak"
											hoverColor="Dark"
											className={
												styles.MenuItemLink
											}
											decoration="None"
										>
											{item.text}
										</Typography>
									</li>;
								}
								return (
									<li key={key}>
										<Link href={item.to}>
											<Typography
												href={href}
												component="a"
												variant="TextSmall"
												fontFamily="mikhak"
												hoverColor="Dark"
												className={
													styles.MenuItemLink
												}
												decoration="None"
											>
												{item.text}
											</Typography>
										</Link>
									</li>
								);
							})}
						</ul>
					</Collapse>
				</div>
			);
		};

		return (
			<li
				ref={ref as any}
				className={`${styles.MenuItem} ${
					active
						? styles.MenuItemActive
						: styles.MenuItemDeActive
				} ${className}`}
				style={{
					animationDelay: `${index * 0.1}s`,
					...styles,
				}}
				{...rest}
			>
				{typeof items === 'undefined'
					? MenuItemLink()
					: MenuItemList()}
			</li>
		);
	},
);

export default MenuItem;
