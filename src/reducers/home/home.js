import React from 'react';

import homeActions from './type';


const initialState = {
	cards: [],
	cardsToShow: [],
	pag: 0,
	filter: []
};


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case homeActions.HOME_INIT_STATE:
			return {
				...initialState,
			};

		case homeActions.SET_HOME_CARDS:
			return {
				...state,
				cards: action.payload,
				cardsToShow: action.payload,
				filter: action.payload,

			};

		case homeActions.SET_HOME_CARDS_TO_SHOW:
			return {
				...state,
				cardsToShow: action.payload,

			};

		case homeActions.ON_CHANGE_HOME:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};

		default:
			return state;
	}
};

export default reducer;
