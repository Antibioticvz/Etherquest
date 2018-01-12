import React from 'react';

import breedBuyActions from './type';


const initialState = {
	card: '',
	cardBreed : '',
	myCards: [],
	selectBreed: false,
};


const reducer = (state = initialState, action) => {
	switch (action.type) {

		case breedBuyActions.BREEDBUY_INIT_STATE:
			return {
				...initialState,
			};

		case breedBuyActions.SET_BREEDBUY_PROPS:
			return {
				...action.payload,
			};

		case breedBuyActions.ON_CHANGE_BREEDBUY:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};
		default:
			return state;
	}
};

export default reducer;

