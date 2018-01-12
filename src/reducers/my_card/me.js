import React from 'react';

import meActions from './type';


const initialState = {
	cards: [],
	cardsToShow: [],
	pag: 0

};


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case meActions.ME_INIT_STATE:
			return {
				...initialState,
			};

		case meActions.SET_ME_CARDS:
			return {
				...state,
				cards: action.payload,
				cardsToShow: action.payload,

			};

		case meActions.SET_ME_CARDS_TO_SHOW:
			return {
				...state,
				cardsToShow: action.payload,

			};

		case meActions.ON_CHANGE_ME:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};

		default:
			return state;
	}
};

export default reducer;
