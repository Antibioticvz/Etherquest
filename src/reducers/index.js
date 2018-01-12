import { combineReducers } from 'redux';

import card from './card/card';
import home from './home/home';
import me from './my_card/me';
import history from './history/history';
import breed from './breed/breed';
import buy from './buy/buy';
import sell from './sell/sell';
//import breed_buy from './breed_buy/breedBuy';
/*import error from './error';*/

export default combineReducers({
	card, home, me, history, breed, buy, sell, //breed_buy
});
