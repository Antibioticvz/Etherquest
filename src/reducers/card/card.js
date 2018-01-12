import React from 'react';

import cardActions from './type';


const initialState = {
	owner: '',
	id: '',
	tags: '',

	created: '' ,// new Date.now()

	origins: '',
	derivations: '',

	// Breed
	breed: false,

	//Sell
	sell: false,
	difficul: '',
	auction: '',
	price: '',
	time: '',

	runes: 'l(10)5(10)56',

	attack: 0,
	attackType: "",
	color: "",
	defense: 0,
	hp: 0,
	mana: 0,
	name: "",
	text: "",
	type: "",

	rarity: 'legendary'

};


const reducer = (state = initialState, action) => {
	switch (action.type) {

		case cardActions.CARD_INIT_STATE:
			return {
				...initialState,
			};

		case cardActions.SET_CARD_PROPS:
			return {
				...action.payload,
			};

		case cardActions.ON_CHANGE_CARD:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};
		default:
			return state;
	}
};

export default reducer;

