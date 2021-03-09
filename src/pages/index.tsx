import { VFC } from 'react';
import { Banner } from '../components/Index';
import { DUMMY_HOME } from './../constant/DUMMY/home';

const Home: VFC = () => {
	return (
		<div>
			<Banner
				title={DUMMY_HOME.title}
				skills={DUMMY_HOME.skills}
				profile={DUMMY_HOME.avatar}
			/>
		</div>
	);
};

export default Home;
