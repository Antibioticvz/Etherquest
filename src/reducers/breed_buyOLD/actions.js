import { createAction } from 'redux-actions';

import breedBuyActions from './type';


//test
import u from '../../util'
const rarity = () => { return u.randomItemFrom(['legendary', 'epic', 'rare', 'uncommon', 'common-1', 'common-2', 'common-3', 'common-4', 'common-5', 'common-6', 'common-7', 'common-8', 'common-9', 'common-10', 'common-11', 'common-12', 'common-13', 'common-14', 'common-15']) }
const runes = () => {
	let runes
	runes = u.randomItemFrom(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']) + '(10)'
	runes += u.randomItemFrom(['1', '2', '3', '4', '5', '6', '7', '8']) + '(10)'
	runes += u.randomItemFrom(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
	runes += u.randomItemFrom(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
	return runes
}
const randomDate = (start, end) => ( new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())))



// Drop all states
export const breedBuyInitState = createAction(breedBuyActions.BREEDBUY_INIT_STATE);

// Universal onChange
// e => onChange(e.target.value, e.target.name)
export const onChangeBreedbuy = createAction(breedBuyActions.ON_CHANGE_BREEDBUY, (value, field) => ({
	value,
	field,
}));

export const setBreedbuyProps = createAction(breedBuyActions.SET_BREEDBUY_PROPS);

export const getCardBreedbuy = (id) => dispatch =>{

	// call to api
	//.then(response => dispatch(createAction(response)))
	//.catch()

  // console.log('getCard', getCard)

	// Test
	let breedbuy = {
		owner: 'me',
		id: id,
		tags: ['Tag', 'Breed'],

		created: Date.now(),

		origins: '',
		derivations: '',

		// Breed
		breed: true,

		//Sell
		difficul: '',
		auction: '',
		price: '1.2',
		time: '23h',

		runes: 'l(10)5(10)56',

		rarity: 'legendary',

		 attack: 2,
		 attackType: "melee",
		 color: "dark",
		 defense: 3,
		 hp: 1,
		 mana: 10,
		 name: "Card name",
		 text: "Protection from magic damage. As an additional casting cost, remove 4 HP from target creature you control.",
		 type: "creature",


	}

	//console.log('getCard', breedbuy)
	// END Test

	dispatch(onChangeBreedbuy(breedbuy ,'card'))

};

export const getMyCardsBreedbuy = () => dispatch => {

	// call to api
	//.then(response => dispatch(createAction(response)))
	//.catch()

	// Test
	let cards=[], i = 0, len = 10;
	for (; i < len; ) {

		cards.push({
			id: Math.random(),
			runes: runes(),
			rarity: rarity(),
			date: randomDate(new Date(2012, 0, 1), new Date()),
			price: Math.random(),
			breed: Math.random() >= 0.5,
			sell: Math.random() >= 0.5
		});
		i++;
	}

	/*console.log('===============cards=============')
	 console.log(cards)*/

	// END Test

	dispatch(onChangeBreedbuy(cards, 'myCards'))

}