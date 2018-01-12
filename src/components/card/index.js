import React, {Component} from 'react'
import {runesToCard} from './runesToCard'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Card extends Component {

	render() {

		//console.log("+++++++++++++++",this.props.cards)

		if(this.props.cards.runes !== undefined){
		const card = runesToCard(this.props.cards.runes), key = this.props.key
			return (

				<div key={'card__frame_'+key}  className={`card card__frame card_${card.color}`}>

					<div key={'card__rarity_'+key} className={`card card__rarity card__rarity_${this.props.cards.rarity}`}/>

					<div className="ui fluid image">

						{
							(this.props.cards.sell) ?
								<Price key={key} price={/*(Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4)*/this.props.cards.price} />
								: ''
						}

						{
							( true/*this.props.card.breed === true*/) ? <Breed key={key} /> : ''
						}

						<img key={'card__art_'+key}
								 className='card__art'
								 src={`../assets/imgs/art/${card.runes.match(/[a-zA-Z]*/)[0]}.jpg`}
						/>

					</div>
					{/*<a className="ui yellow image label">
					 <img src="/images/avatar/small/christian.jpg"/>
					 New
					 <div className="detail">For Sale</div>
					 </a>*/}



					<div key={'card__type_'+key} className={`card card__type card__type_${card.attackType}`}/>

					<div key={'card__stats_mana_'+key} className={`card card__stats card__stats_mana card__stats_${card.mana}`}/>

					<Attack key={key} attack={card.attack} />

					<Defense key={key} defense={card.defense} />
					<Hp key={key} hp={card.hp} />
					<div key={'card__text_name_'+key} className='card__text card__text_name'>{card.name}</div>
					<div key={'card__text_body_'+key} className='card__text card__text_body'>{card.text}</div>
				</div>
			)
		} else return (<div>Loading</div>)




	}
}


const Attack = ({attack, key}) => (
	attack!== undefined? <div key={'card__stats_attack_'+key} className={`card card__stats card__stats_attack card__stats_${attack}`}/> :''
)
const Defense = ({defense, key}) => (
	defense!== undefined? <div key={'card__stats_defense_'+key} className={`card card__stats card__stats_defense card__stats_${defense}`}/> :''
)
const Hp = ({hp, key}) => (
	hp!== undefined? <div key={'card__stats_hp_'+key} className={`card card__stats card__stats_hp card__stats_${hp}`}/> :''
)

/* Price tag assets/css/card.css */
const Price = ({price, key}) => ( <div key={'red_label_'+key} className="floating ui red label">Sell {price}</div>)

/* Breed css main */
const Breed = ({key}) => (
	<div key={'ribbon_label_'+key} className="ui red ribbon label">
	<i key={'hotel_icon_'+key} className="hotel icon"/> Breed </div>
)


const mapStateToProps = state => ({
	card: state.card,
});

const mapDispatchToProps = dispatch => ({
	//loginActions: bindActionCreators(loginActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Card);
