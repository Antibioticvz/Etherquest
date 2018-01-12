import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Let the reducers handle initial state
import configureStore from './store';
const initialState = {};
const store = configureStore(initialState);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'),
);

registerServiceWorker();



