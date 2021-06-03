/* eslint-disable react/jsx-boolean-value */
import { VFC } from 'react';
import { IAparatProps } from './types';

const Aparat: VFC<IAparatProps> = ({
	title,
	url,
}) => {
	return (
		<div className="h_iframe-aparat_embed_frame">
			<span
				style={{
					display: 'block',
					paddingTop: '57%',
				}}
			/>

			<iframe
				title={title}
				src={url}
				allowFullScreen={true}
			/>
		</div>
	);
};

export default Aparat;
