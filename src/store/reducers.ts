import { combineReducers } from 'redux';
import NavbarReducer from './reducers/Navbar';
import AsideReducer from './reducers/Aside';

export default combineReducers({
	NavbarReducer,
	AsideReducer,
});
