import { createAction } from 'redux-actions';

import historyActions from './type';


//test
const randomDate = (start, end) => ( new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())))


// Drop all states
export const historyInitState = createAction(historyActions.HISTORY_INIT_STATE);

// Universal onChange
// e => onChange(e.target.value, e.target.name)
export const onChangeHistory = createAction(historyActions.ON_CHANGE_HISTORY, (value, field) => ({
	value,
	field,
}));

export const setHistorycards = createAction(historyActions.SET_HISTORY_CARDS);
export const setHistorycardsToShow = createAction(historyActions.SET_HISTORY_CARDS_TO_SHOW);

export const getHistoryCards = () => dispatch =>{
	// call to api By User ID or from DB
	//.then(response => dispatch(createAction(response)))
	//.catch()

	// Test
	let hist=[], i = 0, len = 10;
	for (; i < len; ) {

		hist.push({
			date: randomDate(new Date(2012, 0, 1), new Date()),
			text: 'text text text text text text text text '
		});
		i++;
	}

	// END Test

	dispatch(setHistorycards(hist))


};
