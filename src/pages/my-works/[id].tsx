import { VFC } from 'react';
import { WorkGallery } from '../../components/MyWork';
import { DUMMY_MY_WORK } from './../../constant/DUMMY/my-work';

const MyWork: VFC = () => {
	return (
		<div>
			<WorkGallery
				items={DUMMY_MY_WORK.gallery}
			/>
		</div>
	);
};

export default MyWork;
