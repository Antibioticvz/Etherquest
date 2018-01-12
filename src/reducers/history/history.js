import React from 'react';

import meActions from './type';


const initialState = {
	history: [],
	historyToShow: [],

};


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case meActions.HISTORY_INIT_STATE:
			return {
				...initialState,
			};

		case meActions.SET_HISTORY_CARDS:
			return {
				...state,
				history: action.payload,
				historyToShow: action.payload,

			};

		case meActions.SET_HISTORY_CARDS_TO_SHOW:
			return {
				...state,
				historyToShow: action.payload,

			};

		case meActions.ON_CHANGE_HISTORY:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};

		default:
			return state;
	}
};

export default reducer;
