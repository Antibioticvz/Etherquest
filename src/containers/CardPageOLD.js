import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cardActions from '../reducers/card/actions'
import Card from '../components/card'

import {runesToCard} from '../components/card/runesToCard'

class CardPage extends Component {

	componentWillMount(){
		console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.cardActions.getCard(this.props.match.params.id)
		// ToDo this.props.cardActions.getCardRarity(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.cardActions.cardInitState()
	}

	render() {
		/*console.log('This is the single card ID you need to call an API by passing ID from params')
		 console.log(this.props.match.params.id)*/
		//const Card = this.props.card
		//console.log(this.props.card)

		// ToDo Connect to api
		const User = true

		return (
			<div>

				<div className="item-page__wrapper ui container">
					<div className="ui centered grid item-page__details">

						{/*<!-- Big Card -->*/}

						<div className="four wide computer eight wide tablet sixteen wide mobile column">
							<Card
								runes={'l(10)5(10)56'/*this.props.card.runes*/}
								rarity={'legendary'/*this.props.card.rarity*/}
							/>
						</div>

						{/*<!-- Description Box -->*/}

						<div className="ten wide computer sixteen wide mobile column">

							{/*<!-- Stats Box -->*/}

							<div className="row item-page__stats">
								<div className="ui centered four column grid">

									{/*<!-- Price -->*/}

									<div className="ui column tiny statistic">
										<div className="label">
											PRICE
										</div>
										<div className="value">
											{this.props.card.price}
										</div>
									</div>

									{/*<!-- Time Left -->*/}

									<div className="ui column tiny statistic">
										<div className="label">
											TIME LEFT
										</div>
										<div className="value">
											{this.props.card.time}
										</div>
									</div>

									{/*<!-- Rarity -->*/}

									<div className="ui column tiny statistic">
										<div className="label">
											RARITY
										</div>
										<div className="value">
											{this.props.card.rarity}
										</div>
									</div>

								</div>

							<div className="row item-page__description">
								<div className="ui bulleted list">
									<div className="item">Mana Cost: {this.props.card.mana}</div>
									<div className="item">HP: {this.props.card.hp} / Attack: {this.props.card.attack} / Defense: {this.props.card.defense}</div>
									<div className="item">{this.props.card.text}</div>
								</div>
							</div>


							<div className="row ui form item-page__buy">
								<div className="field">
									{/*ToDo Need to check the card owner*/}
									{
										User ?
											<button className="buy-button ui black basic button">Buy Now</button>
											: <button className="buy-button ui black basic button">Sell</button>
									}
          <p className="buy-warning-label">Warning: Do not send Ether from an exchange's address.</p>
        </div>
      </div>


      <div className="ui centered two column grid form item-page__relatives">



        <div className="column ui centered">
          <h3 className="item-page__etymology">Origins</h3>
          <div className="item-page__icon">
            <div className="item-pave__img-wrapper item-card__bg1">
              <a href="#"><img className="etymology-card" src="../assets/imgs/cards/2.png"/></a>
									<a href="#"><img className="etymology-card" src="../assets/imgs/cards/7.png"/></a>
								</div>
							</div>
						</div>

						{/*<!-- Derivations -->*/}

						<div className="column">
							<h3 className="item-page__etymology">Derivations</h3>
							<div className="item-page__icon">
								<a href="#"><img className="etymology-card" src="../assets/imgs/cards/1.png"/></a>
								<a href="#"><img className="etymology-card" src="../assets/imgs/cards/7.png"/></a>
							</div>
						</div>

					</div> {/*<!-- End Etomology -->*/}

				</div> {/*<!-- End Description -->*/}

			</div>
	</div>




			</div>

			</div>
		)
	}
}



const mapStateToProps = state => ({
	card: state.card,
});

const mapDispatchToProps = dispatch => ({
	cardActions: bindActionCreators(cardActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CardPage);
