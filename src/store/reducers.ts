import { combineReducers } from 'redux';
import NavbarReducer from './reducers/Navbar';
import AsideReducer from './reducers/Aside';
import UserInformationReducer from './reducers/UserInformation';
import MyWorksReducer from './reducers/MyWorks';

export default combineReducers({
	NavbarReducer,
	AsideReducer,
	UserInformationReducer,
	MyWorksReducer,
});
