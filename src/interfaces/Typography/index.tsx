import { forwardRef, useRef, FC } from 'react';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

import { ITypographyProps } from './types';
import styles from './Typography.module.scss';

const Typography: FC<ITypographyProps> = forwardRef(
	(
		{
			labelForm,
			decoration,
			text,
			variant = 'Default',
			component = 'p',
			style,
			children,
			color,
			align,
			dir = 'rtl',
			display,
			noWrap,
			noneSelection,
			className,
			fontFamily,
			flash,
			href,
			hoverColor,
			...others
		},
		ref,
	) => {
		const isRouterLinkRef = useRef<boolean>(
			false,
		);

		let Component: any = component;
		if (component === 'Link') {
			isRouterLinkRef.current = true;
			Component = Link;
		}

		// cursor style
		let cursorStyle:
			| 'pointer'
			| 'default'
			| 'auto' = 'auto';
		if (
			noneSelection &&
			!isRouterLinkRef.current &&
			component !== 'a'
		) {
			cursorStyle = 'default';
		} else if (
			component === 'Link' ||
			component === 'a'
		) {
			cursorStyle = 'pointer';
		}

		const classes = `
		${styles.Typography}
		${styles[variant]} ${
			styles[`TypographyDecoration${decoration}`]
		} ${styles[`TypographyVariant${variant}`]} ${
			styles[`TypographyColor${color}`]
		} ${styles[`TypographyColor${color}`]} ${
			typeof hoverColor === 'string'
				? styles[
						`TypographyHoverColor${hoverColor}`
				  ]
				: ''
		} ${
			noneSelection
				? styles.TypographyNoneSelection
				: ''
		} ${
			align
				? styles[`TypographyAlign${align}`]
				: ''
		} ${dir} ${
			display
				? styles[`TypographyDisplay${display}`]
				: ''
		} ${
			noWrap ? styles.TypographyNoWrap : ''
		} ${className}`;

		if (component === 'Link') {
			return (
				<Link href={href}>
					<a
						ref={ref as any}
						className={classes}
						style={{
							cursor: cursorStyle,
							...style,
						}}
						{...others}
					>
						{children || text}

						{flash && (
							<FaAngleLeft color="#f44336" />
						)}
					</a>
				</Link>
			);
		}
		return (
			<Component
				ref={ref}
				href={href}
				{...others}
				className={classes}
				style={{
					cursor: cursorStyle,
					fontFamily,
					...style,
				}}
			>
				{children || text}
			</Component>
		);
	},
);

export default Typography;
