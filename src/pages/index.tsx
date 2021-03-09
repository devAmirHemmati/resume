import { VFC } from 'react';
import {
	Banner,
	CountUp,
} from '../components/Index';
import { DUMMY_HOME } from './../constant/DUMMY/home';

const Home: VFC = () => {
	return (
		<div>
			<Banner
				title={DUMMY_HOME.title}
				skills={DUMMY_HOME.skills}
				profile={DUMMY_HOME.avatar}
			/>

			<CountUp items={DUMMY_HOME.countUp} />
		</div>
	);
};

export default Home;
