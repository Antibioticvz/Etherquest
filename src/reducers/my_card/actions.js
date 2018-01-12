import { createAction } from 'redux-actions';

import meActions from './type';


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
export const meInitState = createAction(meActions.ME_INIT_STATE);

// Universal onChange
// e => onChange(e.target.value, e.target.name)
export const onChangeMe = createAction(meActions.ON_CHANGE_ME, (value, field) => ({
	value,
	field,
}));

export const setMecards = createAction(meActions.SET_ME_CARDS);
export const setMecardsToShow = createAction(meActions.SET_ME_CARDS_TO_SHOW);

export const getMeCards = () => dispatch =>{
	// call to api
	//.then(response => dispatch(createAction(response)))
	//.catch()

	// Test


	/*let cards = [], cardsGr = [], b = 0, len = 50

	for (; b < len; ) {


		let i = 0, lenGR = 20

		for (; i < lenGR;) {
			cardsGr.push({
				id: Math.random(),
				runes: runes(),
				rarity: rarity(),
				date: randomDate(new Date(2012, 0, 1), new Date()),
				price: Math.random(),
				breed: Math.random() >= 0.5
			});
			i++;
		}

		b++
		cards.push(cardsGr)
		cardsGr = [], i = 0
	}*/

	let cards = [], i=0, len = 1000

	for (; i < len; ) {


		for (; i < len;) {
			cards.push({
				id: Math.random(),
				runes: runes(),
				rarity: rarity(),
				date: randomDate(new Date(2012, 0, 1), new Date()),
				sell: Math.random() >= 0.5,
				price: Math.random(),
				breed: Math.random() >= 0.5
			});
			i++;
		}

	}

	/*console.log('===============cards=============')
	console.log(carts)*/

	// END Test

	dispatch(setMecards(cards))


};

// FILTER
export const filterRarity = (rarity, cards ) => dispatch => {
	if(rarity === 'all') {
		//console.log(cards)
		dispatch(setMecardsToShow(cards))
	} else {
		let filteredCards=[]

		cards.map(card=> { if(card.rarity === rarity) filteredCards.push(card) })

		//console.log(filteredCards)
		dispatch(setMecardsToShow(filteredCards))
	}

}

// SORT
export const sortDate = (max, cards ) => dispatch => {
		max === 'max' ? cards.sort((a, b) => ( a.date-b.date )) : cards.sort((a, b) => ( b.date-a.date ))
		dispatch(setMecardsToShow(cards))
}

export const sortPrice = (max, cards ) => dispatch => {
		max === 'max' ? cards.sort((a, b) => ( a.price-b.price )) : cards.sort((a, b) => ( b.price-a.price ))
		dispatch(setMecardsToShow(cards))
}