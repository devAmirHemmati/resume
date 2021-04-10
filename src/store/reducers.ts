import { combineReducers } from 'redux';
import NavbarReducer from './reducers/Navbar';
import AsideReducer from './reducers/Aside';
import UserInformationReducer from './reducers/UserInformation';

export default combineReducers({
	NavbarReducer,
	AsideReducer,
	UserInformationReducer,
});
