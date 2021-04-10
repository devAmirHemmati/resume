import { IAsideState } from './reducers/Aside/@types';
import { INavbarState } from './reducers/Navbar/@types';
import { IUserInformationState } from './reducers/UserInformation/@types';

interface ISelectorState {
	NavbarReducer: INavbarState;
	AsideReducer: IAsideState;
	UserInformationReducer: IUserInformationState;
}

export default ISelectorState;
