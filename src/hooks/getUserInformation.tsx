import { useEffect, useCallback } from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import { APIGetUserInformation } from '../Api';
import ISelectorState from '../store/@types';
import { IUserInformationState } from '../store/reducers/UserInformation/@types';
import {
	setLoadingUserInformation,
	setUserInformation,
} from '../store/reducers/UserInformation/actions';

const useGetUserInformation = (): IUserInformationState => {
	const {
		isGetData,
		...rest
	}: IUserInformationState = useSelector<
		ISelectorState,
		IUserInformationState
	>((store) => store.UserInformationReducer);
	const dispatch = useDispatch();

	const getUserInformationHandler = useCallback(async () => {
		const data = await APIGetUserInformation();

		dispatch(setUserInformation(data));
		dispatch(setLoadingUserInformation(false));
	}, []);

	useEffect(() => {
		if (!isGetData) {
			getUserInformationHandler();
		}
	}, [isGetData]);

	return {
		isGetData,
		...rest,
	};
};

export default useGetUserInformation;
