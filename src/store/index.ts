import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from './middleware';
import reducers from './reducers';

const DEV_MODE =
	process.env.NODE_ENV === 'development';

const store = createStore(
	reducers,
	undefined,
	DEV_MODE
		? composeWithDevTools(middleware)
		: middleware,
);

export default store;
