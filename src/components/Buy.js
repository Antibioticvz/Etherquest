import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as buyActions from '../reducers/buy/actions'
import ThisCard from '../components/card'


class Buy extends Component {

	componentWillMount(){
		//console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.buyActions.getBuy(this.props.match.params.id)
		// ToDo this.props.cardActions.getCardRarity(this.props.match.params.id)
	}

	render() {
		/*console.log('This is the single buy ID you need to call an API by passing ID from params')
		 console.log(this.props.match.params.id)*/
		//const Card = this.props.buy
		//console.log(this.props.buy)

		// ToDo Connect to api
		const User = {owner: true},
			Card = this.props.buy

		console.log('========Card ', Card)

		return (
			<div>
				<div className="item-page__wrapper ui container">
					<div className="ui centered grid item-page__details">

						{/*<!-- Big Card -->*/}

						<div className="four wide computer eight wide tablet sixteen wide mobile column">
							<ThisCard
								key="single"
								cards={Card}
								/*runes={'l(10)5(10)56'/!*this.props.buy.runes*!/}
								 rarity={'legendary'/!*this.props.buy.rarity*!/}*/
							/>
						</div>

						{/*<!-- Description Box -->*/}

					</div>

					<br/>
					<br/>
					<br/>
					<br/>

					<center>
						<button className="buy-button ui black basic button">Buy</button>
					</center>

				</div>

			</div>
		)
	}
}



const mapStateToProps = state => ({
	buy: state.buy,
});

const mapDispatchToProps = dispatch => ({
	buyActions: bindActionCreators(buyActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Buy);
