import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk';

export default function configureStore(initialState={}) {

	// state to persist in cookies
/*	const paths = {
		'login.token': { name: 'login.token' }
	};*/

	//const value = getStateFromCookies(initialState, paths);
	/*const value = Cookie.get('login.token');
	 console.log('value')
	 console.log( value )*/

	// Create the store with two middlewares
	const middlewares = [
		thunk,
	];

	let enhancers;
	if (process.env.NODE_ENV === 'production') enhancers = [applyMiddleware(...middlewares)];
	else {
		enhancers = [
			applyMiddleware(...middlewares),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		];
	}


	// read stored data in cookies and merge it with the initial state
	//initialState = getStateFromCookies(initialState, {login:{token:value}});

	const store = createStore(
		reducers
		, initialState
		, compose(...enhancers),
	);

	// Extensions
	store.asyncReducers = {}; // Async reducer registry

	return store;
}