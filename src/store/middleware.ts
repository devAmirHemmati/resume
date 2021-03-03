import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(
	thunkMiddleware,
);

export default middleware;
