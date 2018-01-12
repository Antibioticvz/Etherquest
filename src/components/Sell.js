import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sellActions from '../reducers/sell/actions'
import ThisCard from '../components/card'


class Sell extends Component {

	componentWillMount(){
		//console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.sellActions.getSell(this.props.match.params.id)
		// ToDo this.props.cardActions.getCardRarity(this.props.match.params.id)
	}

	render() {
		/*console.log('This is the single buy ID you need to call an API by passing ID from params')
		 console.log(this.props.match.params.id)*/
		//const Card = this.props.buy
		//console.log(this.props.buy)

		// ToDo Connect to api
		const User = {owner: true},
			Card = this.props.sell

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
								/*runes={'l(10)5(10)56'/!*this.props.sell.runes*!/}
								 rarity={'legendary'/!*this.props.sell.rarity*!/}*/
							/>
						</div>

						{/*<!-- Description Box -->*/}

					</div>

					<br/>
					<br/>
					<br/>
					<br/>



					<center>
						<div>

							<div className="ui form">
								<div className="inline fields">
									<div className="eight wide field">
										<label>Price Min</label>
										<button className="ui icon button"><i className="add icon"/></button>
										<input type="text" placeholder="0.001"/>
										<button className="ui icon button"><i className="minus icon"/></button>
									</div>
								</div>

								<div className="ui clearing divider"/>

								<div className="inline fields">
									<div className="eight wide field">
										<label>Price Max</label>
										<button className="ui icon button"><i className="add icon"/></button>
										<input type="text" placeholder="0.001"/>
										<button className="ui icon button"><i className="minus icon"/></button>
									</div>
								</div>

								<div className="ui clearing divider"/>

								<div className="inline fields">
									<div className="eight wide field">
										<label>Duration</label>
										<button className="ui icon button"><i className="add icon"/></button>
										<input type="text" placeholder="1"/>
										<button className="ui icon button"><i className="minus icon"/></button>
									</div>
								</div>

							</div>
							<button className="buy-button ui black basic button">Sell</button>
						</div>
					</center>

				</div>

			</div>
		)
	}
}



const mapStateToProps = state => ({
	sell: state.sell,
});

const mapDispatchToProps = dispatch => ({
	sellActions: bindActionCreators(sellActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sell);
