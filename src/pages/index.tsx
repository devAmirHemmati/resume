import { VFC } from 'react';
import { CircleProgress } from '../components';

const Home: VFC = () => {
	return (
		<div>
			<CircleProgress value={50} text="testing" />
		</div>
	);
};

export default Home;
