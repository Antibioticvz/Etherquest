import { createAction } from 'redux-actions';

import sellActions from './type';

// Drop all states
export const sellInitState = createAction(sellActions.SELL_INIT_STATE);

// Universal onChange
// e => onChange(e.target.value, e.target.name)
export const onChangeSell = createAction(sellActions.ON_CHANGE_SELL, (value, field) => ({
	value,
	field,
}));
export const setSellProps = createAction(sellActions.SET_SELL_PROPS);

export const getSell = (id) => dispatch =>{

	// call to api
	//.then(response => dispatch(setSellProps(sell)) // api returns Sell object
	//.catch()


	/**
	 *
	 *
	 *
	 *
	 * 	// Test multiple
	 let carts=[], i = 0, len = 10;
	 for (; i < len; ) {

		carts.push({
			id: Math.random(),
			runes: runes(),// push runes from db
			rarity: rarity(), // I dont know how to get this from api. we maybe need one more function to call api
			date: randomDate(new Date(2012, 0, 1), new Date()),
			price: Math.random()
		});
		i++;
	}
	 *
	 *
	 *
	 *
	 *
	 * */

	// Test single
	let card = {
		owner: 'me',
		id: '23232323',
		tags: ['Tag', 'Atag2', 'taggg'],

		created: Date.now(),

		origins: '',
		derivations: '',

		// Breed
		breed: true,

		//Sell
		sell: true,
		difficul: '',
		auction: false,
		price: '1.2',
		time: '23h',

		runes: 'l(10)5(10)56',

		rarity: 'legendary',
// Dont need it. Can be generated by const card = runesToSell(this.props.runes)
		// Like here /src/components/card/index.js
		// Need to test it and see if its better to do it from here
		// maybe the same =)
		 attack: 2,
		 attackType: "melee",
		 color: "dark",
		 defense: 3,
		 hp: 1,
		 mana: 10,
		 name: "Buy name",
		 text: "Protection from magic damage. As an additional casting cost, remove 4 HP from target creature you control.",
		 type: "creature",


	}

	// END Test

	dispatch(setSellProps(card))

};