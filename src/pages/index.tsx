import { VFC } from 'react';
import { Card } from '../components';

const Home: VFC = () => {
	return (
		<div>
			<Card
				art={{
					message: 'ویژه',
					position: 'bottomRight',
				}}
				style={{ height: 300, width: 500 }}
			>
				test
			</Card>
		</div>
	);
};

export default Home;
