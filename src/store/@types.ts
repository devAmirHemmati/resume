import { IAsideState } from './reducers/Aside/@types';
import { INavbarState } from './reducers/Navbar/@types';

interface ISelectorState {
	NavbarReducer: INavbarState;
	AsideReducer: IAsideState;
}

export default ISelectorState;
