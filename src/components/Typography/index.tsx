import { forwardRef, useRef, FC } from 'react';
import Link from 'next/link';
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
			flash,
			href,
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
		${styles[variant]} ${
			styles[`TypographyDecoration${decoration}`]
		} ${styles[`TypographyVariant${variant}`]} ${
			styles[`TypographyColor${color}`]
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
				style={{ cursor: cursorStyle, ...style }}
			>
				{children || text}
			</Component>
		);
	},
);

export default Typography;
