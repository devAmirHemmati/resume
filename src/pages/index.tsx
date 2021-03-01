import { VFC } from 'react';
import { Typography } from '../components';

const Home: VFC = () => {
	return (
		<div>
			<Typography
				variant="LinkSmall"
				color="Muted"
				component="Link"
				href="/about"
			>
				testing
			</Typography>
		</div>
	);
};

export default Home;
