import { useEffect, useState } from 'react';

type tSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const useGetWindowSize = () => {
	const [size, setSize] = useState<tSizes>();

	useEffect(() => {
		getWindowSize();

		window.addEventListener(
			'resize',
			getWindowSize,
		);

		return () => {
			window.addEventListener(
				'resize',
				getWindowSize,
			);
		};
	}, []);

	function getWindowSize() {
		const windowSize = window.innerWidth;

		if (windowSize <= 575.98) {
			setSize('xs');
		} else if (windowSize <= 767.98) {
			setSize('sm');
		} else if (windowSize <= 991.98) {
			setSize('md');
		} else if (windowSize <= 1199.98) {
			setSize('lg');
		} else {
			setSize('xl');
		}
	}

	return [size];
};

export default useGetWindowSize;
