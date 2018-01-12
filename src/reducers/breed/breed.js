import React from 'react';

import breedActions from './type';


const initialState = {
	card: '',
	cardBreed : '',
	myCards: [],
	selectBreed: false,

};


const reducer = (state = initialState, action) => {
	switch (action.type) {

		case breedActions.BREED_INIT_STATE:
			return {
				...initialState,
			};

		case breedActions.SET_BREED_PROPS:
			return {
				...action.payload,
			};

		case breedActions.ON_CHANGE_BREED:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};
		default:
			return state;
	}
};

export default reducer;

