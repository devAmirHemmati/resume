import { VFC } from 'react';

const LazyImagePlaceholder: VFC<{
	scale: number;
}> = ({ scale }) => {
	return (
		<svg
			width="24"
			height="24"
			fillRule="evenodd"
			clipRule="evenodd"
			style={{
				transform: `scale(${scale})`,
			}}
			fill="#5c5c6f"
		>
			<path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
		</svg>
	);
};

export default LazyImagePlaceholder;
